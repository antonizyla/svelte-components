import type { Meta, StoryObj } from "@storybook/svelte"

import Card from "./Card.svelte"

const meta = {
    title: "Card",
    component: Card,
    tags: ["autodoc"],
    argTypes: {
        title: {
            control: "text",
        },
        content: {
            control: "text",
        },
    },
} satisfies Meta<Card>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Card Title Goes Here...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
    },
}


