"use client";
import { useSearchParams } from "next/navigation"; // Import the hook to read query params
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import { useState, useEffect } from "react";

const AllProducts = () => {
  const { products } = useAppContext(); // Assume this fetches all products
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category"); // Get the category from URL

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "All"
  );

  // Filter the products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    // Update selected category when the category query changes
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">All products</p>
          <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 flex-wrap mt-8">
          {[
            "All",
            "Headphone",
            "Earphone",
            "Laptop",
            "Smartphone",
            "Camera",
            "Watch",
            "Accessories",
          ].map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                // Update URL to reflect the category selection
                window.history.pushState(
                  null,
                  "",
                  `/all-products?category=${category}`
                );
              }}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-white text-gray-800 border-gray-300"
              } hover:shadow transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
