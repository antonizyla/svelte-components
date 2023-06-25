import type { Meta, StoryObj } from '@storybook/svelte';

import Image from './Image.svelte';

const meta: Meta = {
    title: 'Image',
    component: Image,
    argTypes: {
        src: {
            control: 'text',
        },
        alt: {
            control: 'text',
        },
    },
} satisfies Meta<Image>;

export default meta;
type Story = StoryObj<typeof meta>;

import sImage from './sampleImage.jpg';

export const Default: Story = {
    args: {
        src: sImage,
        alt: 'Sample Image',
    },
};

