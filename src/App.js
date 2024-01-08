import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
