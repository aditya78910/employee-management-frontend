import { Link, useLoaderData } from "react-router-dom";

function DepartmentList() {
  const data = useLoaderData();

  return (
    <div>
      <div className="container">
        <table className="table is-hoverable is-bordered">
          <thead>
            <tr>
              <th>
                <abbr title="id">Department Id</abbr>
              </th>
              <th>
                <abbr title="Name">Department Name</abbr>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>
                  <Link to={`${row.id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartmentList;
