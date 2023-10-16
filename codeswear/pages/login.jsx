import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import forgotPassword from "./forgotPassword";
const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming email and password are defined somewhere in your component's state.
    const dat = { email, password };

    try {
      const res = await axios.post("http://localhost:3000/api/login", dat);
      const data = res.data; // No need to await res.data
      console.log(data);

      if (data.message === "User not found" && data.success === false) {
        toast.error(`${data.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (data.message === "Wrong Credentials" && data.success === false) {
        toast.error(`${data.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (data.success === true) {
        toast.success(`${data.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* <!-- component --> */}
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
      <div className="min-h-screen  bg-blue-50 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 w-full  sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0  bg-gradient-to-r from-pink-300 to-pink-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className=" relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl text-center font-semibold">
                  Login To Your Account
                </h1>

                <p className="text-center  mt-1 ">
                  Or
                  <Link href={"/signup"} className="text-md text-pink-600">
                    {" "}
                    Create a new Account
                  </Link>
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative flex gap-2">
                    <label htmlFor="remember" className="text-sm">
                      Remember Me
                    </label>
                    <input type="checkbox" name="remember" id="remember" />
                  </div>
                  <div className="relative flex justify-between items-center gap-1">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-5 py-1"
                    >
                      Login
                    </button>
                    <Link
                      href="/forgotPassword"
                      className="text-sm text-red-700"
                    >
                      Forget Password?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
