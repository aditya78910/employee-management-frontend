import {
  Form,
  Link,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import DepartmentForm from "./DepartmentForm";

function ViewDepartment() {
  const departmentData = useRouteLoaderData("single-department-root");

  return (
    <>
      <div className="container">
        <fieldset disabled>
          <Form>
            <DepartmentForm department={departmentData} />
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
                  Edit Department Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDepartment;
