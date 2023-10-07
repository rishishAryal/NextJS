import React from "react";

const Hero = () => {
  return (
    <div>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/4  md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/home.webp"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Unleashing Style in Syntax</h1>
      <p className="mb-8 leading-relaxed">Welcome to Codeswear – the nexus of programming and panache. We believe that a coder's passion isn't just confined to screens and scripts. It's a lifestyle, an identity, and most certainly, a fashion statement. At Codeswear, we've crafted apparel that echoes the elegance of clean code with the suave style of contemporary fashion. Step into a world where semicolons meet stitches, and where every line of fabric tells a story as captivating as every line of code. Welcome to a wardrobe revolution – where coding meets couture.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Hero;
