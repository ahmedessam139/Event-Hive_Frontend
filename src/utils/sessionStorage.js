let token = "fsdfdsfsfdsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfs";

export const setSessionToken = (newToken) => {
  token = newToken;
};

export const getSessionToken = () => {
  return token;
};