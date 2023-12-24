"use client";
import LoadingPage from "@/app/loading";
import SolidButton from "@/components/UI/Button/SolidButton";
import { getUserInfo } from "@/helper/getUserInfo";
import { useAddToCartMutation } from "@/redux/api/cartApi";

import { useGetSingleProductQuery } from "@/redux/api/productApi";
import { IVariations } from "@/types/product";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { JwtPayload } from "jwt-decode";
import { IJwtDecoded } from "@/types/user";

const ProductDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetSingleProductQuery(id);
  const [addToCart] = useAddToCartMutation();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  if (isLoading) {
    return <LoadingPage />;
  }

  const product = data?.data;

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    const { _id } = getUserInfo() as IJwtDecoded;

    if (selectedColor && selectedSize) {
      if (_id) {
        const response: any = await addToCart({
          userId: _id,
          productId: product._id,
          quantity,
          title:product.title,
          color: selectedColor,
          size: selectedSize,
        });

        if (response?.data?.data) {
          toast.success("Add to Cart");
        }
      } else {
        toast.error("Please login first");
        router.push("/login");
      }
    } else {
      toast.error("Please Select Color and Size first");
    }
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
              {product.variations.map((variation: IVariations) => (
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
              {product.variations.map((variation: IVariations) => (
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

          <div className="mb-4">
            <p className="text-gray-600">Select Quantity:</p>
            <div className="flex items-center space-x-2">
              <button
                className="px-3.5 py-1 border border-gray-300  bg-slate-100"
                onClick={handleDecrement}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-10 h-8 text-center border border-gray-300"
              />
              <button
                className="px-3 py-1 border border-gray-300 bg-slate-200"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>

          <SolidButton name="Add to Cart" action={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
