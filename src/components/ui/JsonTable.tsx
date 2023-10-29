'use client';

import Link from "next/link";
import React from "react";

// Define a TypeScript type for the data prop
type TableProps = {
  data: Array<{ [key: string]: string | number }>;
  showDetails: (e: number) => void;
};

const JsonTable: React.FC<TableProps> = ({ data, showDetails }) => {
  if (data.length === 0) {
    return <h2 className="text-xl text-center my-auto">No Data Available</h2>;
  }

  return (
    <table className="min-w-full table-fixed text-xs text-center">
      <thead>
        <tr className="rounded-md">
          {Object.keys(data[0]).map((header, index) => (
            <th
              key={index}
              className="border text-sm border-gray-300 p-2 py-3 text-cyan-400 capitalize"
            >
              {header}
            </th>
          ))}
          <th className="border text-sm border-gray-300 p-2 py-3 text-cyan-400 capitalize">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index_) => (
              <td key={index_} className="border py-3 border-gray-300 p-2">
                {value}
              </td>
            ))}
            <td className="border py-3 border-gray-300 p-2">
              <Link
                className=" text-cyan-600 rounded-md hover:text-cyan-400"
                // onClick={() => {
                //   showDetails(index);
                // }}
                href={`/admin-panel/teams/${encodeURIComponent(data[index].id)}`}
              >
                Show Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JsonTable;
