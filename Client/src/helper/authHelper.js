// ---------------------------------------------Imports---------------------------------------------------
import { useSelector } from "react-redux";
// -------------------------------------------------------------------------------------------------------
const useAuth = () => {
  const { isUserLoggedIn, userMetaData } = useSelector(
    (state) => state?.auth || {}
  );
  console.log("These ae results", isUserLoggedIn, userMetaData);
  return { isUserLoggedIn, userMetaData };
};

export default useAuth;
