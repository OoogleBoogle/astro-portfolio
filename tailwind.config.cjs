/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'display': ['Comfortaa', 'cursive'],
			'sans': ['Raleway', 'sans-serif'],
		},
		extend: {
			colors: {
				'deep-purple': '#14081F',
				'purple': '#60457A',
				'almost-white': '#eed6fe',
				'light-purple': '#A785C7',
			},
			animation: {
				shine: "shine 1s",
			},
			keyframes: {
				shine: {
					"100%": { left: "125%" },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
