const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: colors.teal,
				gray: colors.slate,
				black: colors.zinc,
			},
			screens: {
				"max-lg": {
					max: "1023px",
				},
			},
		},
	},
	plugins: [],
};
