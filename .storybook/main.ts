// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
    // Required
    framework: '@storybook/sveltekit',
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    // Optional
    addons: [
        '@storybook/addon-essentials',
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-styling",
            options: {
                postCss: true,
            },
        },
    ],
    docs: {
        autodocs: 'tag',
    },
};

export default config;
