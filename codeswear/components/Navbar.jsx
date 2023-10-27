import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineLogin,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsFillBagFill, BsListNested } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [jwtToken, setJwtToken] = useState();
  const Router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setJwtToken(localStorage.getItem("token"));
    }
  });
  const logout = () => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      toast.success("Logged Out", {
        position: "top-left",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        Router.push("/");
      }, 2000);
    }
  };
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
    <div className="flex shadow-md  mt-1 flex-col md:flex-row md:justify-start  justify-center items-center sticky top-0 bg-white z-10">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="logo  ">
        
          <Link href={"/"} className="">
            <Image
              src="/logo.png"
              className=" mr-[200px] md:mr-0"
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

      <div className="cart absolute gap-1 right-0 mx-5 top-5 flex justify-center items-center">
        {!jwtToken ? (
          <Link href={"/login"}>
            <button className="text-white bg-pink-500 hover:bg-600-pink cursor-pointer  px-2 py-1 rounded">
              Login
            </button>
          </Link>
        ) : (
          <button
            onClick={() => {
              logout();
            }}
            className="  text-white bg-pink-500 hover:bg-600-pink cursor-pointer  px-2 py-1 rounded"
          >
            Logout
          </button>
        )}

        <AiOutlineShoppingCart
          onClick={toogleCart}
          className="text-3xl cursor-pointer text-pink-500 hover:text-pink-600 "
        />
      </div>

      <div
        ref={ref}
        className={`sideCart absolute h-[100vh] top-0 right-0  bg-pink-100 px-6 w-[20rem] py-10 transform transition-transform 
        ${Object.keys(cart).length === 0 ? "translate-x-full" : "translate-x-0"}
        translate-x-0 `}
      >
        <h1 className="font-bold text-xl text-center">Your Cart</h1>
        <span onClick={toogleCart} className="absolute top-5 right-2">
          <AiFillCloseCircle className="text-2xl cursor-pointer text-pink-500"></AiFillCloseCircle>
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && (
            <div className="text-center mt-9 font-bold">Cart is Empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-3">
                  <div className="font-semibold w-2/3">{cart[k].name}</div>
                  <div className=" w-1/3 flex text-xl font-semibold items-center justify-evenly">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="text-pink-500 cursor-pointer"
                    />
                    {cart[k].qty}
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="text-pink-500 cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
          <span className="inline-block">Subtotal :$ {subTotal}</span>
        </ol>
        {Object.keys(cart).length > 0 && (
          <div className="flex  gap-3 mt-2 items-center ">
            <button
              onClick={() => {
                clearCart();
                toast.success("Cart Cleared", {
                  position: "top-right",
                  autoClose: 500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }}
              className="flex w-fit  text-center   text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded"
            >
              Clear Cart
            </button>

            <Link href={"/checkout"}>
              <button className="flex w-fit  text-center   text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded">
                <BsFillBagFill className="m-1" /> Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
