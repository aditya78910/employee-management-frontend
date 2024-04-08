import { useContext, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/ApplicationContext";

function GetAccessToken() {
  const { setLoggedInUser } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.href);
    const auth_code = params.get("code");

    const data = {
      grant_type: "authorization_code",
      code: auth_code,
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: `${window.location.origin}/token`,
      code_verifier: localStorage.getItem("code_verifier"),
    };
    axios
      .post(
        `${process.env.REACT_APP_KEYCLOAK_URL}/token?`,
        qs.stringify(data),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((tokenResponse) => {
        localStorage.setItem("access_token", tokenResponse.data.access_token);
        const [header, payload, signature] =
          tokenResponse.data.id_token.split(".");

        const id_token_json = atob(payload);
        setLoggedInUser(JSON.parse(id_token_json));
        navigate("/employee");
      });
  }, []);
}

export default GetAccessToken;
