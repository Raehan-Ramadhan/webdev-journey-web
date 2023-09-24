import React from "react";
import "./mouse.trail.css";

type Props = {};

function MouseTrail({}: Props) {
	const trailIndex = Array(10).fill(null);

	return (
		<>
			{trailIndex.map((_, index) => (
				<div className={"mouse-trails trail-" + index} key={index}></div>
			))}
		</>
	);
}

export default MouseTrail;
