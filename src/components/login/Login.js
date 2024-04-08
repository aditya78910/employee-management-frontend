import { useEffect } from "react";
import { generateCodeChallenge, generateCodeVerifier } from "./PKCEHelper";

function Login() {
  useEffect(() => {
    const codeVerifier = generateCodeVerifier();
    localStorage.setItem("code_verifier", codeVerifier);
    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      window.location.href =
        `${process.env.REACT_APP_KEYCLOAK_URL}/auth?` +
        `client_id=${process.env.REACT_APP_CLIENT_ID}` +
        `&response_type=code` +
        `&scope=openid` +
        `&response_mode=fragment` +
        `&redirect_uri=http://localhost:3000/token` +
        `&code_challenge=${codeChallenge}` +
        `&code_challenge_method=S256`;
    });
  }, []);
  return <div></div>;
}

export default Login;
