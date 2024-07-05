// check loggedin user

import { authKey } from "@/constants/auth";
import { getFromLocalStorage } from "@/utils/local-storage";
import { jwtDecode } from "jwt-decode";

export const isLoggedIn = () => {
  const token = getFromLocalStorage(authKey);
  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded && decoded.exp && decoded.exp > currentTime) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};
