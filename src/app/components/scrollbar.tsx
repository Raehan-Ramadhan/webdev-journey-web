"use client";

import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

function MyScrollBar() {
	const Option = {
		damping: 0.08,
	};

	useEffect(() => {
		Scrollbar.init(document.body, Option);
		return () => Scrollbar.destroy(document.body);
	});
	return null;
}

export default MyScrollBar;
