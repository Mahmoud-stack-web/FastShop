import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products } = useAppContext();
  const productsPerPage = 10;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginatedProducts = products.slice(0, page * productsPerPage);

  const handleLoadMore = () => setPage((prev) => prev + 1);
  const handleShowLess = () => setPage(1);

  return (
    <div className="flex flex-col items-center pt-14 px-4">
      <p className="text-2xl font-medium text-left w-full max-w-7xl">
        Popular products
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full max-w-7xl">
        {paginatedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="flex gap-4 mt-4 mb-10">
        {page < totalPages && (
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 border rounded text-gray-500/70 hover:bg-slate-50 transition"
          >
            See more products
          </button>
        )}
        {page > 1 && (
          <button
            onClick={handleShowLess}
            className="px-6 py-2 border rounded text-gray-500/70 hover:bg-slate-50 transition"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
