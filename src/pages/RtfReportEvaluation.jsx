import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import ProgessBar from "../components/ProgessBar";
import { NavLink } from "react-router-dom";
import GenericTable from "../components/GenericTable";

const indicadores = [
  {
    indicador: "Agricultores capacitados",
    meta: 120,
    descripcion: "Se logró la meta de capacitación.",
    evidencia: "evidencia-capacitacion.pdf",
  },
  {
    indicador: "Sesiones realizadas",
    meta: 5,
    descripcion: "Todas las sesiones planificadas fueron ejecutadas.",
    evidencia: "registro-sesiones.pdf",
  },
];

const ambientales = [
  {
    indicador: "Reducción de uso de agroquímicos",
    avance: 85,
    observaciones:
      "Se logró reducir significativamente el uso de agroquímicos.",
  },
];
const sociales = [
  {
    indicador: "Participación de mujeres",
    avance: 60,
    observaciones:
      "Se incrementó la participación, aunque no se alcanzó la meta.",
  },
];
const programa = [
  {
    indicador: "Desarrollo de capacidades",
    avance: 100,
    observaciones: "Meta alcanzada completamente.",
  },
];

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
const getPriorityColor = (priority) => {
  switch (priority) {
    case "Alta":
      return "text-red-500";
    case "Media":
      return "text-yellow-500";
    case "Baja":
      return "text-green-500";
    default:
      return "text-gray-300";
  }
};

// Datos para las tablas:

const indicadorPCHeaderTab = [
  { label: "Indicador", key: "indicador" },
  { label: "Meta", key: "meta" },
  { label: "Descripción", key: "descripcion" },
  { label: "Evidencia", key: "evidencia" },
];
const indicadorPCDataTab = [
  {
    indicador: "Agricultores capacitados",
    meta: 120,
    descripcion: "Se logró la meta de capacitación.",
    evidencia: "evidencia-capacitacion.pdf",
  },
  {
    indicador: "Sesiones realizadas",
    meta: 5,
    descripcion: "Todas las sesiones planificadas fueron ejecutadas.",
    evidencia: "evidencia-capacitacion.pdf",
  },
];

const metasFHeaderTab = [
  { label: "Meta", key: "meta" },
  { label: "Avance", key: "avance" },
  { label: "Comentarios", key: "comentarios" },
];
const metasPOATab = [
  {
    meta: "Material didáctico entregado",
    avance: 100,
    comentarios: "Se entregó todo el material planificado.",
  },
  {
    meta: "Implementación de parcelas demostrativas",
    avance: 75,
    comentarios: "Se implementaron 3 de 4 parcelas planificadas.",
  },
];

