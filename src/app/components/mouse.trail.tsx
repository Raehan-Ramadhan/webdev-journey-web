"use client";

import { useEffect, useRef, useState } from "react";
import "./mouse.trail.css";

interface Trail {
	left: string;
	top: string;
	reachedMousePosition: boolean;
}
// .every((element) => element === true);
function MouseTrail() {
	const [trails, setTrails] = useState<Trail[]>([]);
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

	const animateTrails = () => {
		const x = mousePosition.current.x;
		const y = mousePosition.current.y;

		const newTrail: Trail = {
			left: x + "px",
			top: y + "px",
			reachedMousePosition: false,
		};

		setTrails((prevTrails) => {
			if (
				prevTrails.length === 24 &&
				prevTrails[1].left === mousePosition.current.x + "px" &&
				prevTrails[1].top === mousePosition.current.y + "px"
			) {
				return prevTrails;
			}
			const updatedTrails = [...prevTrails, newTrail].slice(-maxTrails);

			return updatedTrails.map((trail) => {
				if (
					!trail.reachedMousePosition &&
					trail.left === newTrail.left &&
					trail.top === newTrail.top
				) {
					return { ...trail, reachedMousePosition: true };
				}

				return trail;
			});
		});
	};

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mousePosition.current = { x: e.clientX - 24, y: e.clientY - 24 };
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		const intervalId = setInterval(animateTrails, 10);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<>
			{trails.map((trail, index) => (
				<div
					className="mouse-trails"
					key={index}
					style={{
						top: trail.top,
						left: trail.left,
						backgroundColor: colors[index % colors.length],
						scale: scale[index % scale.length],
					}}
				></div>
			))}
		</>
	);
}

export default MouseTrail;
