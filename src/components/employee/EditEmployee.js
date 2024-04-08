import { Form, Link, redirect, useRouteLoaderData } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import moment from "moment";

function EditEmployee() {
  const data = useRouteLoaderData("single-employee-root");

  return (
    <div>
      <Form method="PUT">
        <EmployeeForm employeeData={data} />

        <div className="field is-horizontal" />
        <div className="field is-horizontal" />
        <div className="field is-horizontal" />

        <div className="field is-horizontal">
          <div className="field-label"></div>
          <div className="field-label"></div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  type="submit"
                  className="button is-primary"
                  value="Save Details"
                />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

async function editAction({ request, params }) {
  const employeeId = params.id;
  const body = await request.formData();

  const dobMoment = moment(body.get("dob"), "DD/MM/YYYY");
  const dobMomentFormatted = dobMoment.format("YYYY-MM-DD");

  const editRequestBody = {
    name: body.get("employeeName"),
    dob: dobMomentFormatted,
    gender: body.get("gender"),
    departmentId: body.get("departmentId"),
    salary: body.get("salary"),
  };

  const response = await fetch(
    `${process.env.REACT_APP_EMPLOYEE_API}/employee/${employeeId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editRequestBody),
    }
  );

  if (!response.ok) {
    throw response;
  }

  return redirect(`/employee/${employeeId}`);
}

export default EditEmployee;
export { editAction };
