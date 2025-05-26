import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginForm from "../pages/LoginForm";
import EvaluationPanel from "../pages/EvaluationPanel";
import SistRepTecFin from "../pages/SistRepTecFin";
import CriticalSteps from "../pages/CriticalSteps";
import RtfReportEvaluation from "../pages/RTFReportEvaluation";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LoginForm />} />
          <Route path="/evaluator" element={<EvaluationPanel />} />
          <Route path="/sistema-reporte-tecnico" element={<SistRepTecFin />} />
          <Route path="/pasos-criticos" element={<CriticalSteps />} />
          <Route path="/reporte-evaluacion" element={<RtfReportEvaluation />} />
        </Route>
      </Routes>
    </>
  );
};
