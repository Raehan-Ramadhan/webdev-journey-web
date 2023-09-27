import styles from "./page.module.css";
import Header from "./components/header";
import MouseTrail from "./components/mouse.trail";
import Gallery from "./components/gallery";

export default function Home() {
	return (
		<>
			<Gallery />
			<Header />
			<MouseTrail />
		</>
	);
}
