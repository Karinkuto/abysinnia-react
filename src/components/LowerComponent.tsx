import "./styles.css";

function LowerComponent() {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">products & services</a>
          </li>
          <li>
            <a href="#">e-commerce</a>
          </li>
          <li>
            <a href="#">vacancy</a>
          </li>
          <li>
            <a href="#">ifb</a>
          </li>
          <li>
            <a href="#">media</a>
          </li>
          <li>
            <a href="#">online support</a>
          </li>
        </ul>
      </div>
      <div
        className="lower-component-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "2em",
        }}
      >
        <img
          src="src/assets/virtual-machines.png"
          alt=""
          style={{ width: "50%", borderRadius: "8px" }}
        />
        <div
          className="text"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "1em",
            width: "50%",
          }}
        >
          <h2
            style={{ paddingBottom: ".5em", borderBottom: "2px solid #ffc965" }}
          >
            Only at Bank of Abysinnia
          </h2>
          <p>
            Bank of Abyssinia proudly introduces the new self-service machine
            that hosts the service of branch banking through our excellent and
            friendly virtual tellers from the comfort of any ITM corner.
            Experience, virtual banking from Bank of Abyssinia for an instant,
            easy and convenient banking at your suitable locations.
          </p>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
          <button
            style={{
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              width: "10rem",
              fontWeight: "bold",
              fontSize: "small",
            }}
          >
            About Us
          </button>
        </div>
      </div>
    </>
  );
}
export default LowerComponent;
