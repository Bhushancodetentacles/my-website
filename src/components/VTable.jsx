import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { ArrowUpDownIcon } from "lucide-react";
import Stack from "@mui/material/Stack";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Table = ({
  cols,
  data,
  totalPages,
  page,
  handlePageChange,
  handleRowsPerPageChange,
  isTableLoading,
  isPaginationHide,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    setSortConfig({ key: "default", direction: "desc" });
  }, []);

  const sortedData = () => {
    if (sortConfig.key !== null) {
      const sortedItems = [...data];
      sortedItems.sort((a, b) => {
        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];

        const stringCollator = new Intl.Collator(undefined, { sensitivity: "base" });
        if (typeof valueA === "string" && typeof valueB === "string") {
          return sortConfig.direction === "asc"
            ? stringCollator.compare(valueA, valueB)
            : stringCollator.compare(valueB, valueA);
        }
        return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
      });

      return sortedItems;
    }
    return data;
  };

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleChangeRowsPerPage = (event) => {
    const value = parseInt(event.target.value, 10);
    setRowsPerPage(value);
    handleRowsPerPageChange(value);
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-white text-xs uppercase text-gray-600 font-semibold border-b border-gray-200 tracking-wider">
            <tr>
              {cols.map((col, index) => (
                <th
                  key={index}
                  className={`px-6 py-3.5 text-center ${
                    col.sortable ? "cursor-pointer hover:text-[#8209c6]" : ""
                  }`}
                  onClick={() => (col.sortable ? requestSort(col.key) : null)}
                >
                  <div className="flex items-center justify-center">
                    {col.title}
                    {col.sortable && (
                      <ArrowUpDownIcon
                        className={`ml-2 h-4 w-4 ${
                          sortConfig.key === col.key
                            ? "text-[#8209c6]"
                            : "text-gray-400"
                        }`}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isTableLoading ? (
              <tr>
                <td colSpan={cols.length} className="">
                  <SkeletonTheme baseColor="#f7f4fd" highlightColor="#f3f4f6">
                    <Skeleton count={10} height={52.5} />
                  </SkeletonTheme>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={cols.length} className="px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    {/* <img
                      src="/datanotfound.svg"
                      alt="No data"
                      className="w-24 h-24 mb-4"
                    /> */}
                    <p className="text-gray-500 text-sm">No Data Found</p>
                  </div>
                </td>
              </tr>
            ) : (
              sortedData().map((item, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-[#f7f4fd] transition-colors"
                >
                  {cols.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-6 py-4 text-center ${
                        col.colored ? "text-[#8209c6] font-medium" : ""
                      }`}
                    >
                      {col.render ? col.render(item, rowIndex) : item[col.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isPaginationHide && (
        <Stack spacing={2} direction="row" className="mt-4 justify-between items-center p-3">
          <select
            className="p-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8209c6]"
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
          >
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={50}>50 per page</option>
          </select>
          <Pagination
            page={page}
            onChange={handlePageChange}
            count={totalPages}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      )}
    </div>
  );
};

export default Table;
