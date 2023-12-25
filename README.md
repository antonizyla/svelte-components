# svelte-components

## Add to Project
```bash
  mv src/lib
  git submodule add https://github.com/antonizyla/svelte-components
```
### Pre requisites
  -  Vite Imagetools for anything that uses images
  -  TailwindCSS for everything
  -  Svelte 4.0 or greater

## Required Tailwind Config

```js
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
  }
}
```

