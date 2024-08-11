import "./styles.css";

function ProductsComponent() {
  return (
    <div className="products row row-cols-1 row-cols-md-3 g-3">
      <div className="col">
        <div
          className="card h-100 p-4"
          style={{ borderRadius: "12px", width: "90%" }}
        >
          <div className="card-body">
            <h5 className="card-title">Online Banking</h5>
            <p className="card-text">
              Through our systematized and stylish online banking platform, you
              will avoid unnecessary queues to be served. Our online banking
              enables you to manage your financial activity without a problem.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card h-100 p-4"
          style={{ borderRadius: "12px", width: "90%" }}
        >
          <div className="card-body">
            <h5 className="card-title">Mobile Banking</h5>
            <p className="card-text">
              With mobile banking, BoA gets even closer to you and you get
              closer to your account. BoA offers a safe and secure banking
              system with the most flexible structure and allows you access to
              your account from anywhere and everywhere.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card h-100 p-4"
          style={{ borderRadius: "12px", width: "90%" }}
        >
          <div className="card-body">
            <h5 className="card-title">GizePay</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
