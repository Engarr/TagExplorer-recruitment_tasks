import '../index.css';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Pagination, { PaginationPropsType } from '@/components/Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = (args: PaginationPropsType) => {
  const [activePage, setActivePage] = useState(args.activePage);

  const handleSetActivePage = (page: number) => {
    setActivePage(page);
  };

  return (
    <Pagination
      pageSize={args.pageSize}
      totalTagsCount={args.totalTagsCount}
      setActivePage={handleSetActivePage}
      activePage={activePage}
    />
  );
};

Default.args = {
  pageSize: 5,
  activePage: 1,
  totalTagsCount: 100,
};
