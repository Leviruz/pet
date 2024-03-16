import Logo from "../assets/images/logo-horizontal.png";
import Wrapper from "../assets/wrappers/LogoPet";
const LogoPet = () => {
  return (
    <Wrapper>
      <a
        href="https://www.instagram.com/petcrateusufc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Logo} alt="Logo Pet" className="logo" />
      </a>
    </Wrapper>
  );
};

export default LogoPet;
