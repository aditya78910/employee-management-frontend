import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import HorizontalNav from "../../navigation/HorizontalNav";

function ErrorPage() {
  const errorData = useRouteError();
  const navigate = useNavigate();

  let errorMessage = "Error occured";

  if (errorData.status == 403) {
    errorMessage = "Unauthorized action!";
  }

  useEffect(() => {
    if (errorData.status == 401) {
      navigate("/login");
    }
  });

  return (
    <>
      <HorizontalNav />
      <article className="message is-danger">
        <div className="message-header">
          <p>{errorMessage}</p>
        </div>
      </article>
    </>
  );
}

export default ErrorPage;
