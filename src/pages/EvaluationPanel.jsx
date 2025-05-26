import { Check, Clock, TriangleAlert } from "lucide-react";
import PageTitle from "../components/PageTitle";

const dataRTF = [
  {
    organizacion: "Cooperativa Agrícola El Progreso",
    pasoCritico: "Capacitación de Agricultores",
    fechaEnvio: "29 ene. 2025",
    prioridad: "Alta",
    estado: "Pendiente",
  },
  {
    organizacion: "Asociación de Productores San Juan",
    pasoCritico: "Implementación de Sistema de Riego",
    fechaEnvio: "27 ene. 2025",
    prioridad: "Media",
    estado: "Pendiente",
  },
  {
    organizacion: "Cooperativa Valle Verde",
    pasoCritico: "Certificación de Productos Orgánicos",
    fechaEnvio: "24 ene. 2025",
    prioridad: "Baja",
    estado: "Observado",
  },
  {
    organizacion: "Asociación de Ganaderos Andinos",
    pasoCritico: "Evaluación de Impacto Ambiental",
    fechaEnvio: "24 ene. 2025",
    prioridad: "Media",
    estado: "Aprobado",
  },
];

const getPriorityColor = (priority) => {
  switch (priority) {
    case "Alta":
      return "bg-red-500";
    case "Media":
      return "bg-yellow-500";
    case "Baja":
      return "bg-green-500";
    default:
      return "bg-gray-300";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "Pendiente":
      return "bg-yellow-200/50 text-yellow-500";
    case "Observado":
      return "bg-red-200/50 text-red-500";
    case "Aprobado":
      return "bg-green-200/50 text-green-500";
    default:
      return "bg-gray-300";
  }
};

const EvaluationPanel = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-8 py-4">
        <PageTitle
          titlePage={"Panel de Evaluación"}
          subTitle={"Revisar y evaluar los informes RTF recibidos"}
        />
        {/* Estados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="text-gray-500 font-normal text-sm">Pendientes</p>
              <span className="font-bold text-2xl py-2 block text-pantone-1235">
                2
              </span>
            </div>
            <span className="w-10 h-10 bg-yellow-200/60 rounded-full flex justify-center items-center">
              <Clock color="#eab308" />
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="text-gray-500 font-normal text-sm">Observados</p>
              <span className="font-bold text-2xl py-2 block text-red-400">
                1
              </span>
            </div>
            <span className="w-10 h-10 bg-red-200/60 rounded-full flex justify-center items-center">
              <TriangleAlert color="#ef4444" />
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="text-gray-500 font-normal text-sm">Aprobados</p>
              <span className="font-bold text-2xl py-2 block text-pantone-p14215">
                1
              </span>
            </div>
            <span className="w-10 h-10 bg-green-200/60 rounded-full flex justify-center items-center">
              <Check color="#22c55e" />
            </span>
          </div>
        </div>
        {/* Buscador */}
        <div className="py-4 flex justify-between items-center">
          <input
            type="text"
            className="text-md border bg-white border-gray-200 rounded-md p-2 w-1/4 "
            placeholder="Buscar por organización o paso crítico"
          />
          <div>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="country"
                name="country"
                /* autocomplete="country-name" */
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-200 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="">Todos los estados</option>
                <option value="pendientes">Pendientes</option>
                <option value="observados">Observados</option>
                <option value="aprobados">Aprobados</option>
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
            Informes RTF Recibidos
          </h3>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-xl ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 ">
                <tr className="">
                  <th scope="col" className="px-6 py-6">
                    Organización
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Paso Crítico
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Fecha Envío
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Prioridad
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-6">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataRTF.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  >
                    <td className="p-4">{item.organizacion}</td>
                    <td className="p-4">{item.pasoCritico}</td>
                    <td className="p-4">{item.fechaEnvio}</td>
                    <td className="p-4">
                      <span
                        className={`w-3 h-3 inline-block rounded-full mr-2 ${getPriorityColor(
                          item.prioridad
                        )} `}
                      ></span>
                      {item.prioridad}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full font-light text-sm ${getStatusColor(
                          item.estado
                        )}`}
                      >
                        {item.estado}
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <button className="min-w-[120px] border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-pantone-7738">
                        Ver detalle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EvaluationPanel;
