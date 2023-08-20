// eslint-disable-next-line react/prop-types
const ProductCard = ({ children }) => {
  return (
   
      <div className="bg-white p-4 shadow-md rounded-md w-[20rem] h-[25rem] relative text-center" >
        {children}
      </div>

  );
};

export default ProductCard;
