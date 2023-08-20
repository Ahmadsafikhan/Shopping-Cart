import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css"
// import { useEffect, useState } from "react";
library.add(faShoppingCart);

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Shopping-Cart/" element={<Home />} />
        <Route path="/Shopping-Cart/details/:id" element={<ProductDetail />} />
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