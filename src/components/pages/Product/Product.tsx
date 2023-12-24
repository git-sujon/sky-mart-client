"use client";
import LoadingPage from "@/app/loading";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import ProductCard from "./ProductCard";
import { IProduct } from "@/types/product";

const Product = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined!);

  if (isLoading) {
    return <LoadingPage />;
  }



  return (
    <div className="mt-5" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {products.map((product:IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
