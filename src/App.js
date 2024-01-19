import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Course from "./pages/Course.js";
import ErrorPage from "./pages/ErrorPage";
import Ebook from "./pages/Ebook.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: "",
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Course /> },
        { path: "ebook", element: <Ebook /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
