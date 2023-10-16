import type { Meta, StoryObj } from '@storybook/svelte';

import SplitCta from './SplitCta.svelte';

const meta = {
	title: 'Layouts/SplitCta',
	component: SplitCta,
	argTypes: {}
} satisfies Meta<SplitCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
