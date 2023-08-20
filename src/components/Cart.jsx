/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import CartItem from './CartItem'; // Import your CartItem component

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center text-2xl font-semibold mb-4">Cart</h1>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;

