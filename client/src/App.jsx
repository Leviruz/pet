import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import LandingPage from "./pages/LandingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement:<Error/>,
      children:[
        {},
        {},
        {},
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
