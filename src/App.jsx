import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import "./App.css";
import Footer from "./components/layout/Footer";
import Product_Details from "./pages/Product_Details";
import CheckOut from "./pages/CheckOut";
import { productsAtom } from "./assets/productAtom";
import { useAtom } from "jotai";
import CheckOut_Success from "./pages/CheckOut_Success";
import Error_404 from "./pages/Error_404";

function App() {
  // Use Jotai state to manage the products
  const [products, setProducts] = useAtom(productsAtom);

  useEffect(() => {
    // Fetch products data from the API
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products); // Update the products state with fetched data
        // console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert(error);
      });
  }, []);

  return (
    <div className="">
      <Router>
        {/* Header component */}
        <Header />
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/products/:id" element={<Product_Details />} />
          <Route path="/checkout_success" element={<CheckOut_Success />} />
          <Route path="*" element={<Error_404 />} /> {/* 404 Error page */}
        </Routes>
        {/* Footer component */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
