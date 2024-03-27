import { UseQueryResult, useQuery } from 'react-query';
import { QUERY_KEY_TAGS, fetchTags } from '@/lib/tags';
import { useCallback, useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import Filters from '@/components/Filters';
import Feed from '@/components/Feed';
import Error from '@/components/ui/error';
import LoadingSpinner from '@/components/ui/loading';

export type DataType = {
  tags: {
    items: {
      count: number;
      has_synonyms: boolean;
      is_moderator_only: boolean;
      is_required: boolean;
      name: string;
    }[];
  };
  total: number;
};
const Explore = () => {
  const [totalTagsCount, setTotalTagsCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [filterData, setFilterData] = useState({
    pageSize: 20,
    sort: 'popular',
    order: 'desc',
  });
  const fetchTagsData = useCallback(() => {
    return fetchTags({
      page: activePage,
      pageSize: filterData.pageSize,
      sort: filterData.sort,
      order: filterData.order,
    });
  }, [activePage, filterData]);

  const { data, isLoading, isError }: UseQueryResult<DataType> = useQuery(
    [QUERY_KEY_TAGS, activePage, filterData],
    fetchTagsData,
    {
      refetchOnMount: true,
    }
  );

  useEffect(() => {
    if (data) {
      setTotalTagsCount(data.total);
    }
  }, [data, filterData]);

  const sortByName =
    filterData.sort === 'popular'
      ? 'Popularność'
      : filterData.sort === 'activity'
      ? 'Aktywność'
      : 'Nazwa';
  const orderName = filterData.order === 'desc' ? 'Malejąco' : 'Rosnąco';
  const pageSize = filterData.pageSize;

  if (isError) {
    return <Error />;
  }

  return (
    <section className='min-h-[calc(100vh-210px)] overflow-hidden text-neutral-600'>
      <div className='flex flex-col gap-4 left-1/2 relative -translate-x-1/2  lg:w-3/5 w-full'>
        <div className=''>
          <div className='flex lg:items-center justify-between my-5 lg:mb-10 items-start'>
            <div className='flex flex-col px-2 '>
              <h2 className={`font-poppins lg:text-3xl  font-semibold  `}>
                Znajdź tag, który Cię interesuje:
              </h2>
              <div className='flex gap-2 mt-2 flex-col lg:flex-row'>
                <p className='font-semibold text-sm'>Opcje sortowania:</p>
                <div className='flex gap-2'>
                  <span className='border-x-2 lg:px-2 text-sm px-1'>
                    {sortByName}
                  </span>
                  <span className='border-x-2 lg:px-2 text-sm px-1'>
                    {orderName}
                  </span>
                  <span className='border-x-2 lg:px-2 text-sm px-1'>
                    {pageSize}
                  </span>
                </div>
              </div>
            </div>

            <Filters setFilterData={setFilterData} filterData={filterData} />
          </div>
          <div className='w-full flex items-center justify-center'>
            <Pagination
              totalTagsCount={totalTagsCount}
              setActivePage={setActivePage}
              activePage={activePage}
              pageSize={filterData.pageSize}
            />
          </div>
        </div>

        {!isLoading && data ? (
          <Feed items={data.tags.items} />
        ) : (
          <LoadingSpinner />
        )}

        {pageSize > 10 && (
          <div className='w-full flex items-center justify-center'>
            <Pagination
              totalTagsCount={totalTagsCount}
              setActivePage={setActivePage}
              activePage={activePage}
              pageSize={filterData.pageSize}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Explore;
