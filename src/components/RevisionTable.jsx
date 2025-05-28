import React from "react";

const RevisionTable = ({ dataTable }) => {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-800 border border-gray-200">
          <thead className="text-xs text-gray-400 bg-gray-100 border-b border-gray-200">
            <tr className="">
              <th scope="col" className="px-6 py-2 border border-gray-200">
                Indicador
              </th>
              <th scope="col" className="px-6 py-2 border border-gray-200">
                Meta
              </th>
              <th scope="col" className="px-6 py-2 border border-gray-200">
                Descripción
              </th>
              <th scope="col" className="px-6 py-2 border border-gray-200">
                Evidencia
              </th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="p-4 border border-gray-200">
                    {item.indicador}
                  </td>
                  <td className="p-4 border border-gray-200"></td>
                  <td className="p-4 border border-gray-200"></td>
                  <td className="p-4 border border-gray-200"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RevisionTable;
