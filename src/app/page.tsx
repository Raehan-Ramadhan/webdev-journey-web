"use client";

import styles from "./page.module.css";
import Navigation from "./components/navigation";
import MouseTrail from "./components/mouse.trail";
import MyScrollBar from "./scrollbar";
import Gallery from "./components/gallery";
import { useRef } from "react";

export default function Home() {
	const scrollPosRef = useRef({ x: 0, y: 0 });

	return (
		<>
			<div style={{ height: "100vh", width: "100vw" }}></div>
			<MyScrollBar
				setScrollPos={(x: number, y: number) => {
					scrollPosRef.current = { x, y };
				}}
			/>
			<Gallery scrollPosRef={scrollPosRef.current} />
			<div style={{ height: "100vh", width: "100vw" }}></div>
			<Navigation />
			<MouseTrail />
		</>
	);
}
