export const getUserFromStorage = () => {
  const token = localStorage.getItem("token");
  return token;
};