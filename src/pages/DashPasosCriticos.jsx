import React from "react";
import PageTitle from "../components/PageTitle";
const dataPC = [
  {
    organizacion: "Cooperativa Agrícola El Progreso",
    pasoCritico: "Inicio de Operaciones de Campo",
    fechaEnvio: "29 ene. 2025",
    fechaInicio: "14 ene. 2025",
    fechaFin: "14 feb. 2025",
    semaforo: "En tiempo",
    prioridad: "Alta",
    estado: "Activo",
  },
  {
    organizacion: "Asociación de Productores San Juan",
    pasoCritico: "Implementación de Sistema de Riego",
    fechaEnvio: "27 ene. 2025",
    fechaInicio: "31 ene. 2025",
    fechaFin: "19 mar. 2025",
    semaforo: "Próximo a vencer",
    prioridad: "Media",
    estado: "Activo",
  },
  {
    organizacion: "Cooperativa Valle Verde",
    pasoCritico: "Capacitación de Agricultores",
    fechaEnvio: "24 ene. 2025",
    fechaInicio: "9 ene. 2025",
    fechaFin: "29 ene. 2025",
    semaforo: "En tiempo",
    prioridad: "Baja",
    estado: "En revisión",
  },
  {
    organizacion: "Asociación de Ganaderos Andinos",
    pasoCritico: "Certificación de Productos Orgánicos",
    fechaEnvio: "24 ene. 2025",
    fechaInicio: "28 feb. 2025",
    fechaFin: "14 abr. 2025",
    semaforo: "Atrasado",
    prioridad: "Media",
    estado: "Activo",
  },
  {
    organizacion: "Asociación de Ganaderos Andinos",
    pasoCritico: "Evaluación de Impacto Ambiental",
    fechaEnvio: "24 ene. 2025",
    fechaInicio: "30 nov. 2024",
    fechaFin: "30 dic. 2024",
    semaforo: "En tiempo",
    prioridad: "Media",
    estado: "Cerrado",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "En revisión":
      return "bg-yellow-200/50 text-yellow-500";
    case "Cerrado":
      return "bg-red-200/50 text-red-500";
    case "Activo":
      return "bg-green-200/50 text-green-500";
    default:
      return "bg-gray-300";
  }
};

const getTrafficLight = (semaforo) => {
  switch (semaforo) {
    case "Atrasado":
      return "bg-red-500 text-red-500";
    case "Próximo a vencer":
      return "bg-yellow-500 text-yellow-500";
    case "En tiempo":
      return "bg-green-500 text-green-500";
    default:
      return "bg-gray-300 text-gray-400";
  }
};

export const DashPasosCriticos = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-4">
      <div className="py-4 flex justify-between items-center">
        <PageTitle
          titlePage={"Dashboard de Pasos Críticos"}
          subTitle={"Gestione los pasos críticos asignados a su organización"}
        />
        <div>
          <div className="mt-2 grid grid-cols-1 w-44">
            <select
              id="country"
              name="country"
              /* autocomplete="country-name" */
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-3 pr-8 pl-3 text-lg font-medium text-gray-900 outline-1 -outline-offset-1 outline-gray-200 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
            >
              <option value="">Todos los estados</option>
              <option value="pendientes">Activos</option>
              <option value="observados">En revisión</option>
              <option value="aprobados">Cerrado</option>
            </select>
            <svg
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tabla */}

      <div className="overflow-hidden pt-2 pb-6">
        <h3 className="text-xl p-6 bg-gray-50 border border-gray-200">
          Lista de Pasos Críticos
        </h3>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-xl ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 ">
              <tr className="">
                <th scope="col" className="px-6 py-6">
                  Nombre del Paso Crítico
                </th>
                <th scope="col" className="px-6 py-6">
                  Fecha inicio
                </th>
                <th scope="col" className="px-6 py-6">
                  Fecha fin
                </th>
                <th scope="col" className="px-6 py-6">
                  Estado
                </th>
                <th scope="col" className="px-6 py-6">
                  Semáforo
                </th>
                <th scope="col" className="px-6 py-6">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {dataPC.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="p-4">{item.pasoCritico}</td>
                  <td className="p-4">{item.fechaInicio}</td>
                  <td className="p-4">{item.fechaFin}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm inline-block rounded-full ${getStatusColor(
                        item.estado
                      )} `}
                    >
                      {item.estado}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`w-3 h-3 inline-block rounded-full mr-2 ${getTrafficLight(
                        item.semaforo
                      )}`}
                    ></span>
                    <span>{item.semaforo}</span>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <button className="min-w-[120px] border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-pantone-7738">
                      Registrar Informe RTF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
