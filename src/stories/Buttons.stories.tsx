import '../index.css';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';

const meta: Meta<typeof Button> = {
  component: Button,

  argTypes: {
    variant: {
      options: ['default', 'primary'],
      control: { type: 'radio' },
    },
    size: { options: ['default', 'sm', 'lg'], control: { type: 'radio' } },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Click me!',
  },
};
