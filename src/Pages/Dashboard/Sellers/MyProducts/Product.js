import React from "react";
import toast from "react-hot-toast";

const Product = ({ product, refetch }) => {
  const { title, category, resalePrice, _id, image, paid } = product;

  const deleteProductHandle = (id) => {
    const sure = window.confirm("Are you sure you want to delete?");
    if (sure) {
      fetch(`https://homeify-server-orpin.vercel.app/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted succuccfull");
            refetch();
          }
        })
        .catch((error) => console.log(error.message));
    }
  };

  const advertiseHandle = (id) => {
    fetch(`https://homeify-server-orpin.vercel.app/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("homeify-token")}`,
      },
      body: JSON.stringify({ advertise: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Advertise added successfull", { duration: 1200 });
        } else {
          toast.error(data.message, { duration: 2000 });
        }
      })
      .catch((error) => toast.error(error.message, { duration: 1500 }));
  };

  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between font-jost">
      <div className="sm:flex w-full sm:space-x-4">
        <div className="relative">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
            src={image}
            alt="product"
          />
          {paid && (
            <span className="bg-primary rounded-full p-4 px-3 text-white font-semibold absolute top-0 sm:-top-6 right-0 sm:right-[75px]">
              Sold
            </span>
          )}
        </div>
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="sm:flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1 capitalize">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {title}
              </h3>
              <p className="text-sm dark:text-gray-400">
                Category : {category}
              </p>

              {paid || (
                <p className="font-semibold text-primary py-2 text-lg">
                  Available
                </p>
              )}
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xl font-semibold">Price</p>
              <p className="text-lg font-semibold text-red-600">
                ${resalePrice}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between  w-full">
            <button
              onClick={() => advertiseHandle(_id)}
              className="text-center bg-primary hover:bg-orange-600 space-x-1 text-lg font-semibold py-1 px-5 text-white"
            >
              Advertise
            </button>
            <button
              onClick={() => deleteProductHandle(_id)}
              type="button"
              className="hover:bg-orange-600 flex items-center space-x-1 bg-primary text-white py-2 px-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span className="font-semibold">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Product;
