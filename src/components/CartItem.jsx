/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';

const CartItem = ({ item }) => {
    console.log(item)
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item));
  };

  const handleAdd = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="border rounded-lg p-4 mb-4 flex items-center">
      <img className="w-20 h-20 mr-4" src={item.image} alt={item.title} />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={handleRemove}
        >
          -
        </button>
        <p className="text-lg font-semibold">{item.quantity}</p>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
