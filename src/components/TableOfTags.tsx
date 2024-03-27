import { Loader, Table } from "@mantine/core";
import { useStore } from "../store/useStore";
import { useQuery } from "@tanstack/react-query";
import { getTags } from "../fetchData/getTags";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDebouncedValue } from "@mantine/hooks";

const TableOfTags = () => {
  const { page, pageSize, order, sort } = useStore();
  const debouncedPage = useDebouncedValue(page, 300);
  const debouncedPageSize = useDebouncedValue(pageSize, 300);
  const {
    data: tagsData,
    isSuccess,
    isError,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: () => getTags({ page, pageSize, order, sort }),
  });

  useEffect(() => {
    if (isError) toast.error(`Message: ${error?.name}`);
  }, [isError, error]);

  useEffect(() => {
    refetch();
  }, [debouncedPage, debouncedPageSize, order, sort, refetch]);

  const rows = tagsData?.items.map((tag) => (
    <Table.Tr key={tag.name} className="hover:opacity-80 hover:bg-gray-100">
      <Table.Td>{tag.name}</Table.Td>
      <Table.Td>{tag.count}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      {isSuccess && (
        <Table
          stickyHeader
          stickyHeaderOffset={60}
          className="xl:max-w-[70%] border-collapse w-full text-sm my-5 text-gray-900"
        >
          <Table.Thead>
            <Table.Tr className="bg-gray-200">
              <Table.Th>Name</Table.Th>
              <Table.Th>Related Posts Count</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className="cursor-pointer ">{rows}</Table.Tbody>
        </Table>
      )}
      {isLoading && <Loader color="gray" className="mt-32" />}
      {isError && (
        <img src="/notFound.svg" alt="Not found" className="opacity-30" />
      )}
      <Toaster />
    </>
  );
};

export default TableOfTags;
