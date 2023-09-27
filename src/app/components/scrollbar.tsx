"use client";

import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";

interface Props {
	onScroll: (scrollbar: any) => void;
}

function MyScrollBar({ onScroll }: Props) {
	const Option = {
		damping: 0.08,
	};

	const scrollbarRef = useRef<Scrollbar>();

	useEffect(() => {
		scrollbarRef.current = Scrollbar.init(document.body, Option);

		scrollbarRef.current.addListener((status: any) => {
			onScroll(scrollbarRef.current);
		});
	});

	return null;
}

export default MyScrollBar;
