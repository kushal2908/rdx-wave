import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ButtonPage from "./pages/ButtonPage";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import ModalPage from "./pages/ModalPage";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/modal" element={<ModalPage />} />
    </Route>
  )
);
