import Reasct from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Main, About, Products, Delivery, Order } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}
