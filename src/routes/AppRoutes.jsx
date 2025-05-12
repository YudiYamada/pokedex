import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Post from "../pages/Pokemon";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pokemon/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
