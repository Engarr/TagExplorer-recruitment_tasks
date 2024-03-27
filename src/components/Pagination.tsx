import { useState } from 'react';
import { Button } from './ui/button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxSlash } from 'react-icons/rx';

type PropsType = {
  totalTagsCount: number;
  activePage: number;
  pageSize: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};
const Pagination = ({
  totalTagsCount,
  setActivePage,
  activePage,
  pageSize,
}: PropsType) => {
  const totalTagsNumber = Math.ceil(totalTagsCount / pageSize);
  const [inputValue, setInputValue] = useState('');

  const pageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    const pageNumber = parseInt(value);
    if (!isNaN(pageNumber)) {
      setActivePage(pageNumber);
    }
  };
  const nextPageHanlder = () => {
    if (activePage < totalTagsNumber) {
      setActivePage((prev) => prev + 1);
    }
    if (activePage === totalTagsNumber) {
      setActivePage(totalTagsNumber);
    }
  };
  const prevPageHanlder = () => {
    if (activePage > 1) {
      setActivePage((prev) => prev - 1);
    }
    if (activePage === 1) {
      setActivePage(1);
    }
  };

  return (
    <div className='flex items-center gap-2 px-2'>
      <Button onClick={prevPageHanlder}>
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
      <Button onClick={nextPageHanlder}>
        <IoIosArrowForward />
      </Button>
    </div>
  );
};

export default Pagination;
