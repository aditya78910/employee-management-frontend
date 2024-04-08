import { createBrowserRouter } from "react-router-dom";
import EmployeeList from "../components/employee/EmployeeList";
import DepartmentList from "../components/department/DepartmentList";
import RootLayout from "./RootLayout";
import GetAccessToken from "../components/login/GetAccessToken";
import Login from "../components/login/Login";
import ViewEmployee from "../components/employee/ViewEmployee";
import EditEmployee, { editAction } from "../components/employee/EditEmployee";
import {
  allEmployeesLoader,
  singleEmployeeLoader,
} from "../components/dataloaders/EmployeeLoader";
import ErrorPage from "../components/error/ErrorPage";
import Logout from "../components/login/Logout";
import {
  allDepartmentsLoader,
  singleDepartmentLoader,
} from "../components/dataloaders/DepartmentLoader";
import ViewDepartment from "../components/department/ViewDepartment";
import EditDepartment, {
  editDepartmentAction,
} from "../components/department/EditDepartment";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/employee",
        children: [
          {
            index: true,
            element: <EmployeeList />,
            loader: allEmployeesLoader,
          },
          {
            path: ":id",
            id: "single-employee-root",
            loader: singleEmployeeLoader,
            children: [
              {
                index: true,
                element: <ViewEmployee />,
              },
              {
                path: "edit",
                element: <EditEmployee />,
                action: editAction,
              },
            ],
          },
        ],
      },
      {
        path: "/department",
        children: [
          {
            index: true,
            element: <DepartmentList />,
            loader: allDepartmentsLoader,
          },
          {
            path: ":id",
            id: "single-department-root",
            loader: singleDepartmentLoader,
            children: [
              {
                index: true,
                element: <ViewDepartment />,
              },
              {
                path: "edit",
                element: <EditDepartment />,
                action: editDepartmentAction,
              },
            ],
          },
        ],
      },

      { path: "/login", element: <Login /> },
      { path: "/token", element: <GetAccessToken /> },
      { path: "/logout", element: <Logout /> },
    ],
  },
]);
