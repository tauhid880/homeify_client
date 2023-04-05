import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { jwtToken } from "../API/access-jwt-token";
import { dbUser } from "../API/user";
import { AuthContext } from "../Contexts/AuthProvider";

const SocialLogin = ({ from }) => {
  const { signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const signWithGoogleHandle = () => {
    signInGoogle()
      .then((result) => {
        const User = result.user;
        const { email, displayName, photoURL } = User;
        const user = {
          name: displayName,
          email: email,
          image: photoURL,
          role: "buyer",
        };
        dbUser(user)
          .then((data) => {
            jwtToken(email)
              .then((data) => {
                if (data.accessToken) {
                  localStorage.setItem("homeify-token", data.accessToken);
                  toast.success("SignIn with Google successfull", {
                    duration: 1200,
                  });
                  navigate(from ? (from, { replace: true }) : "/");
                }
              })
              .catch((error) => console.error(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="mt-6">
      <div className="divider font-semibold my-6">OR</div>
      <div className="relative">
        <div className="absolute left-4 top-[20%] text-black">
          <img
            src="https://i.ibb.co/GW2pwSv/google.png"
            alt=""
            className="w-[30px]"
          />
        </div>
        <button
          onClick={signWithGoogleHandle}
          className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4   font-semibold  outline-none pl-12 bg-none"
        >
          SignIn With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
