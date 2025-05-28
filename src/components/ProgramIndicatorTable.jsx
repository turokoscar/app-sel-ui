import React from "react";
import ProgessBar from "./ProgessBar";

/* Tabla - Indicadores del Programa (02) */
const ProgramIndicatorTable = ({ data }) => {
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
                Avance (%)
              </th>
              <th scope="col" className="px-6 py-2 border border-gray-200">
                Observaciones
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b border dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <td className="p-4 border border-gray-200">{item.indicador}</td>
                <td className="p-4 border border-gray-200">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="1"
                      value={item.avance}
                      readOnly
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "avance",
                          Number(e.target.value)
                        )
                      }
                      className="w-20 border border-gray-200 rounded px-2 py-1 text-center text-sm"
                    />
                    <span className="text-sm text-gray-700 w-6">
                      {item.avance}%
                    </span>
                    <ProgessBar porcentaje={item.avance} />
                  </div>
                </td>
                <td className="p-4 border border-gray-200">
                  <textarea
                    className="w-full  p-2 border border-gray-200 rounded-lg placeholder:text-gray-400"
                    rows={2}
                    readOnly
                    placeholder="Observaciones..."
                    value={item.observaciones}
                  ></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProgramIndicatorTable;
