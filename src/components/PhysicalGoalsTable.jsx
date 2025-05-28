import React from "react";

/* Tabla - Metas Físicas del POA (03) */
const PhysicalGoalsTable = ({ dataTable }) => {
  console.log("PhysicalGoalsTable dataTable:", dataTable);

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-800 border border-gray-200">
          <thead className="text-xs text-gray-400 bg-gray-100 border-b border-gray-200">
            <tr className="">
              <th scope="col" className="px-6 py-2 border border-gray-200">
                Meta
              </th>

              <th scope="col" className="px-6 py-2 border border-gray-200">
                Programado
              </th>
              <th scope="col" className="px-6 py-2 border border-gray-200">
                Avance (%)
              </th>
              <th scope="col" className="px-6 py-2 border border-gray-200">
                Observaciones
              </th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b border dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="p-4 border border-gray-200">{item.meta}</td>
                  <td className="p-4 border border-gray-200">
                    {item.programado}
                  </td>
                  <td className="p-4 border border-gray-200">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="1"
                      value={item.avance}
                      readOnly
                      className="w-20 border border-gray-200 rounded px-2 py-1 text-center text-sm"
                    />
                    <span className="text-sm text-gray-700 w-6">
                      {item.avance}%
                    </span>
                  </td>
                  <td className="p-4 border border-gray-200">
                    <textarea
                      className="w-full p-2 border border-gray-200 rounded-lg placeholder:text-gray-400"
                      rows={2}
                      readOnly
                      placeholder="Comentarios sobre el avance..."
                      value={item.observaciones}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PhysicalGoalsTable;
