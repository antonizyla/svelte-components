import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

import path from 'path';

export default defineConfig({
    plugins: [sveltekit(), imagetools()],
    resolve: {
        alias: {
            $src: path.resolve('./src'),
            $images: path.resolve('./images'),
        },
    }
});
