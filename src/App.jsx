import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Header from "./Header";
import ProductDetail from "./productDetail";
import ProductList from "./productList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
