import UploadcareImage from "@uploadcare/nextjs-loader";
import styles from "./navigation.mobile.module.css";
import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";

export default function NavigationMobile() {
	return (
		<div className={styles.navigation + " pin"}>
			<UploadcareImage
				src="https://ucarecdn.com/310a2e1e-3ce4-4c20-9ea0-b6cd9375161b/"
				alt="Logo"
				width={70}
				height={70}
			/>
			<div className={styles.nav}>
				<a
					href="https://www.instagram.com/a.degu.9955"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IoLogoInstagram />
					&nbsp;Instagram
				</a>
				<a
					href="https://github.com/Raehan-Ramadhan"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IoLogoGithub />
					&nbsp;Github
				</a>
				<a
					href="https://discord.gg/DbM7Sdhqgs"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IoLogoDiscord />
					&nbsp;Discord
				</a>
			</div>
		</div>
	);
}
