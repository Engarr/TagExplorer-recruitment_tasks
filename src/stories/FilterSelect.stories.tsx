import '../index.css';

import type { Meta, StoryObj } from '@storybook/react';

import FilterSelect from '@/components/FilterSelect';

const meta: Meta<typeof FilterSelect> = {
  component: FilterSelect,
};
export default meta;

type Story = StoryObj<typeof FilterSelect>;

export const Default: Story = {
  args: {
    setFormData: () => {},
    id: 'exampleId',
    label: 'Example Label',
    placeholder: 'Select...',
    selectItems: [
      { value: 'value1', name: 'Option 1' },
      { value: 'value2', name: 'Option 2' },
      { value: 'value3', name: 'Option 3' },
    ],
  },
};
