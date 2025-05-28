import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import TabsComponents from "../components/TabsComponents";

const RegisterRtf = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-4">
      <PageTitle
        titlePage={"Componente: Reporte Técnico Financiero"}
        subTitle={"Implementación de Sistema de Riego - Registro de Informe"}
      />
      {/* Componente Tabs para mostrar el contenido de cada tab */}
      <TabsComponents />
    </div>
  );
};

export default RegisterRtf;
