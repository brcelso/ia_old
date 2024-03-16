import React from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Product = ({ product }) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition">
      <div className="flex items-end justify-end h-56 w-full bg-cover relative">
        <Image
          src={product.image}
          alt={product.name}
          className="absolute z-0"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
        <button className="absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500">
          <ShoppingCartIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{product.name}</h3>
        <span className="text-gray-500 mt-2">${product.price}</span>
      </div>
    </div>
  );
};

export default Product;