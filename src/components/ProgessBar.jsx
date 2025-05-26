import React from "react";

const ProgessBar = ({ porcentaje }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-pantone-7738 h-3 rounded-full transition-all duration-700"
        style={{ width: `${porcentaje}%` }}
      ></div>
    </div>
  );
};

export default ProgessBar;
