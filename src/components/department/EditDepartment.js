import { Form, redirect, useRouteLoaderData } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";

function EditDepartment() {
  const departmentData = useRouteLoaderData("single-department-root");
  return (
    <div>
      <Form method="PUT">
        <DepartmentForm department={departmentData} />

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

async function editDepartmentAction({ request, params }) {
  const body = await request.formData();
  const depId = params.id;

  const editRequestBody = {
    name: body.get("departmentName"),
  };

  const response = await fetch(
    `${process.env.REACT_APP_EMPLOYEE_API}/department/${depId}`,
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

  return redirect(`/department/${depId}`);
}

export default EditDepartment;
export { editDepartmentAction };
