import '../index.css';

import type { Meta, StoryObj } from '@storybook/react';

import { LoadingSpinner } from '@/components/ui/loading';

const meta: Meta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
};
export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  args: {
    text: 'Please wait...',
  },
};
