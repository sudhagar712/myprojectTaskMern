import React from "react";

const ProductsCard = ({ product }) => {
  return (
    <div className="bg-white p-4  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-64 object-fill rounded-md"
        src={product.imageUrl}
        alt={product.name}
      />
      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-lg font-bold text-green-500 mt-4">{product.price}</p>
     
    </div>
  );
};

export default ProductsCard;
