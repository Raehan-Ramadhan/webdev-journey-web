"use client";

import styles from "./page.module.css";
import Navigation from "./components/navigation";
import MouseTrail from "./components/mouse.trail";
import MyScrollBar from "./scrollbar";
import Gallery from "./components/gallery";
import { useState } from "react";

export default function Home() {
	const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });

	return (
		<>
			<div style={{ height: "100vh", width: "100vw" }}></div>
			<MyScrollBar
				setScrollPos={(x: number, y: number) => {
					setScrollPos({ x, y });
				}}
			/>
			<Gallery scrollPos={scrollPos} />
			<div style={{ height: "100vh", width: "100vw" }}></div>
			<Navigation />
			<MouseTrail />
		</>
	);
}
