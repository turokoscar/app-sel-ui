import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import ProgramIndicatorTable from "./ProgramIndicatorTable";
import ProgessBar from "./ProgessBar";
import SavePeviousButtons from "./SavePeviousButtons";
import PhysicalGoalsTable from "./PhysicalGoalsTable";
import CriticalStepIndProgTable from "./CriticalStepIndProgTable";
import SectionSubtTitle from "./SectionSubtTitle";
import RevisionTable from "./RevisionTable";
import { IcoInfo } from "./IcoInfo";
import IcoCheck from "./IcoCheck";

// Tabs Reporte Técnico Financiero (principal)
const tabsRegistroInforme = [
  {
    id: "informe",
    label: "Informe del Paso Crítico",
  },
  {
    id: "avance",
    label: "Avance de Indicadores",
  },
  {
    id: "indicadores",
    label: "Indicadores del Programa",
  },
  {
    id: "metas",
    label: "Metas Físicas POA",
  },
  {
    id: "cumplimiento",
    label: "Cumplimiento",
  },
  {
    id: "revision",
    label: "Revisión y Envío",
  },
];
// tabs - Indicadores del Programa
const tabsIndicadoresPrograma = [
  {
    id: "ambientales",
    label: "Ambientales",
  },
  {
    id: "gestion",
    label: "Gestión",
  },
  {
    id: "programa",
    label: "Programa",
  },
];
const indicatorTableData = [
  {
    indicador: "Equipos instalados",
    metaProgramada: "10 equipos",
    metaAlcanzada: "",
    descripcion: "",
    evidencia: null,
  },
  {
    indicador: "Personal capacitado",
    metaProgramada: "15 personas",
    metaAlcanzada: "",
    descripcion: "",
    evidencia: null,
  },
  {
    indicador: "Procedimientos documentados",
    metaProgramada: "5 procedimientos",
    metaAlcanzada: "",
    descripcion: "",
    evidencia: null,
  },
];
// tabs - Indicadores del Programa
const ambientales = [
  {
    indicador: "Reducción de uso de agroquímicos",
    avance: 0,
    observaciones: "",
  },
  {
    indicador: "Hectáreas con manejo sostenible",
    avance: 0,
    observaciones: "",
  },
  {
    indicador: "Ahorro de agua (m³)",
    avance: 0,
    observaciones: "",
  },
];
const gestion = [
  {
    indicador: "Ejecución presupuestal",
    avance: "",
    observaciones: "",
  },
  {
    indicador: "Cumplimiento de cronograma",
    avance: "",
    observaciones: "",
  },
  {
    indicador: "Gestión de recursos externos",
    avance: "",
    observaciones: "",
  },
];
const programa = [
  {
    indicador: "Desarrollo de capacidades",
    avance: "",
    observaciones: "",
  },
  {
    indicador: "Rendimiento productivo",
    avance: "",
    observaciones: "",
  },
  {
    indicador: "Adopción de tecnologías",
    avance: "",
    observaciones: "",
  },
];
// Metas físicas POA
const metasFisicasTableData = [
  {
    meta: "Contratación de personal técnico",
    programado: "5 tecnicos",
    avance: "",
    comentarios: "",
  },
  {
    meta: "Adquisición de equipos",
    programado: "10 equipos",
    avance: "",
    comentarios: "",
  },
  {
    meta: "Elaboración de materiales de capacitación",
    programado: "3 manuales",
    avance: "",
    comentarios: "",
  },
];
// Tabla de revision
const revisionTableData = [
  {
    indicador: "Desarrollo de capacidades",
    meta: "",
    descripcion: "",
    evidencia: "",
  },
  {
    indicador: "Personal capacitado",
    meta: "",
    descripcion: "",
    evidencia: "",
  },
  {
    indicador: "Procedimientos documentados",
    meta: "",
    descripcion: "",
    evidencia: "",
  },
];

