"use client";

import "./gallery.css";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export default function Gallery() {
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

	return (
		<div className="gallery" ref={gallery}>
			<div className="left-side">
				<div className="details">
					<div className="text-container">
						<span>Github.com</span>
						<h1>Code hosting platform</h1>
						<p className="desc">
							It lets you and others work together on projects from anywhere.
						</p>
						<div className="btn"></div>
					</div>
				</div>
				<div className="details">
					<div className="text-container">
						<span>Instagram.com</span>
						<h1>Photo and video sharing</h1>
						<p className="desc">
							A simple, fun & creative way to capture, edit & share photos,
							videos & messages.
						</p>
						<div className="btn"></div>
					</div>
				</div>
				<div className="details">
					<div className="text-container">
						<span>Spotify.com</span>
						<h1>Media service provider</h1>
						<p className="desc">
							A digital music, podcast, and video service that gives you access
							to millions of content.
						</p>
						<div className="btn"></div>
					</div>
				</div>
				<div className="details">
					<div className="text-container">
						<span>Youtube.com</span>
						<h1>Online video platform</h1>
						<p className="desc">
							An online video sharing and social media platform accessible
							worldwide.
						</p>
						<div className="btn"></div>
					</div>
				</div>
			</div>
			<div className="right-side" ref={rightSide}>
				<div className="image-container">
					{new Array(4).fill(0).map((image, index) => (
						<div
							className="image"
							style={{
								background: `url(https://source.unsplash.com/BvAwzPQRRis) no-repeat
							center/cover`,
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
