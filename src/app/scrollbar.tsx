"use client";

import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

interface Props {
	setScrollPos: (x: number, y: number) => void;
}

function MyScrollBar({ setScrollPos }: Props) {
	useEffect(() => {
		const scrollbar = Scrollbar.init(document.body, {
			damping: 0.08,
		});

		const listener = (status: {
			offset: {
				x: number;
				y: any;
			};
		}) => {
			const pins = document.querySelectorAll(".pin");
			pins.forEach((pinned) => {
				(pinned as HTMLElement)!.style.transform = `translateY(${status.offset.y}px)`;
			});
			setScrollPos(status.offset.x, status.offset.y);
		};
		scrollbar?.addListener(listener);

		return () => {
			scrollbar.removeListener(listener);
			scrollbar.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return null;
}

export default MyScrollBar;
