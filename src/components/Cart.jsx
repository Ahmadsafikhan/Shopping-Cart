/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const grandTotal = totalPrice.toFixed(2)
  console.log(cartItems);

  return (
    <div className="container mx-auto pt-[5rem]">
      <h1 className="text-center text-2xl font-semibold mb-4">Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="flex justify-center">
      <p className="font-semibold text-black mr-1">Total Price: </p>
      <span>${grandTotal}</span>
      </div>
    </div>
  );
};

export default Cart;
