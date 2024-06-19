import UploadcareImage from "@uploadcare/nextjs-loader";
import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";
import "./navigation.css";

function Navigation() {
	return (
		<div className="navigation pin">
			<UploadcareImage
				src="https://ucarecdn.com/87227368-ac99-4a13-a904-87d4dcc89921/"
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
