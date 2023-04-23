/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'deep-purple': '#14081F',
			'purple': '#60457A',
		},
		fontFamily: {
			'display': ['Comfortaa', 'cursive'],
			'sans': ['Raleway', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
