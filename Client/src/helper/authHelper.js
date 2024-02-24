// ---------------------------------------------Imports---------------------------------------------------
import { useSelector } from "react-redux";
// -------------------------------------------------------------------------------------------------------
const useAuth = () => {
  const { isUserLoggedIn, loggedInUserData } = useSelector(
    (state) => state?.auth || {}
  );
  // const isUserLoggedIn = useSelector(
  //   (state) => state?.auth?.isUserLoggedIn || ""
  // );
  console.log("These ae results", isUserLoggedIn, loggedInUserData);
  return { isUserLoggedIn, loggedInUserData };
};

export default useAuth;
