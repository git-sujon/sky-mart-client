import { FaCartArrowDown } from "react-icons/fa";
const CartButton = ({ action, quantity }: { action: any, quantity:number }) => {
  return (
    <div className="cursor-pointer">
      <div className="relative">
        <div className="t-0 absolute left-5">
          <p className="flex size-1 items-center justify-center rounded-full bg-primary p-3 text-xs text-white">
            {quantity ? quantity : 0}
          </p>
        </div>
        <FaCartArrowDown className="text-2xl" />
      </div>
    </div>
  );
};

export default CartButton;
