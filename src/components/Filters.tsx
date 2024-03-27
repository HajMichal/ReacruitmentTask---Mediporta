import { NumberInput, Select } from "@mantine/core";
import { OrderType, SortType } from "../store/useStore";

interface FiltersType {
  pageSize: number;
  sort: string;
  order: string;
  setPageSize: (pageSize: number) => void;
  setSort: (sort: SortType) => void;
  setOrder: (order: OrderType) => void;
}

export const Filters = ({
  pageSize,
  sort,
  order,
  setPageSize,
  setSort,
  setOrder,
}: FiltersType) => {
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      <NumberInput
        label="Rows count"
        placeholder="Enter a number..."
        onChange={(e) => setPageSize(Number(e))}
        min={1}
        value={pageSize}
        allowDecimal={false}
        allowNegative={false}
        step={1}
        className="sm:w-1/4 w-full min-w-[100px]"
      />
      <Select
        label="Filter by"
        value={sort}
        data={["popular", "activity", "name"]}
        onChange={(e) => setSort(e as SortType)}
        className="sm:w-1/4 w-full min-w-[100px]"
      />
      <Select
        label="Order by"
        value={order}
        data={["desc", "asc"]}
        onChange={(e) => setOrder(e as OrderType)}
        className="sm:w-1/4 w-full min-w-[100px]"
      />
    </div>
  );
};
