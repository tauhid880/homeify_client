import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ReportProduct from "./ReportProduct";
import Spinner from "../../../../Components/Spinner";
import { useTitle } from "../../../../Hook/useTitle";

const ReportedItem = () => {
  useTitle("ReportedItem");
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reportedProduct"],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/reportedProduct`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="flex flex-col m-auto p-6 space-y-4 sm:p-10 sm:px-10 sm:pl-10 lg:pr-20">
      <ul className="flex flex-col divide-y divide-gray-700">
        {products.map((product) => (
          <ReportProduct
            key={product._id}
            product={product}
            refetch={refetch}
          ></ReportProduct>
        ))}
      </ul>
    </div>
  );
};

export default ReportedItem;
