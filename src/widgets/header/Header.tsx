import { NavLink } from "react-router-dom"
import { urlArr } from "@/shared/config/variables"

const Header = () => {
  return (
    <header style={{paddingBlock: "25px"}} className="container">
      <NavLink to={urlArr.home}>Main</NavLink>
    </header>
  )
}

export default Header