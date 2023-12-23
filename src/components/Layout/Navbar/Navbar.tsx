import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import SolidButton from "../../UI/Button/SolidButton";
import OutlinedButton from "../../UI/Button/OutlinedButton";
import CartButton from "../../UI/Button/CartButton";
const Navbar = () => {
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
              <SolidButton name="Login" url="/" />
              <CartButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
