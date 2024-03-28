import { useState } from 'react';
import { Button } from './ui/button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxSlash } from 'react-icons/rx';

export type PaginationPropsType = {
  pageSize: number;
  totalTagsCount: number;
  setActivePage: (page: number) => void;
  activePage: number;
};
const Pagination = ({
  pageSize,
  totalTagsCount,
  setActivePage,
  activePage,
}: PaginationPropsType) => {
  const totalTagsNumber = Math.ceil(totalTagsCount / pageSize);
  const [inputValue, setInputValue] = useState('');

  const pageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (value < 1) {
      setInputValue('1');
      setActivePage(1);
      return;
    }
    if (value > totalTagsNumber) {
      setInputValue(totalTagsNumber.toString());
      setActivePage(totalTagsNumber);
      return;
    }
    setInputValue(value.toString());
    const pageNumber = value;
    if (!isNaN(pageNumber)) {
      setActivePage(pageNumber);
    }
  };

  const nextPageHandler = () => {
    if (activePage < totalTagsNumber) {
      setActivePage(activePage + 1);
    }
    if (activePage === totalTagsNumber) {
      setActivePage(totalTagsNumber);
    }
  };
  const prevPageHandler = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
    if (activePage === 1) {
      setActivePage(1);
    }
  };

  return (
    <div className='flex items-center gap-2 px-2'>
      <Button onClick={prevPageHandler} disabled={activePage <= 1}>
        <IoIosArrowBack />
      </Button>
      <Button className='max-w-[90px] group '>
        <input
          className='w-full rounded-sm px-1 text-center group-hover:bg-slate-100 duration-300 py-1'
          placeholder={activePage.toString()}
          value={inputValue}
          onChange={pageHandler}
          onBlur={() => setInputValue('')}
        />
      </Button>
      <div className=''>
        <p className='px-2 text-2xl font-sintony'>
          <RxSlash />
        </p>
      </div>
      <Button onClick={() => setActivePage(totalTagsNumber)}>
        {totalTagsNumber}
      </Button>
      <Button
        onClick={nextPageHandler}
        disabled={activePage === totalTagsNumber}>
        <IoIosArrowForward />
      </Button>
    </div>
  );
};

export default Pagination;
