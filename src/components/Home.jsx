import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Container from "./common/Container";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Failed to fetch data", error));
  }, []);

  return (
    <Container className=" p-4">
      <h1 className="text-4xl font-semibold mb-8 text-center">Welcome to Fake Store</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.map((product) => (
          <ProductCard key={product.id} className="p-4 border rounded-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <div className="flex justify-between items-center absolute left-5 right-5 bottom-5">

            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link
              className=" text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              to={`/details/${product.id}`}
            >
              View Details
            </Link>
              </div>
          </ProductCard>
        ))}
      </div>
    </Container>
  );
};

export default Home;
