import { Form, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import { Link } from "react-router-dom";

function ViewEmployee() {
  const data = useRouteLoaderData("single-employee-root");
  return (
    <div className="container">
      <fieldset disabled>
        <Form method="POST">
          <EmployeeForm employeeData={data} />
        </Form>
      </fieldset>

      <div className="field is-horizontal"></div>
      <div className="field is-horizontal"></div>
      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <Link className="button is-primary" to="edit">
                Edit Employee Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
