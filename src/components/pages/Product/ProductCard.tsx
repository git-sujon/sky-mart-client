import SolidButton from "@/components/UI/Button/SolidButton";
import RatingStar from "@/components/UI/Rating/RatingStar";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }:{product:any}) => {
  return (
    <Link href={"/"} className="max-w-md mx-auto transform overflow-hidden   bg-slate-950 shadow-md duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      <Image
        src={
          "https://images.thdstatic.com/productImages/46f68947-b9e0-4e64-b8fa-bb2a8ace3a40/svn/the-home-depot-moving-boxes-mbx-64_600.jpg"
        }
        alt={product.title}
        width={300}
        height={150}
      />

      <div className="p-3">
        <h2 className="text-xl font-bold text-white">{product.title}</h2>

        <div className="mt-2">
          {/* <ul className="list-disc ml-6">
            {product.variations.map((variation) => (
              <li key={variation._id} className="text-gray-700">
                {`${variation.color} - ${variation.size}`}
              </li>
            ))}
          </ul> */}
          <RatingStar />
          <p className="text-secondary text-xl font-bold">
            $<span className=" text-xl font-black">250</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
