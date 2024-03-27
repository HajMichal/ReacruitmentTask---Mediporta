import { Button } from "@mantine/core";

interface PaginationArrows {
  page: number;
  setPage: (page: number) => void;
}

const PaginationArrows = ({ page, setPage }: PaginationArrows) => {
  return (
    <div className="flex gap-4 mt-5 items-center">
      <Button
        variant="filled"
        color="blue"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        &#60;
      </Button>
      <p className="mt-1 px-2">{page}</p>
      <Button variant="filled" color="blue" onClick={() => setPage(page + 1)}>
        &#62;
      </Button>
    </div>
  );
};

export default PaginationArrows;
