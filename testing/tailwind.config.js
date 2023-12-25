/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], 
  theme: {
    extend: {
        colors: {
            'text': '#0f0f0f',
            'background': '#ffffff',
            'primary': '#155831',
            'secondary': '#d7e4dc',
            'accent': '#c20002',
        },
    }
  },
  plugins: [],
}

