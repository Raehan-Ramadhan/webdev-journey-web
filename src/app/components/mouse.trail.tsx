"use client";

import { useEffect, useRef } from "react";
import "./mouse.trail.css";

function MouseTrail() {
	const mousePosition = useRef({ x: 0, y: 0 });

	const colors = [
		"#FFBF00",
		"#FFBF0A",
		"#FFBF14",
		"#FFBF1E",
		"#FFBF28",
		"#FFBF32",
		"#FFBF3C",
		"#FFBF46",
		"#FFBF50",
		"#FFBF5A",
		"#FFBF64",
		"#FFBF6E",
		"#FFBF78",
		"#FFBF82",
		"#FFBF8C",
		"#FFBF96",
		"#FFBFA0",
		"#FFBFAA",
		"#FFBFB4",
		"#FFBFBE",
		"#FFBFC8",
		"#FFBFD2",
		"#FFBFDC",
		"#FFBFE6",
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
			mousePosition.current = { x: e.clientX - 12, y: e.clientY - 12 };
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
