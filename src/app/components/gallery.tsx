"use client";

import "./gallery.css";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export default function Gallery() {
	const gallery = useRef<HTMLDivElement>(null);
	const rightSide = useRef<HTMLDivElement>(null);
	const images = useRef<HTMLDivElement[]>([]);
	const offsetY = useRef();

	useEffect(() => {
		const scrollbar = Scrollbar.get(document.body);

		let galleryTop = gallery.current?.getBoundingClientRect().top;
		let galleryBottom = gallery.current
			? gallery.current.getBoundingClientRect().bottom - window.innerHeight
			: 0;

		const refreshVariable = () => {
			galleryTop =
				gallery.current && offsetY.current
					? gallery.current.getBoundingClientRect().top + offsetY.current
					: galleryTop;
			galleryBottom =
				gallery.current && offsetY.current
					? gallery.current.getBoundingClientRect().bottom -
					  window.innerHeight +
					  offsetY.current
					: galleryBottom;
			if (
				offsetY.current &&
				rightSide.current &&
				galleryTop &&
				galleryTop < offsetY.current &&
				galleryBottom > offsetY.current
			) {
				// Pin Image
				rightSide.current.style.transform = `translateY(${
					offsetY.current - galleryTop
				}px)`;

				// Clip Image

				let a =
					((offsetY.current - galleryTop) / galleryBottom) *
					images.current.length;
				a = Math.min(Math.max(a, 0), images.current.length);

				images.current.forEach((image, Index) => {
					image.style.clipPath = `inset(0 0 ${Math.max(
						(a - Index) * 100,
						0
					)}% 0)`;
				});
			}
			console.log(galleryTop, galleryBottom);
		};

		window.onresize = refreshVariable;

		const listener = (status: { offset: any }) => {
			offsetY.current = status.offset.y;
			if (
				rightSide.current &&
				galleryTop &&
				galleryTop < status.offset.y &&
				galleryBottom > status.offset.y
			) {
				// Pin Image
				rightSide.current.style.transform = `translateY(${
					status.offset.y - galleryTop
				}px)`;

				// Clip Image

				let a =
					((status.offset.y - galleryTop) / galleryBottom) *
					images.current.length;
				a = Math.min(Math.max(a, 0), images.current.length);

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
							className={`image no${index + 1}`}
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
