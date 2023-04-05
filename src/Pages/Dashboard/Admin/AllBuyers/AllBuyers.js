import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../Components/Spinner";
import { useTitle } from "../../../../Hook/useTitle";

const AllBuyers = () => {
  useTitle("Buyera");
  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/allbuyers`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const deleteBuyer = (id) => {
    const sure = window.confirm("are you sure you want to delete?");
    if (sure) {
      fetch(`https://homeify-server-orpin.vercel.app/allbuyers/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch();
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="overflow-x-auto px-4 sm:px-10 sm:pl-10 lg:pr-20">
      <table className="table rounded-lg w-full border-2 ">
        <thead>
          <tr className="text-xl border border-b-primary">
            <th className="bg-secondary text-white py-5 text-[15px]"></th>
            <th className="bg-secondary text-white py-5 text-[15px]">Name</th>
            <th className="bg-secondary text-white py-5 text-[15px]">Email</th>
            <th className="bg-secondary text-white py-5 text-[15px]">Delete</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((buyer) => {
            const { name, email, image, _id } = buyer;
            return (
              <tr key={_id}>
                <td>
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={image} alt="buyer-image" />
                    </div>
                  </div>
                </td>
                <td className="font-semibold capitalize">{name}</td>
                <td className="font-semibold">{email}</td>
                <td>
                  <button
                    onClick={() => deleteBuyer(_id)}
                    className="hover:bg-orange-600 py-1 px-4 rounded-lg bg-primary text-white font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
