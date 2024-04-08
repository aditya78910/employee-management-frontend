import { RouterProvider } from "react-router-dom";
import { routes } from "./navigation/Routes";
import HorizontalNav from "./navigation/HorizontalNav";

function AppContent() {
  return (
    <div>
      <RouterProvider router={routes}>
        <HorizontalNav />
      </RouterProvider>
    </div>
  );
}

export default AppContent;
