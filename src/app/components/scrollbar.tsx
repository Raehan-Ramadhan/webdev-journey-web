"use client";

import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

function MyScrollBar() {
	useEffect(() => {
		Scrollbar.init(document.body);
		return () => Scrollbar.destroy(document.body);
	});
	return null;
}

export default MyScrollBar;
