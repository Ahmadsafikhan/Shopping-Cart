import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Container from "./common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Failed to fetch data", error));
  }, []);

  const productsToShow = data.slice((currentPage - 1) * perPage, currentPage * perPage);
  const totalPages = Math.ceil(data.length / perPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
  
    <Container className=" p-4">
    <div className="pt-[5rem]">
      <h1 className="text-4xl font-semibold mb-8 text-center">Welcome to Fake Store</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {productsToShow.map((product) => (
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
              to={`/Shopping-Cart/details/${product.id}`}
            >
              View Details
            </Link>
              </div>
          </ProductCard>
        ))}
      </div>
      <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon="arrow-left" />
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
             <FontAwesomeIcon icon="arrow-right" />
          </button>
        </div>
      </div>
    </Container>
 
  );
};

export default Home;
