import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/ui/Homepage";
import Layout from "./components/ui/Layout";
import Configuration from "./pages/Configuration";
import { loader as configurationLoader } from "./pages/Configuration";
import SerieDetails from "./features/series/SerieDetails";
import { loader as serieDetailsLoader } from "./features/series/SerieDetails";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/configuration",
        element: <Configuration />,
        loader: configurationLoader,
      },
      {
        path: "/serie/:serieId",
        element: <SerieDetails />,
        loader: serieDetailsLoader,
      },
    ],
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
