import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Order from "./Order";
import Spinner from "../../../../Components/Spinner";
import NotFoundProduct from "../../../../Components/NotFoundProduct";
import { useTitle } from "../../../../Hook/useTitle";

const MyOrders = () => {
  useTitle("Orders");
  const { user } = useContext(AuthContext);

  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/orders?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(`homeify-token`)}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (orders.length === 0) {
    return <NotFoundProduct></NotFoundProduct>;
  }
  return (
    <div className="flex flex-col max-w-3xl m-auto p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <ul className="flex flex-col divide-y divide-gray-700">
        {orders.map((order) => (
          <Order refetch={refetch} key={order._id} order={order}></Order>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
