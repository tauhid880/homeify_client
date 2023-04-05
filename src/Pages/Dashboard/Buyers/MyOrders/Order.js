import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Order = ({ order, refetch }) => {
  const { title, productImg, price, category, _id, paid } = order;

  // Delete order
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      fetch(`https://homeify-server-orpin.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Delete successfully!");
          }
          refetch();
        });
    }
  };

  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={productImg}
          alt="product"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="sm:flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1 capitalize">
              <h3 className="text-xl font-semibold leading-snug sm:pr-8">
                {title}
              </h3>
              <p className="text-sm dark:text-gray-400">
                Category : {category}
              </p>
            </div>
            <div className="text-left my-3 sm:text-right">
              <p className="text-lg font-semibold">Price</p>
              <p className="text-lg font-semibold text-red-600">${price}</p>
            </div>
          </div>
          <div className="w-0 flex flex-row justify-center items-center gap-5 relative lg:left-32 left-20">
            {paid ? (
              <span
                to={`/payment/${title}`}
                className="text-center bg-orange-600 space-x-1 text-lg font-semibold py-2 px-10 text-white"
              >
                Paid
              </span>
            ) : (
              <>
                <Link
                  to={`/payment/${title}`}
                  className="text-center bg-primary hover:bg-orange-600 space-x-1 text-lg font-semibold py-2 px-10 text-white"
                >
                  Pay
                </Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="ml-2 text-center bg-primary hover:bg-orange-600 space-x-1 text-lg font-semibold py-2 px-6 text-white"
                >
                  Remove
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Order;
