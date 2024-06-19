import styles from "./gallery.mobile.module.css";
import { IoGlobeOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import UploadcareImage from "@uploadcare/nextjs-loader";

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

					<div className={styles.image}>
						<UploadcareImage
							alt=""
							src={detail.image}
							fill={true}
						></UploadcareImage>
					</div>
				</div>
			))}
		</div>
	);
}
