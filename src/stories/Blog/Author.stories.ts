import type { Meta, StoryObj } from '@storybook/svelte';

import Author from './Author.svelte';

const meta = {
    title: 'Author',
    component: Author,
    tags: ['autodocs'],
    argTypes: {
        name: { control: 'text' },
        email: { control: 'text' },
        avatar: { control: 'text' },
        bio : { control: 'text' },
    },
} satisfies Meta<Author>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        avatar: 'https://placekitten.com/205/210',
        bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
    },
};
