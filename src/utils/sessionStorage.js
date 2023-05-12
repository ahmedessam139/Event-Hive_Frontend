let token = "null";

import { getSession } from "next-auth/react";

export const setSessionToken = (newToken) => {
  token = newToken;
  console.log("token: ", token);
};


export const getSessionToken = () => {

  return token;


};