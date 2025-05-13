import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
