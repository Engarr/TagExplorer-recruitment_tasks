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
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='framework'>Sortuj według:</Label>
                <div className='w-[150px]'>
                  <Select
                    onValueChange={(e) =>
                      setFormData((prev) => ({ ...prev, sort: e }))
                    }>
                    <SelectTrigger id='sort'>
                      <SelectValue placeholder={sortByName} />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='popular'>Popularność</SelectItem>
                      <SelectItem value='activity'>Aktywność</SelectItem>
                      <SelectItem value='name'>Nazwa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='framework'>Kolejność:</Label>
                <div className='w-[150px]'>
                  <Select
                    onValueChange={(e) =>
                      setFormData((prev) => ({ ...prev, order: e }))
                    }>
                    <SelectTrigger id='order'>
                      <SelectValue placeholder={orderName} />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='desc'>Malejąco</SelectItem>
                      <SelectItem value='asc'>Rosnąco</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='framework'>Ilość tagów:</Label>
                <div className='w-[150px]'>
                  <Select
                    onValueChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        tagsNumber: Number(e),
                      }))
                    }>
                    <SelectTrigger id='tags'>
                      <SelectValue placeholder={filterData.pageSize} />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='5'>5</SelectItem>
                      <SelectItem value='10'>10</SelectItem>
                      <SelectItem value='20'>20</SelectItem>
                      <SelectItem value='30'>30</SelectItem>
                      <SelectItem value='50'>50</SelectItem>
                      <SelectItem value='100'>100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
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
