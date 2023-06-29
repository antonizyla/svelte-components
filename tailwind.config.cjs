/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: '#24c2b5',
				text: '#1e0608',
				background: '#fefbfb',
				primary: '#68e3d9',
				secondary: '#fceeef'
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
