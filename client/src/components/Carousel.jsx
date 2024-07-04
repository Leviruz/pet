import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} style={{ backgroundColor: "#222" }}>
      <div>
        <h3>Levir Bonito</h3>
      </div>
      <div>
        <h3>Teste2</h3>
      </div>
      <div>
        <h3>e Teste 3</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
