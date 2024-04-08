import axios from "axios";
import qs from "qs";
import { useEffect } from "react";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("access_token");
    window.location.href = `${process.env.REACT_APP_KEYCLOAK_URL}/logout`;
  }, []);
}

export default Logout;
