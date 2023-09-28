"use client";

import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
	onScroll?: (scrollbar: any) => void;
	children: ReactNode;
}

function MyScrollBar({ onScroll, children }: Props) {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollbarRef = useRef<Scrollbar>();

	useEffect(() => {
		if (containerRef.current && !scrollbarRef.current) {
			scrollbarRef.current = Scrollbar.init(containerRef.current, {
				damping: 0.08,
			});

			if (scrollbarRef.current) {
				scrollbarRef.current.addListener((status: any) => {
					if (onScroll) {
						onScroll(scrollbarRef.current);
					}
				});
			}
		}
	});

	return (
		<div ref={containerRef} style={{ height: "100vh" }}>
			{children}
		</div>
	);
}

export default MyScrollBar;
