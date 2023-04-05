import React from 'react';

const SectionTop = ({title}) => {
    return (
        <div className="relative">
        <img
          src="https://i.ibb.co/GFdSLcy/francesca-tosolini-yk-K7-DS6vueg-unsplash.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-[#183b69] bg-opacity-30 text-center">
          <div className="px-4 py-16 mx-auto text-center md:px-24 lg:px-8 lg:py-20">
                <h2 className="text-center mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  {title}
                </h2>
          </div>
        </div>
      </div>
    );
};

export default SectionTop;