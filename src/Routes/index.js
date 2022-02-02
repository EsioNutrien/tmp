import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPage from "../Pages/CardPage";
import MainPage from "../Pages/MainPage";
import MetricsPage from "../Pages/MetricsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="card" element={<CardPage />} />
      <Route path="metrics" element={<MetricsPage />} />
    </Routes>
  );
}
