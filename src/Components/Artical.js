import React from "react";
import { Link } from "react-router-dom";

const Artical = () => {
  return (
    <div
      data-aos="flip-left"
      style={{
        backgroundImage: "linear-gradient(90deg, #0201010d 40%, #BBCED5 0%)",
      }}
    >
      <h1 className="text-center font-semibold text-4xl py-10 font-Poppins">
        Blog
      </h1>
      <section className="px-5 pb-20 text-gray-100">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
            <div className="flex flex-col space-y-8 md:space-y-12">
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase font-Poppins">
                    Exclusive
                  </span>
                </h3>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-black font-Poppins"
                >
                  The Orchard Street and Fayetteville Sofas are icons of comfort
                  and craftsmanship that never go out of style.
                </Link>
                <p className="text-xs text-gray-400">
                  47 minutes ago by
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline text-violet-600 ml-1"
                  >
                    Leroy Jenkins
                  </Link>
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">
                    Exclusive
                  </span>
                </h3>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="font-Poppins hover:underline text-black"
                >
                  Designed for pure comfort, Leopold Stickley’s favorite chair
                  is now a favorite of homeowners everywhere.
                </Link>
                <p className="text-xs text-gray-400">
                  2 hours ago by
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline text-violet-600 ml-1"
                  >
                    Leroy Jenkins
                  </Link>
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">
                    Exclusive
                  </span>
                </h3>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="font-Poppins hover:underline text-black"
                >
                  A clean, plush, and versatile Memphis sectional is a living
                  room destination that’s impossible to resist.
                </Link>
                <p className="text-xs text-gray-400">
                  4 hours ago by
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline text-violet-600 ml-1"
                  >
                    Leroy Jenkins
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full h-1 bg-opacity-10 bg-violet-400">
                <div className="w-1/2 h-full bg-violet-400"></div>
              </div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center justify-between w-full"
              >
                <span className="text-xs font-bold tracking-wider uppercase text-black font-Poppins">
                  See more exclusives
                </span>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 strokeCurrent text-violet-400"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
          <div
            className="relative flex col-span-12 bg-center bg-no-repeat bg-cover bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
            style={{
              "background-image": "url('https://i.ibb.co/mbg5jS5/kk.jpg')",
            }}
          >
            <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-violet-400 text-gray-100">
              paris, france
            </span>
            <Link className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-gray-900 to-gray-900">
              <span className="flex items-center mb-4 space-x-2 text-violet-400">
                <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400">
                  <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400"></span>
                </span>
                <span className="text-sm font-bold">Live</span>
              </span>
              <h1
                rel="noopener noreferrer"
                href="#"
                className="font-Poppins text-2xl font-semibold group-hover:underline text-gray-100"
              >
                We partner with our customers to ensure that our most popular
                upholstered furniture styles and leathers can be yours for a
                Special Value price
              </h1>
            </Link>
          </div>
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-400">
              <button
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 border-violet-400 text-gray-600"
              >
                Latest
              </button>
              <button
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 border-transparent text-gray-400"
              >
                Popular
              </button>
            </div>
            <div className="flex flex-col divide-y divide-gray-700">
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://i.ibb.co/1fRtJQg/bbb.jpg"
                />
                <div className="flex flex-col flex-grow">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="font-Poppins hover:underline text-black"
                  >
                    Create a space as comfortable as it is productive with
                    desks, storage, and more from Origins by Stickley—available
                    in three attractive, affordable styles.
                  </Link>
                  <p className="mt-auto text-xs text-gray-400">5 minutes ago</p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://i.ibb.co/ZHCVVTb/beeee.jpg"
                />
                <div className="flex flex-col flex-grow">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="font-Poppins hover:underline text-black"
                  >
                    The Pasadena Bungalow Collection celebrates the West Coast
                    interpretation of Arts and Crafts! Its imaginative designs
                    are crafted in solid wild cherry with blackwood accents.
                  </Link>
                  <p className="mt-auto text-xs text-gray-400">
                    14 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://i.ibb.co/mbg5jS5/kk.jpg"
                />
                <div className="flex flex-col flex-grow">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="font-Poppins hover:underline text-black"
                  >
                    newest collection evokes a lush English garden while
                    combining the best of British and American Arts and Crafts.
                  </Link>
                  <p className="mt-auto text-xs text-gray-400">
                    22 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://i.ibb.co/1fRtJQg/bbb.jpg"
                />
                <div className="flex flex-col flex-grow">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="font-Poppins hover:underline text-black"
                  >
                    With a light, airy base composed of sculptural ellipses, the
                    Walnut Grove Round Dining Table offers a flexible and
                    beautiful option for modern interiors and dining rooms.
                  </Link>
                  <p className="mt-auto text-xs text-gray-400">
                    37 minutes ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artical;
