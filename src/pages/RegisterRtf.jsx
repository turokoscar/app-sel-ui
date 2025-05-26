import React from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import { NavLink } from "react-router-dom";

const pasos = [
  { numero: 1, titulo: "Seleccionar" },
  { numero: 2, titulo: "Agregar usuario" },
  { numero: 3, titulo: "Configuración" },
  { numero: 4, titulo: "Finalizar" },
];

const RegisterRtf = () => {
  const pasoActivo = 2; // Define el paso actual aquí

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-4">
      <PageTitle
        titlePage={"Componente: Reporte Técnico Financiero"}
        subTitle={"Implementación de Sistema de Riego - Registro de Informe"}
      />

      <div className="w-full py-6 flex items-center justify-between relative">
        {pasos.map((paso, i) => (
          <div
            key={i}
            className="relative flex-1 flex flex-col items-center z-10"
          >
            {/* Línea entre círculos (excepto el primero) */}
            {i > 0 && (
              <div className="absolute top-1/2 left-0 w-full h-1 -z-10">
                <div
                  className={`h-full ${
                    i < pasoActivo ? "bg-green-400" : "bg-gray-200"
                  } transition-all duration-300`}
                ></div>
              </div>
            )}

            {/* Círculo del paso */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                ${
                  paso.numero <= pasoActivo
                    ? "bg-green-500 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-600"
                }`}
            >
              {paso.numero}
            </div>

            {/* Título del paso */}
            <p className="mt-2 text-sm text-center">{paso.titulo}</p>
          </div>
        ))}
      </div>

      <div>
        {/* Informe del Paso Crítico */}
        <SectionTitle title={"Informe del Paso Crítico"} />
        <div className="bg-white p-6 rounded-lg shadow-md space-y-2 mb-6">
          <div>
            <p>Fecha de presentación</p>
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
            />
          </div>
          <div>
            <p>Informe detallado del paso crítico</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border border-gray-300 rounded-md p-3 w-full mb-4"
              placeholder="Describa el avance del paso crítico, logros obtenidos y detalles relevantes."
            ></textarea>
          </div>
          <div>
            <NavLink
              to={""}
              className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Anterior
            </NavLink>
            <button className="bg-pantone-7738 text-white px-4 py-2 rounded-md ml-4 hover:bg-pantone-7738/80 transition-colors">
              Guardar y Coninuar
            </button>
          </div>
        </div>

        {/* Avance de Indicadores */}
        <SectionTitle title={"Avance de Indicadores"} />
        <div className="bg-white p-6 rounded-lg shadow-md space-y-2 mb-6">
          <h4>Avance de Indicadores del Paso Crítico</h4>
          <div className="relative overflow-x-auto">
            <table className="w-full text-left rtl:text-right border border-gray-200 dark:border-gray-700 rounded-xl">
              <thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200 dark:border-gray-700">
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
              {/*   <tbody className="text-sm">
                            {indicadores.map((item, index) => (
                              <tr
                                key={index}
                                className="bg-white border-b border dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                              >
                                <td className="p-4 border border-gray-300">
                                  {item.indicador}
                                </td>
                                <td className="p-4 border border-gray-300">
                                  {item.meta}
                                </td>
                                <td className="p-4 border border-gray-300">
                                  {item.descripcion}
                                </td>
                                <td className="p-4 border border-gray-300">
                                  <a
                                    href={`/${item.evidencia}`}
                                    className="text-pantone-7738 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {item.evidencia}
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRtf;
