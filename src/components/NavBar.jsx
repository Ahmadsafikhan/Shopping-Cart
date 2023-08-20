// import { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  // const dispatch = useDispatch()

  return (
    <div className="bg-white-900 p-4 flex justify-between items-center shadow-lg">
      <Link className="text-xl font-semibold" to={"/Shopping-Cart"}>
        My Online Store
      </Link>
      <Link className=" cursor-pointer" to={"/Shopping-Cart/cart"}>
      <FontAwesomeIcon icon="shopping-cart" />
        <span className="bg-red-500 rounded-full px-2 py-1 text-sm text-white ml-1">
          {cartQuantity}
        </span>
      </Link>
    </div>
  );
};

export default NavBar;
