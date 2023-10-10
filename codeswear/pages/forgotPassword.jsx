import React from "react";
import Link from "next/link";
const forgotPassword = () => {
  return (
    <div>
      <div class="min-h-screen  bg-blue-50 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 w-full  sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0  bg-gradient-to-r from-pink-300 to-pink-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class=" relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-2xl text-center font-semibold">
                 Forget Password
                </h1>

                <p className="text-center  mt-1 ">
                  Or
                  <Link href={"/login"} className="text-md text-pink-600">
                    {" "}
                    Login to your account
                  </Link>
                </p>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                
                  <div class="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="email"
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      for="email"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  

                  <div class="relative">
                    <button class="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-5 py-1">
                     Continue
                    </button>
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

export default forgotPassword;
