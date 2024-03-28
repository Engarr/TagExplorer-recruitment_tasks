export type StoreType = {
    totalTagsCount: number;
    activePage: number;
    filterData: FilterType;
    setTotalTagsCount: (count: number) => void;
    setActivePage: (page: number) => void;
    setFilterData: (data: FilterType) => void;
  };
  export type FilterType = {
    pageSize: number;
    sort: string;
    order: string;
  };
  