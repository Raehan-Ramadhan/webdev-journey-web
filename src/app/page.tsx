import styles from "./page.module.css";
import Navigation from "./components/navigation";
import MouseTrail from "./components/mouse.trail";
import Gallery from "./components/gallery";
import MyScrollBar from "./components/scrollbar";

export default function Home() {
	return (
		<>
			<MyScrollBar />
			<Gallery />
			<Navigation />
			<MouseTrail />
		</>
	);
}
