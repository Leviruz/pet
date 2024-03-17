import Foto_petianos from "../assets/images/foto.jpg";
import Wrapper from "../assets/wrappers/backgroundImg";

const BackgroundPET = () => {
  return (
    <div>
        <Wrapper>
        <img src={Foto_petianos} alt = "foto"/> 
        </Wrapper>
    </div>
  )
}

export default BackgroundPET