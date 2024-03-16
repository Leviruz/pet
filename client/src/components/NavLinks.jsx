import Wrapper from "../assets/wrappers/NavLink";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <Wrapper>
      {links.map((link) => {
        const { text, path } = link;
        return (
          <NavLink to={path} key={text} className="navlink" end>
            {text}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export default NavLinks;
