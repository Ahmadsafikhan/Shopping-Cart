// import { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  // const dispatch = useDispatch()

  return (
    <div className="bg-white-900 p-4 flex justify-between items-center shadow-lg">
      <Link className="text-xl font-semibold" to={"/"}>
        My Online Store
      </Link>
      <Link className=" cursor-pointer" to={"/cart"}>
        Cart
        <span className="bg-red-500 rounded-full px-2 py-1 text-sm">
          {cartQuantity}
        </span>
      </Link>
    </div>
  );
};

export default NavBar;
