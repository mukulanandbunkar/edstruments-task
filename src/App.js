import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routers } from "./services/router.services";
import Layout from "./Component/Layout/Layout";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routers,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
