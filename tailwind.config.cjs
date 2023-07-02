/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: '#0f0f1f',
				background: '#f8f8fc',
				'primary-button': '#8d8fc8',
				'secondary-button': '#eeeef7',
				accent: '#9fa0d1'
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular']
		}
	},
	plugins: []
};
