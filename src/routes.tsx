import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ButtonPage from "./pages/ButtonPage";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import ModalPage from "./pages/ModalPage";
import FormPage from "./pages/Form";
import InputPage from "./pages/InputPage";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/modal" element={<ModalPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/input" element={<InputPage />} />
    </Route>
  )
);
