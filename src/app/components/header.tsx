import React from "react";
import Image from "next/image";
import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";
import "./header.css";

type Props = {};

function Header({}: Props) {
	return (
		<div className="header">
			<Image
				src="https://cdn.discordapp.com/attachments/598648077078757376/1141024078216577095/graycat6.svg"
				alt="Logo"
				width={70}
				height={70}
			/>
			<div className="nav">
				<a href="https://www.instagram.com/a.degu.9955">
					<IoLogoInstagram />
					&nbsp;Instagram
				</a>
				<a href="https://github.com/Raehan-Ramadhan">
					<IoLogoGithub />
					&nbsp;Github
				</a>
				<a href="https://discord.gg/DbM7Sdhqgs">
					<IoLogoDiscord />
					&nbsp;Discord
				</a>
			</div>
		</div>
	);
}

export default Header;
