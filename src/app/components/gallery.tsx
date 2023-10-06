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

		const galleryTop = gallery.current?.getBoundingClientRect().top;
		const galleryBottom = gallery.current
			? gallery.current.getBoundingClientRect().bottom - window.innerHeight
			: 0;

		const listener = (status: { offset: any }) => {
			console.log(status.offset, galleryTop, galleryBottom);
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
						<span>{}Github.com</span>
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
					<div
						className="image no1"
						ref={(element) => (images.current[0] = element as HTMLDivElement)}
					></div>
					<div
						className="image no2"
						ref={(element) => (images.current[1] = element as HTMLDivElement)}
					></div>
					<div
						className="image no3"
						ref={(element) => (images.current[2] = element as HTMLDivElement)}
					></div>
					<div
						className="image no4"
						ref={(element) => (images.current[3] = element as HTMLDivElement)}
					></div>
				</div>
			</div>
		</div>
	);
}
