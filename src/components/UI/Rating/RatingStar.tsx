import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

const RatingStar = () => {
  return (
    <div className="flex items-center gap-x-1 text-xl text-amber-400">
      <IoMdStar />
      <IoMdStar />
      <IoMdStar />
      <IoMdStar />
      <IoMdStarHalf />
    </div>
  );
};

export default RatingStar;
