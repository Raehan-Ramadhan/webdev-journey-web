import styles from "./page.module.css";
import Navigation from "./components/navigation";
import MouseTrail from "./components/mouse.trail";
import MyScrollBar from "./scrollbar";
import Gallery from "./components/gallery";

export default function Home() {
	return (
		<>
			<div style={{ height: "100vh", width: "100vw" }}></div>
			<MyScrollBar />
			<Gallery />
			<div style={{ height: "100vh", width: "100vw" }}></div>
			<Navigation />
			<MouseTrail />
		</>
	);
}
