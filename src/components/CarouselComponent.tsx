import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <Carousel controls={false} interval={5000} slide={false}>
      <Carousel.Item>
        <img src="src/assets/img1.png" alt="" className="mh-100% h-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/img2.png" alt="" className="mh-100% h-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/img3.png" alt="" className="mh-100% h-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/img4.png" alt="" className="mh-100% h-100" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
