"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import MouseTrail from "./components/mouse.trail";
import MyScrollBar from "./scrollbar";
import Gallery from "./components/gallery";
import GalleryMobile from "./components/gallery.mobile";
import NavigationMobile from "./components/navigation.mobile";

export default function Home() {
	const [isSSR, setIsSSR] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsSSR(false);
		setIsMobile(window.innerWidth < 768);
	}, []);

	const imagesCSSJourney: string[] = [
		"https://cdn.discordapp.com/attachments/596603420878700555/1159872727973367848/Showcase.png",
		"https://media.discordapp.net/attachments/596603420878700555/1159872728317313174/Showcase_1.png",
		"https://cdn.discordapp.com/attachments/596603420878700555/1159872727642030170/Showcase_2.png",
	];

	const detailsCSSJourney: {
		youtube: true;
		anchor: string;
		anchorLink: string;
		header: string;
		paragraph: string;
	}[] = [
		{
			youtube: true,
			anchorLink: "https://youtu.be/CZIJKkwc8l8",
			anchor: "Original Tutorial",
			header: "Smart Mouse Trailer",
			paragraph:
				"A really cool mouse trailer that has some pretty smart features",
		},
		{
			youtube: true,
			anchorLink: "https://youtu.be/5a8NyGLlorI",
			anchor: "Original Tutorial",
			header: "Mouse Follow Logo",
			paragraph:
				"A logo given superpower to follow the mouse direction and creates fragments of itself",
		},
		{
			youtube: true,
			anchorLink: "https://youtu.be/htGfnF1zN4g",
			anchor: "Original Tutorial",
			header: "Mouse Button Hover Effect",
			paragraph:
				"A cool button with mouse hover effect that will highlight the area around the mouse",
		},
	];

	const colorsCSSJourney: string[] = ["#4B657F", "#952123", "#423A3A"];

	if (isSSR) return <div className={styles.title}>Loading ...</div>;

	return (
		<>
			<div className={styles.title}> Design. Develop. Build. </div>

			{isMobile ? (
				<>
					<NavigationMobile />
					<GalleryMobile
						details={detailsCSSJourney.map((detail, index) => {
							return { ...detail, image: imagesCSSJourney[index] };
						})}
					/>
				</>
			) : (
				<>
					<MouseTrail />
					<MyScrollBar />
					<Navigation />
					<Gallery
						title="My Journey in CSS"
						imagesSource={imagesCSSJourney}
						details={detailsCSSJourney}
						colors={colorsCSSJourney}
					/>
				</>
			)}
			<div style={{ height: "100vh", width: "100vw" }}></div>
		</>
	);
}
