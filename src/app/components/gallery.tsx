"use client";

import "./gallery.css";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { IoGlobeOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

interface Props {
	imagesSource: string[];
	details: {
		youtube: boolean;
		span: string;
		header: string;
		paragraph: string;
	}[];
}

export default function Gallery({ imagesSource, details }: Props) {
	const gallery = useRef<HTMLDivElement>(null);
	const rightSide = useRef<HTMLDivElement>(null);
	const images = useRef<HTMLDivElement[]>([]);
	useEffect(() => {
		const scrollbar = Scrollbar.get(document.body);

		let galleryTop = gallery.current?.getBoundingClientRect().top;
		let galleryBottom = gallery.current
			? gallery.current.getBoundingClientRect().bottom - window.innerHeight
			: 0;

		let offsetY = 0;

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
			}
		};

		scrollbar?.addListener(listener);

		return () => {
			scrollbar?.removeListener(listener);
		};
	}, []);

	console.log(imagesSource);

	return (
		<div className="gallery" ref={gallery}>
			<div className="left-side">
				{details.map((detail, index) => (
					<div className="details" key={index}>
						<div className="text-container">
							<span>
								{detail.youtube ? <AiOutlineYoutube /> : <IoGlobeOutline />}
								{detail.span}
							</span>
							<h1>{detail.header}</h1>
							<p className="desc">{detail.paragraph}</p>
							<div className="btn"></div>
						</div>
					</div>
				))}
			</div>

			<div className="right-side" ref={rightSide}>
				<div className="image-container">
					{imagesSource.map((image, index) => (
						<div
							className="image"
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
