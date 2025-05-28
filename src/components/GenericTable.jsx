import React from "react";

const GenericTable = ({ dataHead, dataTable }) => {
  console.log(dataHead);
  console.log(dataTable);

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-800 border border-gray-200">
          <thead className="text-xs text-gray-400 bg-gray-100 border-b border-gray-200">
            <tr>
              {dataHead.map((col, index) => (
                <th key={index} className="px-6 py-2 border border-gray-200">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataTable.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white border-b border-gray-200">
                {dataHead.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-2 border border-gray-200"
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GenericTable;
