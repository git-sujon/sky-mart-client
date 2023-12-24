"use client";

import Link from "next/link";
import SolidButton from "../../UI/Button/SolidButton";
import CartButton from "../../UI/Button/CartButton";
import { useGetMyCartQuery } from "@/redux/api/cartApi";
import LoadingPage from "@/app/loading";
import { getUserInfo } from "@/helper/getUserInfo";
import { removeUserInfo } from "@/utils/localStorage";
import { authKey } from "@/constants/storageKeys";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IJwtDecoded } from "@/types/user";
const Navbar = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const { data, isLoading } = useGetMyCartQuery(undefined!);
  const [totalCart, setTotalCart] = useState(0);
  const router = useRouter();
  const { _id } = getUserInfo() as IJwtDecoded;
  useEffect(() => {
    if (_id) {
      setIsUserLogged(true);
    }
  }, [_id]);

  const cartData: any = data?.data?.items;

  useEffect(() => {
    if (isLoading) {
    }
    setTotalCart(cartData?.length);
  }, [cartData, setTotalCart, isLoading]);

  if (isUserLogged && isLoading) {
    return <>...</>;
  }

  const cartOpener = () => {};

  const logOutHandler = () => {
    setIsUserLogged(false);
    removeUserInfo(authKey);
    router.push("/login");
  };

  return (
    <header className="bg-white border-b ">
      <div className="mx-auto max-w-screen-2xl px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between ">
          {/* Brand Name  */}

          <div className="">
            <Link className="block text-primary font-black text-2xl" href="/">
              Sky Mart
            </Link>
          </div>

          {/* Menus  */}

          <div className="">
            <nav aria-label="Global">
              <ul className="flex items-center gap-x-6 text-sm">
                <li>
                  <Link
                    className="text-gray-600 transition font-semibold text-md hover:text-primary/75"
                    href="/"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* search and actions  */}

          <div className="">
            <div className="flex justify-center items-center gap-x-4 ">
              {isUserLogged ? (
                <SolidButton name="Logout" action={logOutHandler} />
              ) : (
                <SolidButton name="Login" url="/login" />
              )}

              <CartButton action={""} quantity={totalCart} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
