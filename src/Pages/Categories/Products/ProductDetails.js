import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../../Hook/useTitle";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import BookingModal from "./BookingModal";

const ProductDetails = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { state } = location;
  const [bookingModalData, setBookingModalData] = useState(null);

  const {
    title,
    verify,
    email,
    location: userLocation,
    sellerName,
    time,
    yearsOfPurchase,
    condition,
    category,
    originalPrice,
    resalePrice,
    _id,
    image,
    description,
  } = state;

  useTitle("Product-Details");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 sm:px-10 lg:px-20 py-16 mx-auto lg:py-20 bg-[#0201010d]">
      <div className="grid gap-12 lg:grid-cols-2 sm:mx-auto font-jost">
        <div data-aos="fade-right">
          <img
            className="object-cover w-full col-span-2 rounded shadow-lg md:h-[500px]"
            src={image}
            alt="about"
          />
        </div>
        <div
          className="flex flex-col justify-center font-jost text-secondary"
          data-aos="fade-up"
        >
          <div className="flex flex-col space-y-1 mb-5">
            <div className="flex text-lg items-center">
              <p
                rel="noopener noreferrer"
                to="#"
                className="font-semibold capitalize"
              >
                {sellerName}
              </p>
              {verify && (
                <img
                  src="https://i.ibb.co/D8SPXJg/verified-2.png"
                  alt=""
                  className="w-4 h-4 ml-2"
                />
              )}
            </div>
            <span className="text-xs dark:text-gray-400">{time}</span>
          </div>
          <div className="font-jost capitalize pb-5">
            <p className="text-4xl font-semibold text-secondary ">{title}</p>
            <span className="text-primary text-lg italic">
              Category : {category}
            </span>
          </div>
          <div className="flex">
            <div>
              <p className="text-lg font-medium">{description}</p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="text-lg capitalize">
            <p>
              <span className="font-semibold">Location :</span> {userLocation}
            </p>
            <p>
              <span className="font-semibold">Years Of Purchase :</span>{" "}
              {yearsOfPurchase}
            </p>
            <p>
              <span className="font-semibold">Condition :</span> {condition}
            </p>
            <p>
              <span className="font-semibold">Original Price :</span> $
              {originalPrice}
            </p>
            <p className="mt-2 font-semibold">
              Resale Price{" "}
              <span className="text-red-600 font-semibold text-2xl">
                ${resalePrice}
              </span>
            </p>
          </div>
          <div>
            <label
              onClick={() => {
                setBookingModalData(state);
                !user?.uid &&
                  toast.error("please login first then book product", {
                    duration: 1200,
                  });
              }}
              htmlFor={`booking-modal${_id}`}
              className="inline-flex items-center font-semibold px-6 py-2 bg-primary hover:bg-orange-600 text-white text-lg  cursor-pointer mt-7 "
            >
              <FaCartPlus className="mr-2"></FaCartPlus>
              Book Now
            </label>
          </div>
          {bookingModalData && user?.uid && (
            <BookingModal
              product={state}
              setBookingModalData={setBookingModalData}
            ></BookingModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
