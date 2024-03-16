import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";
import {
  Diretorias,
  Editais,
  Noticias,
  Petianos,
  Projetos,
  Tutora,
} from "./pages/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <Error />,
      children: [
        {
          path: "/noticias",
          element: <Noticias />,
        },
        {
          path: "/tutora",
          element: <Tutora />,
        },
        {
          path: "/petianos",
          element: <Petianos />,
        },
        {
          path: "/projetos",
          element: <Projetos />,
        },
        {
          path: "/diretorias",
          element: <Diretorias />,
        },
        {
          path: "/editais",
          element: <Editais />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
