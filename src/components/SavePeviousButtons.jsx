import React from "react";
import { NavLink } from "react-router-dom";

const SavePeviousButtons = () => {
  return (
    <div className="py-4">
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
  );
};

export default SavePeviousButtons;
