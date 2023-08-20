import { useParams } from "react-router-dom";
import Container from "./common/Container";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
   // const [cartCount, setCartCount] = useState(0);
  const { id } = useParams();



  const handleCart = () => {
    dispatch(addItem(product));
    console.log(product);
  };

  useEffect(() => {
     // Fetch product details from the fake API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-8 p-4">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="pr-0 md:pr-8 mb-[1.5rem] md:mb-0">
          <img src={product.image} alt={product.title} className="w-full md:w-[300px] max-w-[16rem] mx-auto md:mx-0" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <div className="mb-4">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded mr-2"
              onClick={handleCart}
            >
              Add to Cart
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
              Wishlist
            </button>
          </div>
          <p className="mb-4">{product.description}</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
