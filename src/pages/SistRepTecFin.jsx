import { NotepadText } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Gestionar Pasos Críticos",
    description:
      "Acceda a sus pasos críticos asignados, registre avances y presente informes técnicos.",
    linkText: "Ir al Dashboard",
    icon: NotepadText,
  },
  /*   {
    title: "Gestionar Pasos Críticos",
    description:
      "Acceda a sus pasos críticos asignados, registre avances y presente informes técnicos.",
    linkText: "Ir al Dashboard",
    icon: NotepadText,
  },
  {
    title: "Gestionar Pasos Críticos",
    description:
      "Acceda a sus pasos críticos asignados, registre avances y presente informes técnicos.",
    linkText: "Ir al Dashboard",
    icon: NotepadText,
  }, */
];

const SistRepTecFin = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-pantone-7738 leading-8">
          Bienvenido al Sistema de Reporte Técnico Financiero
        </h2>
        <p className="text-lg pt-2 text-gray-400 mb-8">
          Plataforma para la gestión y seguimiento de los Pasos Críticos del
          programa SELv2
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cardData.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center sm:items-center text-center sm:text-center"
              >
                <span className="w-16 h-16 bg-pantone-7738/20 rounded-full inline-flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-pantone-7738" />
                </span>

                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h4>

                <p className="text-gray-400 text-base font-medium mb-8">
                  {card.description}
                </p>

                <Link
                  to="#"
                  className="bg-pantone-7738 px-5 py-3 rounded-xl text-white font-semibold hover:bg-pantone-7738/80 transition-all ease-in text-sm"
                >
                  {card.linkText}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SistRepTecFin;
