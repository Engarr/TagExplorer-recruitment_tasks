'use client';
import { MdSort } from 'react-icons/md';

import { Button } from './ui/button';
import { useState } from 'react';
import { useExploreStore } from '@/context/store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import FilterSelect from './FilterSelect';

const Filters = () => {
  const { setFilterData, filterData } = useExploreStore();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    sort: filterData.sort,
    tagsNumber: filterData.pageSize,
    order: filterData.order,
  });

  const sortByName =
    formData.sort === 'popular'
      ? 'Popularność'
      : formData.sort === 'activity'
        ? 'Aktywność'
        : 'Nazwa';
  const orderName = formData.order === 'desc' ? 'Malejąco' : 'Rosnąco';

  const onOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const OnSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    setFilterData({
      pageSize: Number(formData.tagsNumber),
      order: formData.order,
      sort: formData.sort,
    });
  };

  const sortSelectItems = [
    { value: 'popular', name: 'Popularność' },
    { value: 'activity', name: 'Aktywność' },
    { value: 'name', name: 'Nazwa' },
  ];
  const orderSelectItems = [
    { value: 'desc', name: 'Malejąco' },
    { value: 'asc', name: 'Rosnąco' },
  ];
  const tagsSelectItems = [
    { value: '5', name: '5' },
    { value: '10', name: '10' },
    { value: '20', name: '20' },
    { value: '30', name: '30' },
    { value: '50', name: '50' },
    { value: '100', name: '100' },
  ];

  return (
    <div>
      <DropdownMenu open={open} onOpenChange={onOpenChange}>
        <DropdownMenuTrigger>
          <div className='flex items-center mr-2 lg:p-2 text-[30px] text-sky-600 '>
            <MdSort />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mr-2'>
          <form
            className=' flex flex-col items-center justify-center gap-6 px-5 py-10'
            onSubmit={OnSubmitHandler}>
            <div className='flex flex-col lg:flex-row w-full items-center gap-6 '>
              <FilterSelect
                setFormData={setFormData}
                id='sort'
                placeholder={sortByName}
                selectItems={sortSelectItems}
                label='Sortuj według:'
              />

              <FilterSelect
                setFormData={setFormData}
                id='order'
                placeholder={orderName}
                selectItems={orderSelectItems}
                label='Kolejność:'
              />
              <FilterSelect
                setFormData={setFormData}
                id='tagsNumber'
                placeholder={filterData.pageSize}
                selectItems={tagsSelectItems}
                label='Ilość tagów:'
              />
            </div>
            <div>
              <Button type='submit'>Zastosuj</Button>
            </div>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Filters;
