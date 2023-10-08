import styles from "./gallery.mobile.module.css";
import { IoGlobeOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import Image from "next/image";

interface Props {
	details: {
		youtube: boolean;
		anchor: string;
		anchorLink: string;
		header: string;
		paragraph: string;
		image: string;
	}[];
}

export default function GalleryMobile({ details }: Props) {
	return (
		<div className={styles.gallery}>
			{details.map((detail, index) => (
				<div className={styles.container} key={index}>
					<h1 className={styles.header}>{detail.header}</h1>
					<div className={styles.buttons}>
						<a
							className={styles.anchor}
							href={detail.anchorLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							{detail.youtube ? <AiOutlineYoutube /> : <IoGlobeOutline />}
							{detail.anchor}
						</a>
						<a className={styles.codeAnchor}>
							<IoGlobeOutline /> View Code
						</a>
					</div>

					<Image
						alt=""
						src={detail.image}
						height={window.innerWidth * 0.5 - 20}
						width={window.innerWidth * 0.8}
						className={styles.image}
					></Image>
				</div>
			))}
		</div>
	);
}
