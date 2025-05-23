import React from "react";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-gray-600">
      <div className="bg-white shadow rounded-lg p-8 w-md">
        <div className="flex flex-col items-center justify-center pt-6 pb-4">
          {/* <img src="" alt="Asopebaid" className="w-[14rem] md:w-64" /> */}
          <h1 className="text-2xl font-bold text-pantone-7738">
            Iniciar sesión
          </h1>
          <p className="text-sm text-center py-2">
            Sistema de Reporte Técnico Financiero
          </p>
        </div>

        <form>
          <div className="flex flex-col gap-2 mb-5">
            <label className="font-medium">Usuario</label>
            <input
              type="text"
              className="text-md border border-gray-300 rounded-md p-2 w-full 
              placeholder:text-gray-300 placeholder:font-medium placeholder:text-md"
              placeholder="Ingrese su usuario"
            />
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <label className="font-medium">Contraseña</label>
            <input
              type="password"
              className="text-md border border-gray-300 rounded-md p-2 w-full 
              placeholder:text-gray-300 placeholder:font-medium placeholder:text-md"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <button
              type="submit"
              className="bg-pantone-7738 hover:bg-pantone-7738/80 transition-all ease-in text-white rounded-md p-2"
            >
              Iniciar sesión
            </button>
          </div>

          {/*   <div className="text-center gap-2 flex justify-center items-center text-sm">
            <span className="">¿No tienes cuenta?</span>
            <a
              to="/registro"
              className="text-blue-600 hover:text-blue-700"
            >
              Regístrate
            </a>
          </div>
          <div className="text-center gap-2 flex justify-center items-center text-sm pt-3"></div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
