import { create } from "zustand";

export type SortType = "popular" | "activity" | "name";
export type OrderType = "desc" | "asc";

interface AppStore {
  page: number;
  pageSize: number;
  order: OrderType;
  sort: SortType;

  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setOrder: (OrderType: OrderType) => void;
  setSort: (sort: SortType) => void;
}

export const useStore = create<AppStore>()((set) => ({
  page: 1,
  pageSize: 10,
  order: "desc",
  sort: "popular",

  setPage: (page) => set(() => ({ page })),
  setPageSize: (pageSize) => set(() => ({ pageSize })),
  setOrder: (order) => set(() => ({ order })),
  setSort: (sort) => set(() => ({ sort })),
}));
