async function allDepartmentsLoader() {
  const response = await fetch(
    `${process.env.REACT_APP_EMPLOYEE_API}/department`,
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

async function singleDepartmentLoader({ params }) {
  const response = await fetch(
    `${process.env.REACT_APP_EMPLOYEE_API}/department/${params.id}`,
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

export { allDepartmentsLoader, singleDepartmentLoader };
