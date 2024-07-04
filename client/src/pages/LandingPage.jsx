import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"

const LandingPage = () => {
  return (
    <div>
    <Navbar/>
    <Carousel/>
    <Outlet/>
    </div>
  )
}
export default LandingPage