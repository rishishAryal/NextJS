import React, { useState } from "react";
import { useRouter } from "next/router";
import { SiNike } from "react-icons/si";
import Product from "../../models/Product";
import connectDB from "@/middleware/mongoose";
import mongoose from "mongoose";
const Slug = ({ addToCart, product, variants, buyNow }) => {
  console.log(product);
  const Router = useRouter();
  const { slug } = useRouter().query;
  const [pincode, setPincode] = useState("");
  const [serviceable, setServiceable] = useState();
  const checkServiceability = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let data = await pins.json();

    if (data.includes(parseInt(pincode, 10))) {
      setServiceable(true);
    } else {
      setServiceable(false);
    }
  };
  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);

  const refreshVariants = (newsize, newcolor) => {
    let url = `http://localhost:3000/product/${variants[newcolor][newsize].slug}`;
    window.location.href = url;
  };
  const colors = [
    "red",
    "pink",
    "green",
    "yellow",
    "purple",
    "orange",
    "black",
    "white",
    "brown",
    "blue",
  ];
  const sizes = ["S", "XS", "M", "L", "XL", "XXL"];

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full  lg:h-auto  object-cover object-center rounded"
              src={`/${product.img}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <SiNike className="text-3xl"></SiNike>
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium  mb-1">
                {product.title} (
                {`${product.size} / ${
                  product.color.charAt(0).toUpperCase() + product.color.slice(1)
                }`}
                ) - {product.category}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed px-4">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes("red") &&
                    Object.keys(variants["red"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("red");
                          refreshVariants(size, "red");
                        }}
                        className={`border-2 bg-red-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "red" ? "border-black" : "border-gray-500"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("pink") &&
                    Object.keys(variants["pink"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("pink");
                          refreshVariants(size, "pink");
                        }}
                        className={`border-2 bg-pink-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "pink" ? "border-black" : "border-gray-500"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("green") &&
                    Object.keys(variants["green"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("green");
                          refreshVariants(size, "green");
                        }}
                        className={`border-2 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "green" ? "border-black" : "border-gray-500"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("yellow") &&
                    Object.keys(variants["yellow"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("yellow");
                          refreshVariants(size, "yellow");
                        }}
                        className={`border-2 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "yellow"
                            ? "border-black"
                            : "border-gray-500"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("purple") &&
                    Object.keys(variants["purple"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("purple");
                          refreshVariants(size, "purple");
                        }}
                        className={`border-2 bg-purple-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "purple"
                            ? "border-black"
                            : "border-gray-500"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("orange") &&
                    Object.keys(variants["orange"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("orange");
                          refreshVariants(size, "orange");
                        }}
                        className={`border-2 bg-orange-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "orange"
                            ? "border-black"
                            : "border-gray-500"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("black") &&
                    Object.keys(variants["black"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("black");
                          refreshVariants(size, "black");
                        }}
                        className={`border-2 bg-black rounded-full w-6 h-6 focus:outline-none ${
                          color === "black" ? "border-black" : "border-gray-500"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("white") &&
                    Object.keys(variants["white"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("white");
                          refreshVariants(size, "white");
                        }}
                        className={`border-2 bg-white rounded-full w-6 h-6 focus:outline-none ${
                          color === "white" ? "border-black" : "border-gray-500"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("brown") &&
                    Object.keys(variants["brown"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("brown");
                          refreshVariants(size, "brown");
                        }}
                        className={`border-2 bg-brown-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "brown" ? "border-black" : "border-gray-500"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("blue") &&
                    Object.keys(variants["blue"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("blue");
                          refreshVariants(size, "blue");
                        }}
                        className={`border-2 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "blue" ? "border-black" : "border-gray-500"
                        }`}
                      ></button>
                    )}
                </div> */}
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {colors.map((currentColor) => {
                    if (
                      Object.keys(variants).includes(currentColor) &&
                      Object.keys(variants[currentColor]).includes(size)
                    ) {
                      return (
                        <button
                          key={currentColor}
                          onClick={() => {
                            setColor(currentColor);
                            refreshVariants(size, currentColor);
                          }}
                          className={`border-2 bg-${currentColor}-500 rounded-full w-6 h-6 focus:outline-none ${
                            color === currentColor
                              ? "border-black"
                              : "border-gray-500"
                          }`}
                        ></button>
                      );
                    }
                    return null;
                  })}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => refreshVariants(e.target.value, color)}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                    >
                      {sizes.map((currentSize) => {
                        if (
                          Object.keys(variants[color]).includes(currentSize)
                        ) {
                          return (
                            <option key={currentSize} value={currentSize}>
                              {currentSize}
                            </option>
                          );
                        }
                        return null;
                      })}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button
                  onClick={() => {
                    addToCart(
                      slug,
                      1,
                      product.price,
                      `${product.title} ${"("} ${product.size} / ${
                        product.color.charAt(0).toUpperCase() +
                        product.color.slice(1)
                      }${")"}`,
                      size,
                      color
                    );
                  }}
                  className="flex text-sm ml-4 md:ml-16 text-white bg-pink-500 border-0 py-2 px-2 lg:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => {
                    buyNow(
                      slug,
                      1,
                      product.price,
                      `${product.title} ${"("} ${product.size} / ${
                        product.color.charAt(0).toUpperCase() +
                        product.color.slice(1)
                      }${")"}`,
                      size,
                      color
                    );
                  }}
                  className="flex ml-3 text-sm text-white bg-pink-500 border-0 py-2 px-2 lg:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Buy Now
                </button>
                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button> */}
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm">
                <input
                  type="text "
                  className="px-2 border-2 border-pink-300 rounded-md"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button
                  onClick={checkServiceability}
                  className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Check
                </button>
              </div>
              {serviceable === false && (
                <div className="text-red-600 text-sm mt-2">
                  We do not deliver to this pincode yet!
                </div>
              )}
              {serviceable === true && (
                <div className="text-green-600 text-sm mt-2">
                  We deliver to this pincode
                </div>
              )}
            </div>
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
    let product = await Product.findOne({ slug: context.query.slug });
    let variants = await Product.find({ title: product.title });
    let colorSizeSlug = {};
    for (let item of variants) {
      if (Object.keys(colorSizeSlug).includes(item.color)) {
        colorSizeSlug[item.color][item.size] = { slug: item.slug };
      } else {
        colorSizeSlug[item.color] = {};
        colorSizeSlug[item.color][item.size] = { slug: item.slug };
      }
    }

    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
        variants: JSON.parse(JSON.stringify(colorSizeSlug)),
      },
    };
  } catch (e) {
    console.log(e);
  }
};
export default Slug;
