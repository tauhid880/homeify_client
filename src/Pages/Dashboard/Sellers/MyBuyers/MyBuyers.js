import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Spinner from "../../../../Components/Spinner";
import { useTitle } from "../../../../Hook/useTitle";

const MyBuyers = () => {
  useTitle("Buyers");
  const { user } = useContext(AuthContext);
  const {
    data: mybuyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/mybuyers", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/mybuyers?email=${user?.email}`,
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

  return (
    <div className="overflow-x-auto px-4 sm:px-10 sm:pl-10 lg:pr-20">
      <table className="table rounded-lg w-full border-2 ">
        <thead>
          <tr className=" border-b-primary border">
            <th className="bg-secondary text-white py-5 text-[15px]">Name</th>
            <th className="bg-secondary text-white py-5 text-[15px]">Email</th>
            <th className="bg-secondary text-white py-5 text-[15px]">Phone</th>
            <th className="bg-secondary text-white py-5 text-[15px]">
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {mybuyers.map((mybuyer) => {
            const { name, email, phone, location, _id } = mybuyer;
            return (
              <tr key={_id}>
                <td className="font-semibold">{name}</td>
                <td className="font-semibold">{email}</td>
                <td className="font-semibold">{phone}</td>
                <td className="font-semibold">{location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyBuyers;
