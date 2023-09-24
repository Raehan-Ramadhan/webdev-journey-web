import React from "react";
import Image from "next/image";
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
				<a href="#"></a>
				<a href="#"></a>
				<a href="#"></a>
			</div>
		</div>
	);
}

export default Header;