const metasPOA = [
  {
    meta: "Material didáctico entregado",
    avance: 100,
    comentarios: "Se entregó todo el material planificado.",
  },
  {
    meta: "Implementación de parcelas demostrativas",
    avance: 75,
    comentarios: "Se implementaron 3 de 4 parcelas planificadas.",
  },
];
const RtfReportEvaluation = () => {
  const [activeTab, setActiveTab] = useState("informe");
  const [fileName, setFileName] = useState("");
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-8 py-4">
        <div className="py-4 flex justify-between items-center">
          <PageTitle
            titlePage={"Evaluación de Informe RTF"}
            subTitle={
              "Cooperativa Agrícola El Progreso - Capacitación de Agricultores"
            }
          />

          <div className="w-full flex justify-end">
            <NavLink
              to="/evaluator"
              className="border border-gray-200 py-2 px-4 text-sm rounded-lg bg-white hover:bg-gray-100  transition-colors duration-200"
            >
              Volver al Listado
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
          <div>
            <div className="bg-gray-100 shadow rounded-lg p-2 mb-4">
              <ul className="flex text-sm font-medium text-center text-gray-400">
                <li className="me-2 w-full">
                  <button
                    onClick={() => setActiveTab("informe")}
                    className={`inline-block px-4 py-3 text-gray-700 hover:text-gray-900 rounded-lg active w-full ${
                      activeTab === "informe" ? "bg-white" : "bg-gray-200"
                    }`}
                  >
                    Informe
                  </button>
                </li>
                <li className="me-2 w-full">
                  <button
                    onClick={() => setActiveTab("indicadores")}
                    className={`inline-block px-4 py-3 text-gray-700 hover:text-gray-900 rounded-lg active w-full ${
                      activeTab === "indicadores" ? "bg-white" : "bg-gray-200"
                    }`}
                  >
                    Indicadores
                  </button>
                </li>
                <li className="me-2 w-full">
                  <button
                    onClick={() => setActiveTab("cumplimiento")}
                    className={`inline-block px-4 py-3 text-gray-700 hover:text-gray-900  rounded-lg active w-full ${
                      activeTab === "cumplimiento" ? "bg-white" : "bg-gray-200"
                    }`}
                  >
                    Cumplimiento
                  </button>
                </li>
              </ul>
            </div>
            {/* Columna - Tabs */}
            <div>
              <div>
                {/* Informe */}
                {activeTab === "informe" && (
                  <>
                    <SectionTitle title="Detalle del Informe" />
                    <div className="bg-white space-y-4 p-4 mb-4 border border-gray-200 rounded-b-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400 font-medium">
                            Fecha de Presentación
                          </p>
                          <p>29 de enero de 2025</p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-medium">
                            Fecha de Envío
                          </p>
                          <p>29 de enero de 2025</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-800 text-sm leading-6">
                          Este informe detalla el avance del paso crítico de
                          Capacitación de Agricultores. Se han realizado 5
                          sesiones de capacitación con 120 participantes. Los
                          resultados han sido positivos, con una alta tasa de
                          asistencia y participación activa.
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {/* Indicadores */}
                {activeTab === "indicadores" && (
                  <>
                    <SectionTitle title="Indicadores del Informe" />
                    <div className="bg-white space-y-4 p-4 mb-4 border border-gray-200 rounded-b-lg">
                      <GenericTable
                        dataHead={indicadorPCHeaderTab}
                        dataTable={indicadorPCDataTab}
                      />
                    </div>
                    {/* 
const metasFHeaderTab = ["Meta", "Avance", "Comentarios"];
const metasPOATab = [ */}
                    <SectionTitle title="Metas Físicas e Indicadores del Programa" />
                    <div className="bg-white space-y-4 p-4 mb-4 border border-gray-200 rounded-b-lg">
                      {/* Metas Físicas del POA */}
                      <div>
                        <p className="text-gray-800 text-sm font-medium pb-1">
                          Metas Físicas del POA
                        </p>
                        {/* tabla */}
                        {/*   <GenericTable
                          dataHead={metasFHeaderTab}
                          dataTable={metasPOATab}
                        /> */}

                        <div className="relative overflow-x-auto">
                          <table className="w-full text-sm text-left text-gray-800 border border-gray-200">
                            <thead className="text-xs text-gray-400 bg-gray-100 border-b border-gray-200">
                              <tr className="">
                                <th
                                  scope="col"
                                  className="px-6 py-2 border border-gray-200"
                                >
                                  Meta
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-2 border border-gray-200"
                                >
                                  Avance
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-2 border border-gray-200"
                                >
                                  Comentarios
                                </th>
                              </tr>
                            </thead>
                            <tbody className="text-sm">
                              {metasPOA.map((item, index) => (
                                <tr
                                  key={index}
                                  className="bg-white border-b border dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                >
                                  <td className="p-4 border border-gray-200">
                                    {item.meta}
                                  </td>
                                  <td className="p-4 border border-gray-200 ">
                                    <div className="flex items-center gap-2  w-[8rem]">
                                      <span className="text-sm font-medium text-gray-700 ">
                                        {item.avance}%
                                      </span>
                                      <ProgessBar porcentaje={item.avance} />
                                    </div>
                                  </td>
                                  <td className="p-4 border border-gray-200">
                                    {item.comentarios}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {/* Tabla */}
                      </div>
                      {/* Indicadores del Programa */}
                      <div className="space-y-4">
                        {/* Ambientales */}
                        <div>
                          <p className="text-gray-800 text-sm font-medium pb-1">
                            Indicadores del Programa
                          </p>
                          <p className="text-gray-500 text-sm uppercase pb-1">
                            Ambientales
                          </p>
                          {/* tabla  */}
                          <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-800 border border-gray-200">
                              <thead className="text-xs text-gray-400 bg-gray-100 border-b border-gray-200">
                                <tr className="">
                                  <th
                                    scope="col"
                                    className="px-6 py-2 border border-gray-200"
                                  >
                                    Meta
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-2 border border-gray-200"
                                  >
                                    Avance
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-2 border border-gray-200"
                                  >
                                    Observaciones
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-sm">
                                {ambientales.map((item, index) => (
                                  <tr
                                    key={index}
                                    className="bg-white border-b border dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                  >
                                    <td className="p-4 border border-gray-200">
                                      {item.indicador}
                                    </td>
                                    {/*  <td className="p-4 border border-gray-200">
                                      {item.avance}
                                    </td> */}
                                    <td className="p-4 border border-gray-200 ">
                                      <div className="flex items-center gap-2  w-[8rem]">
                                        <span className="text-sm font-medium text-gray-700 ">
                                          {item.avance}%
                                        </span>
                                        <ProgessBar porcentaje={item.avance} />
                                      </div>
                                    </td>
                                    <td className="p-4 border border-gray-200">
                                      {item.observaciones}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          {/* Tabla */}
                        </div>
                        {/* Sociales */}
                        <div>
                          <p className="text-gray-500 text-sm uppercase pb-1">
                            Sociales
                          </p>
                          {/* tabla */}
                          <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-800 border border-gray-200">
                              <thead className="text-xs text-gray-400 bg-gray-100 border-b border-gray-200">
                                <tr className="">
                                  <th
                                    scope="col"
                                    className="px-6 py-2 border border-gray-200"
                                  >
                                    Meta
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-2 border border-gray-200"
                                  >
                                    Avance
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-2 border border-gray-200"
                                  >
                                    Comentarios
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-sm">
                                {sociales.map((item, index) => (
                                  <tr
                                    key={index}
                                    className="bg-white border-b border dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                  >
                                    <td className="p-4 border border-gray-200">
                                      {item.indicador}
                                    </td>
                                    {/*    <td className="p-4 border border-gray-200">
                                      {item.avance}
                                    </td> */}
                                    <td className="p-4 border border-gray-200 ">
                                      <div className="flex items-center gap-2  w-[8rem]">
                                        <span className="text-sm font-medium text-gray-700 ">
                                          {item.avance}%
                                        </span>
                                        <ProgessBar porcentaje={item.avance} />
                                      </div>
                                    </td>
                                    <td className="p-4 border border-gray-200">
                                      {item.observaciones}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          {/* Tabla */}
                        </div>
                        {/* Programa */}
                        <div>
                          <p className="text-gray-500 text-sm uppercase pb-1">
                            Programa
                          </p>
                          {/* tabla */}
                          <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-800 border border-gray-200">
                              <thead className="text-xs text-gray-400 bg-gray-100 border-b border-gray-200">
                                <tr className="">
                                  <th
                                    scope="col"
                                    className="px-6 py-2 border border-gray-200"
                                  >
                                    Meta
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-2 border border-gray-200"
                                  >
                                    Avance
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-2 border border-gray-200"
                                  >
                                    Comentarios
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-sm">
                                {programa.map((item, index) => (
                                  <tr
                                    key={index}
                                    className="bg-white border-b border dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                  >
                                    <td className="p-4 border border-gray-200">
                                      {item.indicador}
                                    </td>
                                    {/*   <td className="p-4 border border-gray-200">
                                      {item.avance}
                                    </td> */}
                                    <td className="p-4 border border-gray-200 ">
                                      <div className="flex items-center gap-2  w-[8rem]">
                                        <span className="text-sm font-medium text-gray-700 ">
                                          {item.avance}%
                                        </span>
                                        <ProgessBar porcentaje={item.avance} />
                                      </div>
                                    </td>
                                    <td className="p-4 border border-gray-200">
                                      {item.observaciones}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          {/* Tabla */}
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {/* Cumplimiento */}
                {activeTab === "cumplimiento" && (
                  <>
                    <SectionTitle title="Cumplimiento del Paso Crítico" />
                    <div className="bg-white space-y-4 p-4 mb-4 border border-gray-200 rounded-b-lg">
                      <p>¿Se cumplió el paso crítico? Sí</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Columna - Detalle del Informe */}
          <div>
            <SectionTitle title={"Detalle del Informe"} />
            <div className="bg-white space-y-4 p-4 mb-4 border border-gray-200 rounded-b-lg">
              <div>
                <p className="text-gray-800 text-sm font-medium pb-1">
                  Observaciones
                </p>
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="6"
                  className="w-full border border-gray-200 rounded-lg p-2"
                  placeholder="Escriba sus observaciones aquí..."
                ></textarea>
              </div>
              <div>
                <p className="text-gray-800 text-sm font-medium pb-1">
                  Cargar documento (opcional)
                </p>
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
                  <p className="mt-2 text-green-600 text-sm">
                    Archivo seleccionado: {fileName}
                  </p>
                )}
              </div>

              <div>
                <p className="text-gray-800 text-sm font-medium pb-1">
                  Decisión de evaluación
                </p>
                <div className="flex items-start py-2">
                  <input
                    type="radio"
                    id="aprobar"
                    name="decision"
                    className="accent-pantone-7738 mt-1 w-4 h-4"
                  />
                  <div className="flex flex-col ml-3">
                    <label
                      htmlFor="aprobar"
                      className="text-sm font-medium text-pantone-7738"
                    >
                      Aprobar
                    </label>
                    <p className="text-sm text-gray-400">
                      El informe cumple con todos los requisitos y es aprobado.
                    </p>
                  </div>
                </div>
                {/* < */}
                <div className="flex items-start py-2 ">
                  <input
                    type="radio"
                    id="aprobar"
                    name="decision"
                    className="accent-pantone-7738 mt-1 w-4 h-4"
                  />
                  <div className="flex flex-col ml-3">
                    <label
                      htmlFor="observar"
                      className="text-sm font-medium text-pantone-7577"
                    >
                      Observar
                    </label>
                    <p className="text-sm text-gray-400">
                      El informe requiere correcciones o aclaraciones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button className="bg-pantone-7738 text-white py-2 px-4 rounded-lg w-full">
                  Registrar Evaluación
                </button>
              </div>
            </div>

            {/*  */}
            <div>
              <SectionTitle title={"Información del Informe"} />
              <div className="bg-white space-y-4 p-4 mb-4 border border-gray-200 rounded-b-lg text-sm font-medium">
                <div className="space-y-2 ">
                  <p className="text-gray-400 ">Organización</p>
                  <p>Cooperativa Agrícola El Progreso</p>
                </div>
                <div>
                  <p className="text-gray-400">Paso Crítico</p>
                  <p>Capacitación de Agricultores</p>
                </div>
                <div>
                  <p className="text-gray-400">Fecha de Envío</p>
                  <p>29 de enero de 2025</p>
                </div>
                <div>
                  <p className="text-gray-400">Estado</p>
                  <span
                    className={`mt-1 inline-flex px-3 py-1 rounded-full font-light text-sm ${getStatusColor(
                      "Pendiente"
                    )}`}
                  >
                    Pendiente
                  </span>
                </div>
                <div>
                  <p className="text-gray-400 ">Prioridad</p>
                  <p className={`text-md ${getPriorityColor("Alta")}`}>Alta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RtfReportEvaluation;
