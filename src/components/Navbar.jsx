import { LogOut } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-pantone-7738 text-white">
        <div className="max-w-screen-xl mx-auto px-8 py-4 flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-xl font-bold">SELv2</h1>
            <p className="text-xs">Sistema en Línea</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Dashboard</p>
            <div className="flex gap-2 items-center">
              <span className="w-8 h-8 bg-pantone-368 rounded-full flex items-center justify-center  font-medium">
                J
              </span>
              <div className="flex flex-col items-start justify-center text-sm leading-tight">
                <p>Juan Pérez</p>
                <p className="text-white/70 text-[0.75rem] sm:text-sm">
                  Cooperativa Agrícola El Progreso
                </p>
              </div>
            </div>
            <button className="w-34 bg-red-500 text-white py-2 text-sm rounded-md flex items-center justify-center gap-2 hover:bg-red-600 cursor-pointer">
              Cerrar sesión <LogOut size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
