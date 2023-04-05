import React from "react";
import toast from "react-hot-toast";

const ReportProduct = ({ product, refetch }) => {
  const { category, image, resalePrice, sellerName, title, userEmail, _id } =
    product;

  const reportProductDelete = (title) => {
    const confirm = window.confirm("are you sure,you want to delete?");
    if (confirm) {
      fetch(
        `https://homeify-server-orpin.vercel.app/reportedProduct?title=${title}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success(data.message, { duration: 1200 });
          refetch();
        })
        .catch((error) => toast.error(error.message, { duration: 1200 }));
    }
  };

  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className=" flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={image}
          alt="product"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="sm:flex justify-between w-full pb-2 space-x-2 font-jost">
            <div className="space-y-1 capitalize">
              <h3 className="text-xl font-semibold leading-snug sm:pr-8">
                {title}
              </h3>
              <p className="text-sm dark:text-gray-400">
                Category : {category}
              </p>
            </div>
            <div className="text-left sm:text-right my-4">
              <p className="text-lg font-semibold">Price</p>
              <p className="text-lg font-semibold text-red-600">
                ${resalePrice}
              </p>
            </div>
          </div>
          <div className="sm:flex text-sm divide-x font-jost">
            <button
              onClick={() => reportProductDelete(title)}
              type="button"
              className="flex items-center space-x-1 bg-primary hover:bg-orange-600 text-white py-2 px-5"
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
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="flex items-center text-left px-2 py-1 space-x-1"
            >
              <span>Reported by : {userEmail}</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReportProduct;
