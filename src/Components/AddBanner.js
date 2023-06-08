import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const AddBanner = () => {
  return (
    <div data-aos="zoom-in" className=" mx-auto max-w-[1380px] py-28">
      <div className="p-6 py-12 bg-gradient-to-r from-[#FFA1CF] to-[#D2E9E9] text-gray-90 mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              5% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">HOMEIFy</span>
            </div>
            <Link
              to="/categories"
              aria-label=""
              className="inline-flex items-center font-semibold px-4 py-3 sm:px-6 sm:py-4 text-lg bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 sm:text-xl my-5"
            >
              <FaCartPlus className="mr-2"></FaCartPlus>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
