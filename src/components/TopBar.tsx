import { useStore } from "../store/useStore";
import PaginationArrows from "./PaginationArrows";
import { Filters } from "./Filters";

const TopBar = () => {
  const {
    pageSize,
    sort,
    order,
    page,
    setPageSize,
    setSort,
    setOrder,
    setPage,
  } = useStore();
  return (
    <>
      <Filters
        pageSize={pageSize}
        sort={sort}
        order={order}
        setOrder={setOrder}
        setPageSize={setPageSize}
        setSort={setSort}
      />
      <PaginationArrows page={page} setPage={setPage} />
    </>
  );
};

export default TopBar;
