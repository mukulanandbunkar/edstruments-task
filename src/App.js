import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routers } from "./services/router.services";
import Layout from "./Component/Layout/Layout";
import { store } from "./services/store/store";
import { Provider } from "react-redux";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routers,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