const TabsComponents = () => {
  const [activeTab, setActiveTab] = useState("informe");
  const [activeSubTab, setActiveSubTab] = useState("ambientales");
  const [cumplio, setCumplio] = useState("");

  return (
    <>
      <div>
        <div className="bg-gray-100 shadow rounded-lg p-2 mb-4">
          <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium text-center text-gray-600">
            {tabsRegistroInforme.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-lg transition-colors duration-300 ease-in-out w-full
          ${
            activeTab === tab.id
              ? "bg-pantone-7738 text-white shadow-md"
              : "bg-white hover:bg-pantone-7738 hover:text-white border border-gray-200"
          }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Columna - Tabs */}
        <div>
          {/* Paso 0 - Informe del Paso Crítico */}
          {activeTab === "informe" && (
            <div>
              <SectionTitle title={"Informe del Paso Crítico"} />
              <div className="bg-white p-6 rounded-b-lg border border-gray-200 mb-6 text-sm">
                <div>
                  <p>Fecha de presentación</p>
                  <input
                    type="date"
                    className="border border-gray-200 rounded-md p-2 w-full mt-1 mb-4"
                  />
                </div>
                <div>
                  <p>Informe detallado del paso crítico</p>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="border border-gray-200 rounded-md p-3 mt-1 w-full"
                    placeholder="Describa el avance del paso crítico, logros obtenidos y detalles relevantes."
                  ></textarea>
                </div>
                <SavePeviousButtons />
              </div>
            </div>
          )}
          {/* Paso 1 - Avance de Indicadores */}
          {activeTab === "avance" && (
            <div>
              <SectionTitle title={"Avance de Indicadores"} />
              <div className="bg-white p-6 rounded-b-lg border border-gray-200 mb-6 text-sm">
                <div>
                  <SectionSubtTitle
                    subTitle={"Avance de Indicadores del Paso Crítico"}
                  />
                  <CriticalStepIndProgTable dataTable={indicatorTableData} />
                  <SavePeviousButtons />
                </div>
              </div>
            </div>
          )}
          {/* Paso 2 - Indicadores del Programa */}
          {activeTab === "indicadores" && (
            <div>
              <SectionTitle title={"Indicadores del Programa"} />
              <div className="bg-white p-6 rounded-b-lg border border-gray-200 mb-6 text-sm">
                <div>
                  <SectionSubtTitle subTitle={"Indicadores del Programa"} />
                  <div className="bg-gray-100 shadow rounded-lg p-2 mb-4">
                    <ul className="flex text-sm font-normal text-center text-gray-500 dark:text-gray-400">
                      {tabsIndicadoresPrograma.map((tab) => (
                        <li className="me-2 w-full" key={tab.id}>
                          <button
                            onClick={() => setActiveSubTab(tab.id)}
                            className={`inline-block px-4 py-3 text-gray-700 hover:text-gray-900 rounded-lg active w-full ${
                              activeSubTab === tab.id
                                ? "bg-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {tab.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Contenido de los indicadores */}
                  {activeSubTab === "ambientales" && (
                    <ProgramIndicatorTable
                      data={ambientales}
                      //setData={setAmbientales}
                    />
                  )}
                  {activeSubTab === "gestion" && (
                    <ProgramIndicatorTable
                      data={gestion}
                      // setData={setGestion}
                    />
                  )}
                  {activeSubTab === "programa" && (
                    <ProgramIndicatorTable
                      data={programa}
                      //setData={setPrograma}
                    />
                  )}
                </div>
                {/* <SavePeviousButtons /> */}
                <SavePeviousButtons />
              </div>
            </div>
          )}
          {/* Paso 3 - Metas Fisicas POA */}
          {activeTab === "metas" && (
            <div>
              <SectionTitle title={"Metas Fisicas POA"} />
              <div className="bg-white p-6 rounded-b-lg border border-gray-200 mb-6 text-sm">
                <SectionSubtTitle subTitle={"Metas Físicas del POA"} />
                <PhysicalGoalsTable dataTable={metasFisicasTableData} />
                <SavePeviousButtons />
              </div>
            </div>
          )}
          {/* Paso 4 - Cumplimiento */}
          {activeTab === "cumplimiento" && (
            <div>
              <SectionTitle title={"Cumplimiento - 4"} />
              <div className="bg-white p-6 rounded-b-lg border border-gray-200 mb-6 text-sm">
                <SectionSubtTitle subTitle={"Cumplimiento del Paso Crítico"} />
                <div>
                  <p className="">
                    ¿Se cumplió el paso crítico según lo planificado?
                  </p>

                  <div className="flex gap-8 items-center">
                    {/* Opción: Sí */}

                    <div className="flex items-center gap-2 py-2">
                      <input
                        type="radio"
                        id="cumplio-si"
                        name="decision"
                        value={"si"}
                        checked={cumplio === "si"}
                        onChange={(e) => setCumplio(e.target.value)}
                        className="accent-pantone-7738 w-4 h-4"
                      />
                      <label
                        htmlFor="cumplio-si"
                        className="text-sm font-medium text-pantone-7738"
                      >
                        Sí
                      </label>
                    </div>

                    {/* Opción: No */}
                    <div className="flex items-center gap-2 py-2">
                      <input
                        type="radio"
                        id="cumplio-no"
                        name="decision"
                        value={"no"}
                        checked={cumplio === "no"}
                        onChange={(e) => setCumplio(e.target.value)}
                        className="accent-pantone-7738 w-4 h-4"
                      />
                      <label
                        htmlFor="cumplio-no"
                        className="text-sm font-medium text-pantone-7738"
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {cumplio === "" && (
                    <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200 flex items-start ">
                      <IcoInfo />
                      <div>
                        <p className="text-blue-800 text-sm font-medium">
                          Información requerida
                        </p>
                        <p className="text-blue-600 text-sm mt-1">
                          Debe indicar si el paso crítico se cumplió o no según
                          lo planificado.
                        </p>
                      </div>
                    </div>
                  )}
                  {cumplio === "si" && (
                    <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200 flex items-start">
                      <IcoCheck />
                      <div>
                        <p className="text-green-800 text-sm font-medium">
                          Paso crítico cumplido
                        </p>
                        <p className="text-green-600 text-sm mt-1">
                          Ha indicado que el paso crítico se cumplió según lo
                          planificado.
                        </p>
                      </div>
                    </div>
                  )}
                  {cumplio === "no" && (
                    <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
                      <div>
                        <p className=" text-sm font-medium">
                          Sustento técnico{" "}
                          <span className="text-red-600">*</span>
                        </p>
                        <p className="text-sm mt-1 text-gray-500">
                          Explique las razones técnicas por las que no se
                          cumplió el paso crítico.
                        </p>
                        <textarea
                          className="w-full p-2 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 mt-2"
                          rows={4}
                          placeholder="Describa las razónes técnicas..."
                        ></textarea>
                      </div>
                      <div>
                        <p className=" text-sm font-medium">
                          Impacto estimado (opcional)
                        </p>
                        <p className="text-sm mt-1 text-gray-500">
                          Describa el impacto que podría tener el incumplimiento
                          del paso crítico.
                        </p>
                        <textarea
                          className="w-full p-2 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 mt-2"
                          rows={4}
                          placeholder="Describa el impacto estimado..."
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>
                <SavePeviousButtons />
              </div>
            </div>
          )}
          {/* Paso 5 - Revisión y Envío */}
          {activeTab === "revision" && (
            <div>
              <SectionTitle title={"Revisión y Envío"} />

              <div className="bg-white p-6 rounded-b-lg border border-gray-200 space-y-4 mb-6">
                <div className="bg-yellow-50 p-4 rounded-md mt-4 border border-yellow-200 flex items-start">
                  <IcoInfo className="text-yellow-600" />
                  <div>
                    <p className="text-yellow-800 text-sm font-medium">
                      Paso crítico cumplido
                    </p>
                    <p className="text-yellow-700 text-sm mt-1">
                      Ha indicado que el paso crítico se cumplió según lo
                      planificado.
                    </p>
                  </div>
                </div>

                <SectionSubtTitle subTitle={"Resumen del Informe RTF"} />
                <div className="rounded-lg border border-gray-200">
                  <SectionTitle title={"Información General"} />
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-start">
                      {/* Columna 1 */}
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-400">
                            Nombre del Paso Crítico
                          </p>
                          <p className="text-base text-gray-800">
                            Inicio de Operaciones de Campo
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-400">
                            Fecha de Inicio
                          </p>
                          <p className="text-base text-gray-800">
                            14 de enero de 2025
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-400">
                            Estado del Paso Crítico
                          </p>
                          <p className="text-base text-gray-800">Activo</p>
                        </div>
                      </div>

                      {/* Columna 2 */}
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-400">
                            Fecha de Presentación
                          </p>
                          <p className="text-base text-gray-800">
                            Inicio de Operaciones de Campo
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-400">
                            Fecha de Fin
                          </p>
                          <p className="text-base text-gray-800">
                            14 de enero de 2025
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200">
                  <SectionTitle title={"Informe Detallado"} />
                  <div className="p-4"></div>
                </div>

                <div className="rounded-lg border border-gray-200">
                  <SectionTitle title={"Indicadores del Paso Crítico"} />
                  <div className="p-4">
                    <RevisionTable dataTable={revisionTableData} />
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200">
                  <SectionTitle title={"Cumplimiento del Paso Crítico"} />
                  <div className="p-4">
                    <p className="text-gray-400">
                      No se registró información sobre el cumplimiento.
                    </p>
                  </div>
                </div>
                <SavePeviousButtons />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TabsComponents;
