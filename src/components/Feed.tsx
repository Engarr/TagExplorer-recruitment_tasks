import { FeedPropsType } from '@/types/feedPropsType';

const Feed = ({ items }: FeedPropsType) => {
  return (
    <div className='px-2 py-1 lg:px-3 lg:py-2 border-2 rounded-md border-b-4 max-lg:mx-1 '>
      <div className='flex justify-between py-3 font-semibold text-sm'>
        <p>Nazwa:</p>
        <p>Liczba postów:</p>
      </div>
      <ul className='group'>
        {items?.map((tag, i) => (
          <li
            key={i}
            className=' flex justify-between py-1 px-2 lg:py-3 lg:px-2 odd:bg-sky-50 rounded-md'>
            {tag.name}
            <span>{tag.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
