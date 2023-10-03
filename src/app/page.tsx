"use client";

import styles from "./page.module.css";
import Navigation from "./components/navigation";
import MouseTrail from "./components/mouse.trail";
import MyScrollBar from "./scrollbar";
import Gallery from "./components/gallery";
import { useEffect, useState } from "react";

export default function Home() {
	const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });
	useEffect(() => {
		console.log(scrollPos);
	}, [scrollPos]);

	return (
		<>
			<MyScrollBar
				setScrollPos={(x: number, y: number) => {
					setScrollPos({ x, y });
				}}
			/>
			<Gallery />
			<Navigation />
			<MouseTrail />
		</>
	);
}
