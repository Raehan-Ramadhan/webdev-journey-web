import styles from "./page.module.css";
import Header from "./components/header";
import MouseTrail from "./components/mouse.trail";
import Gallery from "./components/gallery";
import MyScrollBar from "./components/scrollbar";

export default function Home() {
	return (
		<>
			<MyScrollBar />
			<Gallery />
			<Header />
			<MouseTrail />
		</>
	);
}
