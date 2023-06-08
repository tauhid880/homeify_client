import React from "react";

const SingUpNow = () => {
  return (
    <div data-aos="fade-down" className="pt-20">
      <section className="py-6 bg-gray-800 text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Sign up now
          </h1>
          <p className="text-xl font-medium text-center">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
            quam natus quis nihil quod, hic explicabo doloribus magnam neque,
            exercitationem eius sunt!
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            <button className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">
              Get started
            </button>
            <button className="px-8 py-3 text-lg font-semibold border rounded bg-gradient-to-r from-purple-400 to-pink-400 text-gray-900 border-gray-300">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingUpNow;
