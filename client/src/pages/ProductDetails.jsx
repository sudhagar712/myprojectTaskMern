import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-4 mt-[90px]">
      {error && <p className="text-red-500">{error}</p>}

      <Link to="/">
        <button className="bg-blue-500 p-3 text-white">Back to Home</button>
      </Link>

      {product ? (
        <div className=" mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-[700px] h-[500px] object-fill rounded-md"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="text-lg font-bold text-green-500 mt-4">
              ${product.price}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
