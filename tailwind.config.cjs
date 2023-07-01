/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'text': '#040d1b',
                'background': '#e9f0fc',
                'primary-button': '#ecc283',
                'secondary-button': '#d7e5f9',
                'accent': '#ecc283',
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
