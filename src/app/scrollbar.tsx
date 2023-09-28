"use client";

import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

function MyScrollBar() {
	useEffect(() => {
		const scrollbar = Scrollbar.init(document.body, {
			damping: 0.08,
		});

		const listener = (status: { offset: { y: any } }) => {
			const pins = document.querySelectorAll(".pin");
			pins.forEach((pinned) => {
				(pinned as HTMLElement)!.style.transform = `translateY(${status.offset.y}px)`;
			});
		};
		scrollbar?.addListener(listener);

		return () => {
			scrollbar?.removeListener(listener);
		};
	});

	return null;
}

export default MyScrollBar;
