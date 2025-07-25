/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#2E174C",
					50: "#F5F3F8",
					100: "#E6E1F0",
					200: "#C7BEE1",
					300: "#A89CD2",
					400: "#897BC3",
					500: "#6A5AB4",
					600: "#52488F",
					700: "#39366A",
					800: "#2E2E55",
					900: "#242540",
					950: "#1A1A2B",
				},
				secondary: {
					DEFAULT: "#1FCC95",
				},
				paragraph: {
					DEFAULT: "#222222", // dark gray for text on light backgrounds
				},
				"dark-bg": {
					DEFAULT: "#2E174C", // for dark backgrounds
				},
				"emerald-purple": {
					50: "#ecfdf5",
					100: "#d1fae5",
					200: "#a7f3d0",
					300: "#6ee7b7",
					400: "#34d399",
					500: "#10b981",
					600: "#059669",
					700: "#047857",
					800: "#065f46",
					900: "#064e3b",
					950: "#022c22",
				},
			},
		},
	},
	plugins: [],
};
