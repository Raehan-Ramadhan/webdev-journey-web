import styles from "./page.module.css";
import Navigation from "./components/navigation";
import MouseTrail from "./components/mouse.trail";
import MyScrollBar from "./scrollbar";

export default function Home() {
	return (
		<>
			<MyScrollBar />
			<Navigation />
			<MouseTrail />
		</>
	);
}
