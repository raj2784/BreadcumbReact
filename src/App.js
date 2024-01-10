import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Breadcumbs from "./Components/Breadcumbs";

function App() {
  return (
    <>
      <h1>Breadcrumbs Feature in React</h1>
      <BrowserRouter>
        <Breadcumbs />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
