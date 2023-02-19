import React, { useState } from "react";
import { getUser } from "../services/userService";
const useUserHook = () => {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(false);
  const getUserId = () => {
    setLoadingUser(true);
    getUser(
      null,
      (res) => {
        setUser(res.data);
        setLoadingUser(false);
      },
      (err) => {
        console.log(err);
        setLoadingUser(false);
      }
    );
  };
  return {
    user,
    getUserId,
    loadingUser,
  };
};

export default useUserHook;
