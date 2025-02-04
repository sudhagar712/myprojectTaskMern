import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/products/categories"
        );
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:9000/products", {
          params: {
            search: searchQuery,
            category,
            minPrice,
            maxPrice,
            page,
            limit: 5, 
          },
        });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      }
    };

    fetchProducts();
  }, [searchQuery, category, minPrice, maxPrice, page]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    if (name === "minPrice") {
      setMinPrice(value);
    } else if (name === "maxPrice") {
      setMaxPrice(value);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Products</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Search Input */}
      <div className="mb-4 p-3 md:p-2">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search products..."
          className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 shadow-lg border-2 border-cyan-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-4 p-3 justify-between">
        <select
          onChange={handleCategoryChange}
          value={category}
          className="p-2 shadow-lg border-2 border-cyan-200 rounded-md w-full sm:w-1/3 lg:w-1/4"
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="minPrice"
          value={minPrice}
          onChange={handlePriceRangeChange}
          placeholder="Min Price"
          className="p-2  shadow-lg border-2 border-cyan-200 rounded-md w-full sm:w-1/3 lg:w-1/4"
        />

        <input
          type="number"
          name="maxPrice"
          value={maxPrice}
          onChange={handlePriceRangeChange}
          placeholder="Max Price"
          className="p-2 shadow-lg border-2 border-cyan-200 rounded-md w-full sm:w-1/3 lg:w-1/4"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols- sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 p-4">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Link key={index} to={`/product/${product._id}`}>
              <ProductsCard product={product} />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center">No products found</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 my-4">
        <button
          onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-all duration-300 ease-in-out"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() =>
            handlePageChange(page < totalPages ? page + 1 : totalPages)
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-all duration-300 ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
