import React, { useState } from "react";

/* Tabla - Avance de Indicadores del Paso Crítico (01) */
const CriticalStepIndProgTable = ({ dataTable }) => {
  const [fileName, setFileName] = useState("");

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-800 border border-gray-200">
        <thead className="text-xs text-gray-400 bg-gray-100 border-b border-gray-200">
          <tr className="">
            <th scope="col" className="px-6 py-2">
              Indicador
            </th>
            <th scope="col" className="px-6 py-2">
              Meta Programada
            </th>
            <th scope="col" className="px-6 py-2">
              Meta Alcanzada
            </th>
            <th scope="col" className="px-6 py-2">
              Descripción
            </th>
            <th scope="col" className="px-6 py-2">
              Evidencia
            </th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((item, index) => (
            <tr key={index} className="bg-white border-b border-gray-200">
              <td className="px-4 py-2 text-sm">{item.indicador}</td>
              <td className="px-4 py-2 text-sm">{item.metaProgramada}</td>

              <td className="px-4 py-2">
                <input
                  type="text"
                  value={item.metaAlcanzada}
                  onChange={(e) =>
                    handleInputChange(index, "metaAlcanzada", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  placeholder="Ingrese valor"
                />
              </td>

              <td className="px-4 py-2">
                <textarea
                  value={item.descripcion}
                  rows={3}
                  onChange={(e) =>
                    handleInputChange(index, "descripcion", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  placeholder="Descripción del avance..."
                />
              </td>

              <td className="px-4 py-2">
                <input
                  type="file"
                  id="archivo"
                  name="archivo"
                  accept=".pdf"
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      setFileName(e.target.files[0].name);
                    }
                  }}
                  className="block w-full text-sm text-gray-600 border border-gray-200 rounded-lg cursor-pointer bg-white p-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-pantone-7738 file:text-white hover:file:bg-pantone-7738/80"
                />
                {fileName && (
                  <p className="mt-1 pl-1 text-green-600 text-xs">
                    Archivo seleccionado: {fileName}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CriticalStepIndProgTable;
