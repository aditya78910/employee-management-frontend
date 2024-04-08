import { Link, useLoaderData } from "react-router-dom";

function EmployeeList() {
  const employeesList = useLoaderData();

  return (
    <div className="container">
      <table className="table is-hoverable is-bordered">
        <thead>
          <tr>
            <th>
              <abbr title="empId">Emp Id</abbr>
            </th>
            <th>
              <abbr title="Name">Name</abbr>
            </th>
            <th>
              <abbr title="dob">Date of Birth</abbr>
            </th>
            <th>
              <abbr title="gender">Gender</abbr>
            </th>
            <th>
              <abbr title="departmentId">Department Id</abbr>
            </th>
            <th>
              <abbr title="department name">Department Name</abbr>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.dob}</td>
              <td>{row.gender}</td>
              <td>{row.department.id}</td>
              <td>{row.department.name}</td>
              <td>
                <Link to={`${row.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
