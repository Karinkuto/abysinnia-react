import "./styles.css";

function DebitCardsComponent() {
  return (
    <div className="debit-cards row row-cols-1 row-cols-md-3 g-9">
      <div className="col">
        <div className="card h-100 p-2" style={{ border: "none" }}>
          <img
            src="src/assets/card1.png"
            className="card-img-top p-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Gold Card</h5>
            <p className="card-text">
              As main business partners of BoA, you are of paramount importance
              to us. Gold Debit card powers your status in our bank and allows
              you unmatched purchasing power at a single stop. With superlative
              cash withdrawing capacity, you are the owner of unimaginable
              possibilities.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 p-2" style={{ border: "none" }}>
          <img
            src="src/assets/card2.png"
            className="card-img-top p-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">AbysinnAmeen Card</h5>
            <p className="card-text">
              Ameen interset free banking offers you the Habesha Ameen debit
              card which gives purchasing power up to ETB 200,000 daily
              purchases. you are offered exceptional services through this debit
              card.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 p-2" style={{ border: "none" }}>
          <img
            src="src/assets/card3.png"
            className="card-img-top p-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Classic Card</h5>
            <p className="card-text">
              BoA values its banking customers. That is why we provide you with
              the Habesha classic debit card which gives a massive purchasing
              power. With up to ETB 200,000 daily purchases you are offered
              exceptional services through this debit card.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DebitCardsComponent;
