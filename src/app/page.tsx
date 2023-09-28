import styles from "./page.module.css";
import Navigation from "./components/navigation";
import MouseTrail from "./components/mouse.trail";
import MyScrollBar from "./scrollbar";
import Gallery from "./components/gallery";

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
