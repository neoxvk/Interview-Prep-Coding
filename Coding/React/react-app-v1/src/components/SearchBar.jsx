import React, { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounced value of the search query
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      fetchProducts(debouncedQuery);
    } else {
      setProducts([]); // Clear results if input is empty
    }
  }, [debouncedQuery]);

  const fetchProducts = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      const filteredProducts = response.data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    } catch (err) {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  const showProduct = (id) => {
    alert(id)
  }

  return (
    <div className="bg-inherit p-12">
      <h2 className="text-bold text-gray-700 p-1">Product Search</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mx-auto max-w-lg rounded-md p-2 shadow-md border-none ring-1 focus:ring-indigo-500"
      />
      {loading && (
        <p className="animate-bounce p-2 mt-2 text-white">Loading...</p>
      )}
      {error && <p className="text-red-700">{error}</p>}
      <ul className="bg-gray-50 max-w-lg mt-4 p-2 rounded-sm border-collapse shadow-lg">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-2 border-2"
            onClick={() => showProduct(product.id)}>
            <strong>{product.title}</strong> -{" "}
            <span className="text-green-700 font-semibold">
              ${product.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

