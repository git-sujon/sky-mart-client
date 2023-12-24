import ProductDetails from "@/components/pages/ProductDetails/ProductDetails";

const ProductDetailsPage = ({ params }: { params: { id: string[] } }) => {
  const id = params?.id[0];

  return (
    <div className="">
      <ProductDetails id={id} />
    </div>
  );
};

export default ProductDetailsPage;
