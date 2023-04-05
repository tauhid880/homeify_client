import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const useRole = (email) => {
  const [adminRequest, setAdminRequest] = useState("");
  const [role, setRole] = useState("");
  const [isRoleLoading, setIsRoleLoading] = useState(true);
  const [isVerify, setIsVerify] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`https://homeify-server-orpin.vercel.app/verifyRole?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsRoleLoading(false);
          setRole(data?.role);
          setIsVerify(data.verify);
          setAdminRequest(data.adminRequest);
        })
        .catch((error) => {
          setIsRoleLoading(false);
        });
    }
  }, [email]);
  return [role, isRoleLoading, isVerify, adminRequest];
};

export default useRole;
