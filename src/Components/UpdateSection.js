import React from "react";

const UpdateSection = () => {
  return (
    <div data-aos="fade-left" className="py-20">
      <div
        className="w-full h-[400px] bg-gray-500 flex justify-center"
        style={{
          "background-image": "url('https://i.ibb.co/ZHCVVTb/beeee.jpg')",
          "background-position": "center",
          "background-blend-mode": "multiply",
          "background-size": "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">
            Get Our Offer Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
            Find out about offer and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSection;
