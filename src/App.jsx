import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
// import { useEffect, useState } from "react";

function App() {
  // const [cartCount, setCartCount] = useState(0);
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const storedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  //   setCartItems(storedCartItems);
  //   setCartCount(storedCartItems.reduce((count, item) => count + item.quantity, 0));
  // }, []);

  // const updateCartItem = (item, quantityChange) => {
  //   const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

  //   if (existingItemIndex !== -1) {
  //     const updatedCartItems = [...cartItems];
  //     updatedCartItems[existingItemIndex].quantity += quantityChange;
  //     if (updatedCartItems[existingItemIndex].quantity === 0) {
  //       updatedCartItems.splice(existingItemIndex, 1);
  //     }
  //     setCartItems(updatedCartItems);
  //     setCartCount(cartCount + quantityChange);
  //     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  //   } else if (quantityChange > 0) {
  //     const newCartItem = { ...item, quantity: 1 };
  //     setCartItems([...cartItems, newCartItem]);
  //     setCartCount(cartCount + 1);
  //     localStorage.setItem("cartItems", JSON.stringify([...cartItems, newCartItem]));
  //   }
  // };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductDetail  />}  />
        <Route path="/cart" element={<Cart  />} />
        
      </Routes>
    </>
  );
}

export default App;
