"use client";

import { useEffect, useRef } from "react";
import "./mouse.trail.css";

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
		"1.00",
		"0.98",
		"0.96",
		"0.93",
		"0.91",
		"0.89",
		"0.87",
		"0.85",
		"0.83",
		"0.80",
		"0.78",
		"0.76",
		"0.74",
		"0.72",
		"0.70",
		"0.67",
		"0.65",
		"0.63",
		"0.61",
		"0.59",
		"0.57",
		"0.54",
		"0.52",
		"0.50",
	];

	const myReq = useRef<number>(0);

	const trails = useRef<HTMLDivElement[]>([]);
	const trailsPos = useRef(
		new Array(24).fill(null).map((_, index) => {
			return { x: 0, y: 0, id: index };
		})
	);

	function animateTrails() {
		let { x, y } = mousePosition.current;
		trails.current.forEach((trail, index) => {
			trail.style.left = x + "px";
			trail.style.top = y + "px";

			trailsPos.current[index].x = x;
			trailsPos.current[index].y = y;

			const nextTrailPos = trailsPos.current[(index + 1) % 24];

			x += (nextTrailPos.x - x) * 0.3;
			y += (nextTrailPos.y - y) * 0.3;
		});
		myReq.current = requestAnimationFrame(animateTrails);
	}

	useEffect(() => {
		trails.current.forEach((trail, index) => {
			trail.style.backgroundColor = colors[index % colors.length];
			trail.style.transform = `scale(${scale[index % scale.length]})`;
		});
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
			{new Array(24).fill(0).map((trail, index) => (
				<div
					className="mouse-trails pin"
					key={trail}
					ref={(element) => (trails.current[index] = element as HTMLDivElement)}
				></div>
			))}
		</div>
	);
}
export default MouseTrail;
