/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		// creates screen size responsiveness breakpoints
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		// global color palette
		colors: {
			transparent: "transparent",
			// default black and white until better color scheme than teal/blue
			black: "#000",
			white: "#fff",
			gray: {
				100: "#f7fafc",
				// ...
				900: "#1a202c",
			},

			// ...
		},
	},
	plugins: [],
};
