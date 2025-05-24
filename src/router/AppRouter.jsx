import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginForm from "../pages/LoginForm";
import EvaluationPanel from "../pages/ EvaluationPanel";
import SistRepTecFin from "../pages/SistRepTecFin";
import { DashPasosCriticos } from "../pages/DashPasosCriticos";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LoginForm />} />
          <Route path="/evaluator" element={<EvaluationPanel />} />
          <Route path="/sistema-reporte-tecnico" element={<SistRepTecFin />} />
          <Route path="/pasos-criticos" element={<DashPasosCriticos />} />
        </Route>
      </Routes>
    </>
  );
};
