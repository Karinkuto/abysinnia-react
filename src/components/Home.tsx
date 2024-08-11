import HeroComponent from "./HeroComponent";
import DebitCardsComponent from "./DebitCardsComponent";
import ProductsComponent from "./ProductsComponent";
import LowerComponent from "./LowerComponent";

function Home() {
  return (
    <div className="p-4">
      <HeroComponent />
      <h2
        style={{
          marginBlock: "1em",
          paddingInline: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Products
      </h2>
      <ProductsComponent />
      <h2
        style={{
          marginBlock: "1em",
          paddingInline: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Habesha Debit Cards
      </h2>
      <DebitCardsComponent />
      <div className="lower-component p-5">
        <LowerComponent />
      </div>
    </div>
  );
}

export default Home;
