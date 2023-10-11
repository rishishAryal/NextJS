import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
const Stickers = ({ products }) => {

  const [items, setItems] = useState(products);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items
              .filter((item) => item.category === "sticker")
              .map((i) => {
                return (
                  <div key={i._id} className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                    <a className="block relative   rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="h-[30vh]m-auto md:m-0    md:h-[36vh]   block"
                        src="/tshirt.webp"
                      />
                    </a>
                    <div className=" mt-4 mx-[1.40rem] text-center md:text-left ">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {i.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {i.title}
                      </h2>
                      <div className=" ">
                        <div>
                          <p className="mt-1">${i.price}</p>
                          {/* <p className="mt-1">{i.size}</p> */}
                          {/* <p className="mt-1">{i.color}</p> */}
                        </div>
                      </div>
                      <Link
                        href={`/product/${i.slug}`}
                        className="text-white bg-pink-500 hover:bg-pink-600 transition-all focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 m-auto md:mx-0  rounded-md text-md px-4 py-1 mt-2 block w-fit text-center   "
                      >
                        Buy Now
                      </Link>
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
  const res = await axios.get("http://localhost:3000/api/getProducts");
  const products = await res.data;
  return { props: { products } };
};

export default Stickers;
