import { FilterType, StoreType } from '@/types/storeTypes';
import { create } from 'zustand';

export const useExploreStore = create<StoreType>((set) => ({
  totalTagsCount: 0,
  activePage: 1,
  filterData: {
    pageSize: 20,
    sort: 'popular',
    order: 'desc',
  },
  setActivePage: (page: number | ((prev: number) => number)) =>
    set((state) => {
      if (typeof page === 'function') {
        return { activePage: page(state.activePage) };
      } else {
        return { activePage: page };
      }
    }),
  setTotalTagsCount: (count: number) => set({ totalTagsCount: count }),
  setFilterData: (data: FilterType) => set({ filterData: data }),
}));
