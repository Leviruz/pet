import { Outlet } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
      <Outlet/>
      <navlink to = "/">
      inicio
      <navlink/>
      </div>
  )
}
export default LandingPage