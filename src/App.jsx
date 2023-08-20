import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
// import { useEffect, useState } from "react";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/Shopping-Cart/" element={<Home />} />
        <Route path="/Shopping-Cart/:id" element={<ProductDetail />} />
        <Route path="/Shopping-Cart/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;



  // const [cartCount, setCartCount] = useState(0);
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const storedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  //   setCartItems(storedCartItems);
  //   setCartCount(storedCartItems.reduce((count, item) => count + item.quantity, 0));
  // }, []);