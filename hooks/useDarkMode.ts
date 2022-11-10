import { useState, useEffect } from "react";

const storageKey = "theme";
const isBrowser = typeof window !== "undefined";

export default function useDarkMode() {
	const [darkMode, setDarkMode] = useState(() => {
		const theme = isBrowser && localStorage.getItem(storageKey);

		if (theme && theme === "light") {
			return false;
		}
		return true;
	});

	useEffect(() => {
		const element = window.document.documentElement;
		const className = "dark";

		if (darkMode) {
			localStorage.setItem(storageKey, "dark");
			element.classList.add(className);
		} else {
			localStorage.setItem(storageKey, "light");
			element.classList.remove(className);
		}
	}, [darkMode]);

	return [darkMode, setDarkMode] as const;
}
