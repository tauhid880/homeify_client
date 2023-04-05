import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Spinner from "../../../../Components/Spinner";
import Product from "./Product";
import { useTitle } from "../../../../Hook/useTitle";

const MyProducts = () => {
  useTitle("Products");
  const { user } = useContext(AuthContext);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="flex flex-col sm:px-10 sm:pl-10 lg:pr-20 m-auto p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <ul className="flex flex-col divide-y divide-gray-700">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            refetch={refetch}
          ></Product>
        ))}
      </ul>
    </div>
  );
};

export default MyProducts;
