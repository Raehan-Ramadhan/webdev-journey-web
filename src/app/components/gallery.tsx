"use client";

import Style from "./gallery.module.css";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { IoGlobeOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

interface Props {
	imagesSource: string[];
	details: {
		youtube: boolean;
		anchor: string;
		anchorLink: string;
		header: string;
		paragraph: string;
	}[];
	header?: string;
	colors: string[];
}

export default function Gallery({
	imagesSource,
	details,
	header,
	colors,
}: Props) {
	const gallery = useRef<HTMLDivElement>(null);
	const rightSide = useRef<HTMLDivElement>(null);
	const images = useRef<HTMLDivElement[]>([]);
	const detailsRef = useRef<HTMLDivElement[]>([]);

	colors.unshift("");
	colors.push("");

	useEffect(() => {
		const scrollbar = Scrollbar.get(document.body);

		let galleryTop = gallery.current?.getBoundingClientRect().top;
		let galleryBottom = gallery.current
			? gallery.current.getBoundingClientRect().bottom - window.innerHeight
			: 0;

		let offsetY = 0;
		let bound: number[];

		const refreshVariable = () => {
			offsetY = scrollbar ? scrollbar.offset.y : offsetY;
			galleryTop = gallery.current
				? gallery.current.getBoundingClientRect().top + offsetY
				: galleryTop;
			galleryBottom = gallery.current
				? gallery.current.getBoundingClientRect().bottom -
				  window.innerHeight +
				  offsetY
				: galleryBottom;

			if (gallery.current && scrollbar) {
				bound = Array.from(detailsRef.current).map(
					(detail) =>
						scrollbar.offset.y +
						detail.getBoundingClientRect().top -
						Math.round(window.innerHeight / 2)
				);
				bound.unshift(0);
				bound.push(
					scrollbar.offset.y +
						gallery.current.getBoundingClientRect().bottom -
						Math.round(window.innerHeight / 2)
				);
			}

			if (rightSide.current && galleryTop) {
				// Pin Image
				rightSide.current.style.transform = `translateY(${Math.min(
					Math.max(offsetY - galleryTop, 0),
					galleryBottom - galleryTop
				)}px)`;

				// Clip Image

				let a =
					((offsetY - galleryTop) / galleryBottom) * images.current.length;
				a = Math.min(Math.max(a, 0), images.current.length - 1);

				images.current.forEach((image, Index) => {
					image.style.clipPath = `inset(0 0 ${Math.max(
						(a - Index) * 100,
						0
					)}% 0)`;
				});
			}
		};
		refreshVariable();
		window.onresize = refreshVariable;

		const listener = (status: { offset: any }) => {
			if (rightSide.current && galleryTop) {
				// Pin Image
				rightSide.current.style.transform = `translateY(${Math.min(
					Math.max(status.offset.y - galleryTop, 0),
					galleryBottom - galleryTop
				)}px)`;

				// Clip Image

				let a =
					((status.offset.y - galleryTop) / galleryBottom) *
					images.current.length;
				a = Math.min(Math.max(a, 0), images.current.length - 1);

				images.current.forEach((image, Index) => {
					image.style.clipPath = `inset(0 0 ${Math.max(
						(a - Index) * 100,
						0
					)}% 0)`;
				});

				// Change Color
				for (let i = 0; i < colors.length; i++) {
					if (status.offset.y > bound[i]) {
						window.document.body.style.background = colors[i];
					}
				}
			}
		};

		scrollbar?.addListener(listener);

		return () => {
			scrollbar?.removeListener(listener);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={Style.gallery} ref={gallery}>
			<div className={Style.leftSide}>
				{details.map((detail, index) => (
					<div
						className={Style.details}
						key={index}
						ref={(element) =>
							(detailsRef.current[index] = element as HTMLDivElement)
						}
					>
						<div className={Style.textContainer}>
							<a
								className={Style.anchor}
								href={detail.anchorLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								{detail.youtube ? <AiOutlineYoutube /> : <IoGlobeOutline />}
								{detail.anchor}
							</a>
							<h1 className={Style.header}>{detail.header}</h1>
							<p className={Style.desc}>{detail.paragraph}</p>
							<div className={Style.btn}></div>
						</div>
					</div>
				))}
			</div>

			<div className={Style.rightSide} ref={rightSide}>
				<div className={Style.imageContainer}>
					{imagesSource.map((image, index) => (
						<div
							className={Style.image}
							style={{
								background: `url(${image}) no-repeat
							center/cover`,
								zIndex: imagesSource.length - index,
							}}
							key={index}
							ref={(element) =>
								(images.current[index] = element as HTMLDivElement)
							}
						></div>
					))}
				</div>
			</div>
		</div>
	);
}
