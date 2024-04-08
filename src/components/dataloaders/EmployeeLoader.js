async function singleEmployeeLoader({ params }) {
  const response = await fetch(
    `${process.env.REACT_APP_EMPLOYEE_API}/employee/${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );

  if (!response.ok) {
    throw response;
  } else {
    return response;
  }
}

async function allEmployeesLoader() {
  const response = await fetch(
    `${process.env.REACT_APP_EMPLOYEE_API}/employee`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );

  if (!response.ok) {
    throw response;
  } else {
    return response;
  }
}

export { singleEmployeeLoader, allEmployeesLoader };
