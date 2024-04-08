import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/ApplicationContext";

function HorizontalNav() {
  const { loggedInUser } = useContext(AppContext);

  let name = "";
  let employee_str = "";
  if (loggedInUser) {
    name = loggedInUser.given_name;
    const employee_id = loggedInUser.userId;

    if (employee_id) {
      employee_str = `(Emp Id: ${employee_id})`;
    }
  }

  return (
    <div>
      <nav
        className="navbar is-centered"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/employee">
              Employees
            </Link>

            <Link className="navbar-item" to="/department">
              Department
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <span>
                  Welcome {name} {employee_str}
                </span>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/logout" className="button is-light">
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HorizontalNav;
