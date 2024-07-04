import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import BackgroundPET from "../components/BackgroundPET";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <BackgroundPET />
      <Carousel />
      <Outlet />
    </div>
  );
};
export default LandingPage;
