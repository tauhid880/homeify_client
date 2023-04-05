import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Spinner from "../../../../Components/Spinner";
import { useTitle } from "../../../../Hook/useTitle";

const AllSellers = () => {
  useTitle("Sellers");
  const { logOut } = useContext(AuthContext);
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/allsellers`
      );
      const data = await res.json();
      return data;
    },
  });

  const deleteSeller = (id) => {
    const sure = window.confirm("Are you sure , you want to delete?");
    if (sure) {
      fetch(`https://homeify-server-orpin.vercel.app/allsellers/${id}`, {
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

  const verifyHandle = (email) => {
    const sure = window.confirm(`Are you sure?`);
    if (sure) {
      fetch(
        `https://homeify-server-orpin.vercel.app/users/verify?email=${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("homeify-token")}`,
          },
          body: JSON.stringify({ verify: true }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("verify successfull", { duration: 1200 });
            refetch();
          } else {
            toast.error(data.message, { duration: 1200 });
            logOut();
          }
        })
        .catch((error) => {
          toast.error(error.message, { duration: 1200 });
        });
    }
  };

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
            <th className="bg-secondary text-white py-5 text-[15px]">Delete</th>
            <th className="bg-secondary text-white py-5 text-[15px]">Status</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => {
            const { name, email, verify, _id } = seller;
            return (
              <tr key={_id}>
                <td className="font-semibold capitalize flex items-center">
                  {name}
                  {verify && (
                    <img
                      src="https://i.ibb.co/D8SPXJg/verified-2.png"
                      alt=""
                      className="w-4 h-4 ml-2"
                    />
                  )}
                </td>
                <td className="font-semibold">{email}</td>
                <td>
                  <button
                    onClick={() => deleteSeller(_id)}
                    className="py-1 px-4 rounded-md bg-primary text-white font-semibold hover:bg-orange-600"
                  >
                    Delete
                  </button>
                </td>
                <td className="font-semibold text-green-700 ">
                  {verify ? (
                    <button className="py-1 px-4 rounded-md border-2 font-semibold hover:bg-[#29aa6e28]">
                      Verified
                    </button>
                  ) : (
                    <button
                      onClick={() => verifyHandle(email)}
                      className="py-1 px-4 rounded-md bg-primary text-white w-[90px] hover:bg-orange-600"
                    >
                      Verify
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;
