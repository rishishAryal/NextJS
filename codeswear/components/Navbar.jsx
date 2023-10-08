import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

const Navbar = () => {
  const toogleCart = () => {
    const classList = ref.current.classList;
    if (classList.contains("translate-x-full")) {
      classList.remove("translate-x-full");
      classList.add("translate-x-0");
    } else {
      classList.add("translate-x-full");
      classList.remove("translate-x-0");
    }
  };

  const ref = useRef();
  return (
    <div className="flex shadow-md mt-1 flex-col md:flex-row md:justify-start  justify-center items-center">
      <div className="logo">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            className="mx-5"
            width={300}
            height={40}
            alt="logo"
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
            <li>Stickers</li>
          </Link>
        </ul>
      </div>

      <div onClick={toogleCart} className="cart absolute right-0 mx-5 top-5">
        <AiOutlineShoppingCart className="text-3xl cursor-pointer text-pink-500 hover:text-pink-600 " />
      </div>

      <div
        ref={ref}
        className="sideCart absolute h-full top-0 right-0 z-10 bg-pink-100 px-6 w-[20rem] py-10 transform transition-transform translate-x-full "
      >
        <h1 className="font-bold text-xl text-center">Your Cart</h1>
        <span onClick={toogleCart} className="absolute top-5 right-2">
          <AiFillCloseCircle className="text-2xl cursor-pointer text-pink-500"></AiFillCloseCircle>
        </span>
        <ul className="list-decimal font-semibold">
          <li>
            <div className="item flex my-3">
              <div className="font-semibold w-2/3" F>
                Tshirt fashion Meets Function
              </div>
              <div className=" w-1/3 flex text-xl font-semibold items-center justify-evenly">
                <AiFillMinusCircle className="text-pink-500 cursor-pointer" />1{" "}
                <AiFillPlusCircle className="text-pink-500 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="font-semibold w-2/3" F>
                Tshirt fashion Meets Function
              </div>
              <div className=" w-1/3 flex text-xl font-semibold items-center justify-evenly">
                <AiFillMinusCircle className="text-pink-500 cursor-pointer" />1{" "}
                <AiFillPlusCircle className="text-pink-500 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="font-semibold w-2/3" F>
                Tshirt fashion Meets Function
              </div>
              <div className=" w-1/3 flex text-xl font-semibold items-center justify-evenly">
                <AiFillMinusCircle className="text-pink-500 cursor-pointer" />1{" "}
                <AiFillPlusCircle className="text-pink-500 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="font-semibold w-2/3" F>
                Tshirt fashion Meets Function
              </div>
              <div className=" w-1/3 flex text-xl font-semibold items-center justify-evenly">
                <AiFillMinusCircle className="text-pink-500 cursor-pointer" />1{" "}
                <AiFillPlusCircle className="text-pink-500 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="font-semibold w-2/3" F>
                Tshirt fashion Meets Function
              </div>
              <div className=" w-1/3 flex text-xl font-semibold items-center justify-evenly">
                <AiFillMinusCircle className="text-pink-500 cursor-pointer" />1{" "}
                <AiFillPlusCircle className="text-pink-500 cursor-pointer" />
              </div>
            </div>
          </li>
        </ul>
        <button className="flex w-fit  text-center  mt-10 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
          <BsFillBagFill className="m-1" /> Checkout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
