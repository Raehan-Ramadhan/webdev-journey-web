import styles from "./page.module.css";
import Header from "./components/header";
import MouseTrail from "./components/mouse.trail";

export default function Home() {
	return (
		<>
			<Header />
			<MouseTrail />
		</>
	);
}
