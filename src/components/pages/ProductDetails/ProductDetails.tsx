"use client";
import LoadingPage from "@/app/loading";
import SolidButton from "@/components/UI/Button/SolidButton";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import Image from "next/image";
import React, { useState } from "react";
const ProductDetails = ({ id }: { id: string }) => {
  const { data: product, isLoading } = useGetSingleProductQuery(id);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  if (isLoading) {
    return <LoadingPage />;
  }
  console.log("product:", product);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    console.log(selectedColor, selectedSize);
  };
  return (
    <div className="max-w-6xl mx-auto mt-8 min-h-svh">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2   ">
          <Image
            className=""
            src={
              "https://images.thdstatic.com/productImages/46f68947-b9e0-4e64-b8fa-bb2a8ace3a40/svn/the-home-depot-moving-boxes-mbx-64_600.jpg"
            }
            alt={product.title}
            width={300}
            height={266}
          />
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-dark">
            {product.title}
          </h2>

          <div className="mb-4">
            <p className="text-gray-600">Select Color:</p>
            <div className="flex space-x-2">
              {product.variations.map((variation) => (
                <div
                  key={variation._id}
                  onClick={() => handleColorChange(variation.color)}
                  className={`w-8 h-8 rounded-full cursor-pointer border ${
                    selectedColor === variation.color
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: variation.color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-600">Select Size:</p>
            <div className="flex space-x-2">
              {product.variations.map((variation) => (
                <button
                  key={variation._id}
                  onClick={() => handleSizeChange(variation.size)}
                  className={`px-4 py-2 border ${
                    selectedSize === variation.size
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                >
                  {variation.size}
                </button>
              ))}
            </div>
          </div>

          <SolidButton name="Add to Cart" action={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
