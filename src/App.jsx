import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/ProductList";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Products />} path="/home" exact />
        <Route element={<Product />} path="/home/:id" exact />
        <Route element={<Cart />} path="/cart" exact />
      </Routes>
    </>
  );
}

export default App;
