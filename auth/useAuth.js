import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import AuthStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    AuthStorage.removeToken();
  };

  const logIn = async (authToken) => {
    const userDetails = jwtDecode(authToken);
    setUser(userDetails);
    await AuthStorage.storeToken(authToken);
  };

  return { user, logIn, logOut };
};
