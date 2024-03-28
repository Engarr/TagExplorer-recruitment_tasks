import '../index.css';

import type { Meta, StoryObj } from '@storybook/react';

import Feed from '@/components/Feed';

const meta: Meta<typeof Feed> = {
  component: Feed,
};
export default meta;

type Story = StoryObj<typeof Feed>;

export const Default: Story = {
  args: {
    items: [
      {
        count: 100,
        name: 'Tag 1',
      },
      {
        count: 200,
        name: 'Tag 2',
      },
      {
        count: 300,
        name: 'Tag 3',
      },
    ],
  },
};
