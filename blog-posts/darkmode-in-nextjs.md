---
title: "Dark Mode in Next JS"
date: "November 16, 2022"
excerpt: "Learn how to implement darkmode in Next JS."
---

There are multiple ways to implement dark mode in nextjs. We'll see the most common way most people do it and the limitations of each method.

- first create a new nextjs project, install and setup tailwindcss.

- create a new hook **hooks/useDarkMode.js**

## Method 1. Toggle class using DOM

```javascript
import { useState, useEffect } from "react";

const storageKey = "theme";
const isBrowser = typeof window !== "undefined";

export default function useDarkMode() {
   // if there is nothing in the local storage, state will be true.
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

```

Here we are adding **dark** class to the **html** tag. When the state darkmode is true. We're adding the class, if not we're removing it.states are stored in localstorage.

if you're using tailwind css you have do this configuration

```javascript
// ./tailwind.config.js

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // make sure it is class
};
```

Add background to your \_app.js file

```javascript
// ./pages/_app.js

export default function App({ Component, pageProps }) {
	return (
		<div className="bg-white dark:bg-gray-900">
			<Component {...pageProps} />
		</div>
	);
}
```

To toggle dark mode

```javascript
import useDarkMode from "@/hooks/useDarkMode";

export default function ToggleDarkMode() {
	const [darkMode, setDarkMode] = useDarkMode();

	return (
		<button onClick={() => setDarkMode(!darkMode)}>Toggle dark mode </button>
	);
}
```

That's it! Try toggling darkmode.

## Method 2. Toggle class using state.

```javascript
// ./pages/_app.js

export default function App({ Component, pageProps }) {
	const [darkMode] = useDarkMode();
	return (
		<div className={`${darkMode ? "dark" : ""} bg-white dark:bg-gray-900`}>
			<Component {...pageProps} />
		</div>
	);
}
```

```javascript
// ./hooks/useDarkMode.js

useEffect(() => {
	const element = window.document.documentElement;
	const className = "dark";

	if (darkMode) {
		localStorage.setItem(storageKey, "dark");
		setDarkMode(true); // instead of targeting dom we're using state
	} else {
		localStorage.setItem(storageKey, "light");
		setDarkMode(false);
	}
}, [darkMode]);
```

That's it we've implemented darkmode! But wait.. Try refreshing the browser. You can see a flash on load. You don't want that right? This is because useEffect in our custom hook runs after our component renders. Fortunately there is a popular package for this called [next-themes](https://www.npmjs.com/package/next-themes)

you can follow the steps provided in their readme

[npm](https://www.npmjs.com/package/next-themes)

[github](https://github.com/pacocoursey/next-themes#readme)
