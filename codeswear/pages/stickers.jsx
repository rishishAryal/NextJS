import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Product from "../models/Product";
import connectDB from "@/middleware/mongoose";
import mongoose from "mongoose";
const Stickers = ({ products }) => {
  const [items, setItems] = useState(products);
 
  console.log(items);

  // console.log(items);
  const colorMapping = {
    red: "bg-red-500",
    pink: "bg-pink-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    black: "bg-black",
    white: "bg-white",
    brown: "bg-brown-500",
    blue: "bg-blue-500",
  };

  return (
    <div>
     
      
        
   
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(items).length===0 && <div className="text-center w-full">All the stickers are out of stock. New stock comming soon</div>}
            {Object.keys(items).map((i) => {
              return (
                <div
                  key={items[i]._id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full "
                >
                  <a className="block relative   rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="h-[30vh]m-auto md:m-0  w-full   md:h-[36vh]   block"
                      src={items[i].img}
                    />
                  </a>
                  <div className=" mt-4 mx-[1.40rem] text-center md:text-left ">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {items[i].category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {items[i].title}
                    </h2>
                    <div className=" ">
                      <div>
                        <p className="mt-1">${items[i].price}</p>
                        {/* <div className="mt-2">
                          {items[i].size.map((size) => {
                            return (
                              <span
                                key={size}
                                className="text-black text-sm border p-[2px] text-center   border-gray-400 font-bold mb-1 inline-block mr-1"
                              >
                                {size}
                              </span>
                            );
                          })}
                        </div> */}
                        <div className="md:flex items-center justify-between">
                          {" "}
                          {/* <div className="mt-1">
                            {Object.keys(colorMapping).map((color) => {
                              if (
                                items[i].color
                                  .map((c) => c.toLowerCase())
                                  .includes(color)
                              ) {
                                return (
                                  <button
                                    key={color}
                                    className={`border-2 border-gray-300 mr-1 ${colorMapping[color]} rounded-full w-6 h-6 focus:outline-none`}
                                  ></button>
                                );
                              }
                              return null;
                            })}
                          </div> */}
                          <Link
                            href={`/product/${items[i].slug}`}
                            className="text-white  bg-pink-500 hover:bg-pink-600 transition-all focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 m-auto md:mx-0  rounded-md text-md px-4 py-1 mt-2 block w-fit text-center   "
                          >
                            See More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const url = process.env.MONGODB_URI;
  if (!mongoose.connection.readyState) {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  try {
    let products = await Product.find({ category: "sticker" });
    let stickers = {};

    for (let item of products) {
        // Since we aren't using color or size, we'll just check if the item exists
        if (!(item.title in stickers)) {
            stickers[item.title] = JSON.parse(JSON.stringify(item));
        }
    }
      console.log(typeof(stickers));
    return {
        props: {
            products: JSON.parse(JSON.stringify(stickers)),
        },
    };
} catch (e) {
    console.log(e);
}

};

export default Stickers;
