import CarouselComponent from "./CarouselComponent.tsx";

function HeroComponent() {
  return (
    <div className="hero-section ">
      <div>
        <CarouselComponent />
      </div>
      <div className="hero-text">
        <h2>Bank of Abysinnia</h2>
        <p>
          In an era where commercial banking services were in an inchoate stage
          and striding towards transforming different sectors of the economy,
          Bank of Abyssinia’s founders believed in the need for a bank that
          gives comprehensive commercial banking services. Thus, the Bank of
          Abyssinia (BoA) was open for business in 1996 with enthused initiation
          and determination.
        </p>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
        <button className="about-us-btn">About Us</button>
      </div>
    </div>
  );
}

export default HeroComponent;
