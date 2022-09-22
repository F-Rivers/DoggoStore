/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	// routes the content files for .config to interpret
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./styles/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		// creates the screen pixel parameters for the 4 responsive breakpoints
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		// creates the names for  the global color palette
		colors: {
			black: "#0f172a",
			sky: "#f0f9ff",
			blue: "#1fb6ff",
			darkblue: "#1e40af",
			purple: "#7e5bef",
			pink: "#ff49db",
			orange: "#ff7849",
			green: "#13ce66",
			yellow: "#ffc82c",
			graydark: "#273444",
			gray: "#8492a6",
			graylight: "#d3dce6",
			white: "#f8fafc",
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	plugins: [],
};
