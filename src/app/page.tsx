import styles from "./page.module.css";
import Navigation from "./components/navigation";
import MouseTrail from "./components/mouse.trail";
import MyScrollBar from "./scrollbar";
import Gallery from "./components/gallery";

export default function Home() {
	const imagesCSSJourney: string[] = [
		"https://cdn.discordapp.com/attachments/596603420878700555/1159872727973367848/Showcase.png",
		"https://media.discordapp.net/attachments/596603420878700555/1159872728317313174/Showcase_1.png",
		"https://cdn.discordapp.com/attachments/596603420878700555/1159872727642030170/Showcase_2.png",
	];

	const detailsCSSJourney: {
		span: string;
		header: string;
		paragraph: string;
	}[] = [
		{
			span: "Original Tutorial",
			header: "Smart Mouse Trailer",
			paragraph:
				"A really cool mouse trailer that has some pretty smart features",
		},
		{
			span: "Original Tutorial",
			header: "Mouse Follow Logo",
			paragraph:
				"A logo given superpower to follow the mouse direction and creates fragments of itself",
		},
		{
			span: "Original Tutorial",
			header: "Mouse Button Hover Effect",
			paragraph:
				"A cool button with mouse hover effect that will highlight the area around the mouse",
		},
	];

	return (
		<>
			<div style={{ height: "100vh", width: "100vw" }}></div>
			<MyScrollBar />
			<Gallery imagesSource={imagesCSSJourney} details={detailsCSSJourney} />
			<div style={{ height: "100vh", width: "100vw" }}></div>
			<Navigation />
			<MouseTrail />
		</>
	);
}
