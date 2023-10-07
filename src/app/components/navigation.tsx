import Image from "next/image";
import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";
import "./navigation.css";

function Navigation() {
	return (
		<div className="navigation pin">
			<Image
				src="https://cdn.discordapp.com/attachments/598648077078757376/1141024078216577095/graycat6.svg"
				alt="Logo"
				width={70}
				height={70}
			/>
			<div className="nav">
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

export default Navigation;
