// write product card here

import React from "react";
import ViewProductButton from "../components/button"; // Corrected path
;

const Productcard = () => {

  const productImage = "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large_2x.jpg";
  const productName = "iphone 16";
  const productPrice = "$799.99";

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center space-y-3">
      <img src={productImage} alt={productName} className="w-32 h-32 object-cover" />
      <h2 className="text-lg font-semibold">{productName}</h2>
      <p className="text-gray-700 font-medium">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;