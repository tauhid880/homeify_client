import React from "react";
import toast from "react-hot-toast";
import { useTitle } from "../../../Hook/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

const SentRequest = () => {
  const [refresh, setRefresh] = useState(true);
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState();
  useTitle("SentRequest");

  const sendRequestToAdmin = () => {
    const email = user?.email;
    fetch(
      `https://homeify-server-orpin.vercel.app/users/sendRequest?email=${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ adminRequest: "pending" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setRefresh(!refresh);
        toast.success("Request send", { duration: 1200 });
      })
      .catch((error) => console.log(error));
  };

  const cancelRequestToAdmin = () => {
    const email = user?.email;
    fetch(
      `https://homeify-server-orpin.vercel.app/users/cancelRequest?email=${email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ adminRequest: "cancel" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setRefresh(!refresh);
        toast.success("Request cancel", { duration: 1200 });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      `https://homeify-server-orpin.vercel.app/verifyRole?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setRole(data?.adminRequest))
      .catch((error) => console.log(error.message));
  }, [user?.email, refresh]);

  return (
    <div className="w-full sm:w-10/12 md:w-7/12 xl:w-6/12 m-auto">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10 w-6/6">
        <div className="text-center">
          <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-xl capitalize">
            {role === "pending" ? (
              <span className="text-green-600">
                request send successfully,please wait until the admin approved
                your request
              </span>
            ) : (
              " Send Request to Become an Admin"
            )}
          </h3>
        </div>
        <div className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="outline-none flex-grow w-full py-2 px-4 mb-2 text-lg font-semibold capitalize bg-white border border-gray-300 rounded-full shadow-sm">
            {user?.displayName}
          </div>
          <div className="outline-none flex-grow w-full py-2 px-4 mb-2 text-lg font-semibold bg-white border border-gray-300 rounded-full shadow-sm">
            {user?.email}
          </div>
          {role === "pending" ? (
            <button
              onClick={cancelRequestToAdmin}
              className="inline-flex items-center justify-center w-full py-3 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-primary hover:bg-orange-600"
            >
              Cancel Request
            </button>
          ) : (
            <button
              onClick={sendRequestToAdmin}
              className="inline-flex items-center justify-center w-full py-3 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-primary hover:bg-orange-600"
            >
              Send Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SentRequest;
