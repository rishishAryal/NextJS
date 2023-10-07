import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex shadow-md mt-1 flex-col md:flex-row md:justify-start  justify-center items-center">
      <div className="logo">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            className="mx-5"
            width={200}
            height={40}
            alt=""
            srcset=""
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex space-x-5 text-black font-bold text-xl  items-center">
          <Link
            href={"/tshirts"}
            className="p-[5.5px]    hover:text-gray-50 hover:bg-pink-500 transition-all  rounded-sm"
          >
            <li>Tshirt</li>
          </Link>
          <Link
            href={"/hoodies"}
            className="p-[5.5px]  rounded-sm  hover:text-gray-50 hover:bg-pink-500 transition-all"
          >
            <li>Hoddie</li>
          </Link>
          <Link
            href={"/mugs"}
            className="p-[5.5px]  rounded-sm hover:text-gray-50 hover:bg-pink-500 transition-all"
          >
            <li>Mugs</li>
          </Link>
          <Link
            href={"/stickers"}
            className="p-[5.5px]  rounded-sm hover:text-gray-50 hover:bg-pink-500 transition-all"
          >
            <li>Sticker</li>
          </Link>
        </ul>
      </div>

      <div className="cart absolute right-0 mx-5 top-2">
        <AiOutlineShoppingCart className="text-3xl cursor-pointer text-red-500 hover:text-red-400 " />
      </div>
    </div>
  );
};

export default Navbar;
