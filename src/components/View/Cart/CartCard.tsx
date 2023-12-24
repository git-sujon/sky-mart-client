import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartCard = ({ items }: { items: any }) => {
  return (
    <div
      className="relative w-screen max-w-sm border border-gray-600 bg-green-100 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
    >
      {/* <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> */}

      <div className="mt-4 space-y-2">
        <ul className="space-y-2">
          {items.map((item: any) => (
            <li
              key={item.id}
              className="flex items-center justify-between border border-slate-300 p-2"
            >
              <div className="  flex items-center gap-4">
                <Image
                  className=""
                  src={
                    "https://images.thdstatic.com/productImages/46f68947-b9e0-4e64-b8fa-bb2a8ace3a40/svn/the-home-depot-moving-boxes-mbx-64_600.jpg"
                  }
                  alt={"s"}
                  width={64}
                  height={64}
                />

                <div>
                  <h3 className="text-sm text-gray-900">{item?.title}</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">{item?.size}</dd>
                    </div>

                    <div className="flex items-center gap-x-1">
                      <dt className="inline">Color:</dt>
                      <dd
                        className="inline-block size-4 "
                        style={{ backgroundColor: item?.color }}
                      ></dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div>
                <p>{item?.quantity}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href="/"
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </Link>

          <Link
            href="/"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
