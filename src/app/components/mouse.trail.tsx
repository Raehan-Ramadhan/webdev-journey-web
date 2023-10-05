"use client";

import { useEffect, useRef, useState } from "react";
import "./mouse.trail.css";

interface Trail {
	x: number;
	y: number;
}

function MouseTrail() {
	const mousePosition = useRef({ x: 0, y: 0 });

	const colors = [
		"#FF5733",
		"#FC732B",
		"#FF9A24",
		"#FFC312",
		"#F0D20B",
		"#E2F00F",
		"#B0E91D",
		"#86D812",
		"#66CC10",
		"#4FBF10",
		"#37B316",
		"#28A845",
		"#1B9D52",
		"#10A892",
		"#10B5A9",
		"#12BFFC",
		"#1091E1",
		"#1052A7",
		"#103F77",
		"#102D47",
		"#1A1A1A",
		"#2A2A2A",
		"#3A3A3A",
		"#4A4A4A",
	];

	const scale = [
		"0.50",
		"0.52",
		"0.54",
		"0.57",
		"0.59",
		"0.61",
		"0.63",
		"0.65",
		"0.67",
		"0.70",
		"0.72",
		"0.74",
		"0.76",
		"0.78",
		"0.80",
		"0.83",
		"0.85",
		"0.87",
		"0.89",
		"0.91",
		"0.93",
		"0.96",
		"0.98",
		"1.00",
	];

	const maxTrails = 24;
	const myReq = useRef<number>(0);

	// const [trails, setTrails] = useState<Trail[]>([]);

	// function animateTrails() {
	// 	if (
	// 		!(
	// 			trails.length &&
	// 			trails[0].x === mousePosition.current.x &&
	// 			trails[0].y === mousePosition.current.y
	// 		) &&
	// 		(mousePosition.current.x || mousePosition.current.y)
	// 	) {
	// 		const newTrail: Trail = mousePosition.current;

	// 		setTrails((prevTrails) => {
	// 			return [...prevTrails, newTrail].slice(-maxTrails);
	// 		});
	// 	}
	// 	myReq.current = requestAnimationFrame(animateTrails);
	// }

	// const [trails, setTrails] = useState<Trail[]>(
	// 	new Array(24).fill({ x: 0, y: 0 })
	// );

	// function animateTrails() {
	// 	const newTrails = [...trails];

	// 	let { x, y } = mousePosition.current;

	// 	newTrails.forEach((currentTrail, index) => {
	// 		currentTrail.x = x;
	// 		currentTrail.y = y;

	// 		const nextTrail = newTrails[index + 1] || newTrails[0];
	// 		x += (nextTrail.x - x) * 0.3;
	// 		y += (nextTrail.y - y) * 0.3;
	// 	});

	// 	setTrails(newTrails);

	// 	myReq.current = requestAnimationFrame(animateTrails);
	// }

	const trails = useRef<Trail[]>(new Array(24).fill({ x: 0, y: 0 }));
	const trailsDiv = useRef(
		trails.current.map((_trail, index) => (
			<div key={index} className="mouse-trails pin"></div>
		))
	);

	useEffect(() => {
		if (trailsDiv.current) {
			trailsDiv.current.forEach((trail) => {
				trail.style.opacity = "0";
			});
		}
	}, [trailsDiv]);

	function animateTrails() {
		let { x, y } = mousePosition.current;

		trails.current.forEach((trail, index) => {
			trail.x = x;
			trail.y = y;

			const nextTrail = trails.current[index + 1] || trails.current[0];
			x += (nextTrail.x - x) * 0.3;
			y += (nextTrail.y - y) * 0.3;
		});

		myReq.current = requestAnimationFrame(animateTrails);
	}

	useEffect(() => {
		myReq.current = requestAnimationFrame(animateTrails);

		return () => {
			cancelAnimationFrame(myReq.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mousePosition.current = { x: e.clientX - 24, y: e.clientY - 24 };
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="trails">
			{/* {trails.map((trail, index) => (
				<div
					className="mouse-trails pin"
					key={index}
					style={{
						top: trail.y,
						left: trail.x,
						backgroundColor: colors[index % colors.length],
						transform: `scale(${scale[index % scale.length]})`,
					}}
				></div>
			))} */}
		</div>
	);
}
export default MouseTrail;
