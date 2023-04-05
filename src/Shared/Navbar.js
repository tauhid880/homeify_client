import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Topbar from "./Topbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutHandle = () => {
    logOut();
    navigate("/");
  };

  const menu = (
    <>
      <li className="hover:border-b-2 border-b-primary duration-100">
        <NavLink
          to="/home"
          aria-label="home"
          title="home"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:border-b-2 border-b-primary duration-100">
        <NavLink
          to="/about"
          aria-label="about"
          title="about"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="hover:border-b-2 border-b-primary duration-100">
        <NavLink
          to="/categories"
          aria-label="categories"
          title="categories"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Categories
        </NavLink>
      </li>

      {user && (
        <li className="hover:border-b-2 border-b-primary duration-100">
          <NavLink
            to="/dashboard"
            aria-label="dashboard"
            title="dashboard"
            className={({ isActive }) =>
              isActive
                ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <>
      <Topbar></Topbar>
      <div className="py-5 mx-auto px-4 sm:px-10 lg:px-20 font-jost sticky top-0 bg-white z-50 shadow-sm">
        <div className="relative flex items-center justify-between z-30">
          <Link to="/" className="inline-flex items-center">
            {/* <img src={logo} alt="" className='w-8/12'/> */}
            <span className="text-secondary font-bold text-3xl">
              Hom<span className="text-primary">E</span>ify
              <span className="text-primary">.</span>
            </span>
          </Link>
          <ul className=" items-center hidden space-x-8 lg:flex text-[16px] uppercase">
            {menu}
          </ul>
          <ul className=" items-center hidden space-x-8 lg:flex">
            {user?.uid ? (
              <>
                <li>
                  <button
                    onClick={logOutHandle}
                    className="font-medium tracking-wide text-[17px] hover:border-b-2 border-b-primary duration-100"
                  >
                    Log Out
                  </button>
                </li>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt="userImage" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="font-medium tracking-wide text-[17px] hover:border-b-2 border-b-primary duration-100"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Log In
                  </Link>
                </li>
                <FaUser className="text-primary text-lg"></FaUser>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm z-30">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        {/* <img src={logo} alt="" className='w-8/12'/> */}
                        <span className="text-secondary font-bold text-3xl">
                          Hom<span className="text-primary">E</span>ify
                          <span className="text-primary">.</span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {menu}
                      {user?.uid ? (
                        <>
                          <li>
                            <button
                              onClick={logOutHandle}
                              className="font-medium tracking-wide text-[17px]"
                            >
                              Log Out
                            </button>
                          </li>
                          <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                              <img src={user?.photoURL} alt="userImage" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/login"
                              className="font-medium tracking-wide text-[17px]"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Log In
                            </Link>
                          </li>
                          <FaUser className="text-primary text-lg"></FaUser>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
