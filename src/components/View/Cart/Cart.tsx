import { FaCartArrowDown } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CartCard from "./CartCard";
import LoadingPage from "@/app/loading";
import { useGetMyCartQuery } from "@/redux/api/cartApi";
const Cart = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetMyCartQuery(undefined!);

  if (isLoading) {
    return <p>...</p>;
  }

  const cartData: any = data?.data?.items;

  console.log("cartData:", cartData);

  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              <div className="cursor-pointer">
                <div className="relative">
                  <div className="t-0 absolute left-5">
                    <p className="flex size-1 items-center justify-center rounded-full bg-primary p-3 text-xs text-white">
                      {cartData ? cartData?.length : 0}
                    </p>
                  </div>
                  <FaCartArrowDown className="text-2xl" />
                </div>
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden ">
                  <CartCard items={cartData} />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default Cart;
