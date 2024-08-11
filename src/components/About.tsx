import "./styles.css";

export default function About() {
  return (
    <>
      <div
        className="lower-component-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "2em",
          padding: "2em",
        }}
      >
        <img
          src="src/assets/old-bank.png"
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
            Bank of Abysinnia
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
      <div className="p-5">
        <h2>Ownership</h2>
        <p>
          Bank of Abyssinia is a share company of private individuals who amass
          experience and success in different areas including business,
          entertainment and education. Such diverse ownership not only reflects
          the company’s determination and willingness to succeed in the sector
          it operates in, but also signify its ability to work together towards
          building a successful business venture and commercial bank service.
        </p>
      </div>

      <div className="p-5">
        <div className="products row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div
              className="card p-4"
              style={{ borderRadius: "12px", width: "100%", height: "20em" }}
            >
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                  }}
                >
                  <h5 className="card-title">Vision</h5>
                  <h6 className="card-subtitle">
                    Tirelessly Working to achieve our vision
                  </h6>
                </div>
                <p className="card-text">
                  To become the leading commercial bank in East Africa by the
                  year 2030.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100 p-4"
              style={{ borderRadius: "12px", width: "100%" }}
            >
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                  }}
                >
                  <h5 className="card-title">Mission</h5>
                  <h6 className="card-subtitle">
                    Our mission enables us to drive forward with aim
                  </h6>
                </div>
                <p className="card-text">
                  Provide excellent financial services through competent,
                  motivated employees and digital technology in order to
                  maximize value to all stakeholders.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100 p-4"
              style={{ borderRadius: "12px", width: "100%" }}
            >
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                  }}
                >
                  <h5 className="card-title">Values</h5>
                  <h6 className="card-subtitle">
                    Our values reflect our identity
                  </h6>
                </div>
                <p className="card-text">
                  Customer Satisfaction Integrity Team work and Collaboration
                  Caring for our community
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h2>Strategic Partnership</h2>
        <p>
          Bank of Abyssinia is a share company of private individuals who amass
          experience and success in different areas including business,
          entertainment and education. Such diverse ownership not only reflects
          the company’s determination and willingness to succeed in the sector
          it operates in, but also signify its ability to work together towards
          building a successful business venture and commercial bank service.
        </p>
      </div>

      <div className="p-5">
        <h2>Corporate Social Responsibility</h2>
        <p>
          As one of our core values, the Bank of Abyssinia promotes corporate
          social responsibility. It believes the well-being and improved living
          conditions of our community will benefit us all. As such, BoA
          participates in various national projects and other social and
          economic initiatives. These include the construction of the Ethiopian
          Grand Renaissance Dam, the establishment of the Ethiopian Cardiac
          Center, Ethiopia Rotary Club, and the establishment of Ethiopian Women
          Traders’ Associations.
        </p>
      </div>

      <div className="p-5">
        <h2>Current Capital</h2>
        <p>
          Through its 779 branches in the country, BoA serves over 7.5 million
          customers. BoA’s well-structured financial service system is connected
          through the T-24 core banking system. This coupled with the 1271 ATM
          machines, 16 virtual banking centers, and more than 1256 POS placed in
          different locations to afford customers to access their accounts from
          anywhere at any time. This also allowed BoA to increase its capital a
          hundred-fold from ETB50 million to ETB 5.5 billion.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          paddingInline: "4em",
        }}
      >
        <div className="stats">
          <h4>7514405</h4>
          <p>Customers</p>
        </div>
        <div className="stats">
          <h4>9696</h4>
          <p>Employees</p>
        </div>
        <div className="stats">
          <h4>788</h4>
          <p>Branches</p>
        </div>
        <div className="stats">
          <h4>1271</h4>
          <p>ATMs</p>
        </div>
        <div className="stats">
          <h4>16</h4>
          <p>Vitual Banking Centers</p>
        </div>
      </div>

      <div className="nav" style={{ paddingInline: "2em", marginTop: "2em" }}>
        <ul>
          <li>
            <a href="#">Board of Directors</a>
          </li>
          <li>
            <a href="#">Board of Sub-Committee Members</a>
          </li>
          <li>
            <a href="#">The Management Team</a>
          </li>
        </ul>
      </div>

      <div
        className="peopleCard"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2em",
          justifyContent: "space-around",
          paddingInline: "3em",
          height: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "2em",
            border: "1px solid gray",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "45%",
              height: "auto",
              borderRadius: "4px",
              margin: ".5rem",
            }}
            src="src/assets/person1.png"
            alt=""
          />
          <div>
            <div className="title">
              <h6>Mr. Mekonnen Manyazewal</h6>
              <p>Board Chairman</p>
            </div>
            <div>
              <h6>Qualification</h6>
              <p>BA degree with distinction in Business Administration</p>
            </div>
            <div>
              <h6>Primary Occupation</h6>
              <p>Freelance Advisory Service</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2em",
            justifyContent: "space-between",
            border: "1px solid gray",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "45%",
              height: "auto",
              borderRadius: "4px",
              margin: ".5rem",
            }}
            src="src/assets/person2.png"
            alt=""
          />
          <div>
            <div className="title">
              <h6>Mr. Mekonnen Manyazewal</h6>
              <p>Board Chairman</p>
            </div>
            <div>
              <h6>Qualification</h6>
              <p>BA degree with distinction in Business Administration</p>
            </div>
            <div>
              <h6>Primary Occupation</h6>
              <p>Freelance Advisory Service</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2em",
            justifyContent: "space-between",
            border: "1px solid gray",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              width: "45%",
              height: "auto",
              borderRadius: "4px",
              margin: ".5rem",
            }}
            src="src/assets/person3.png"
            alt=""
          />
          <div>
            <div className="title">
              <h6>Mr. Mekonnen Manyazewal</h6>
              <p>Board Chairman</p>
            </div>
            <div>
              <h6>Qualification</h6>
              <p>BA degree with distinction in Business Administration</p>
            </div>
            <div>
              <h6>Primary Occupation</h6>
              <p>Freelance Advisory Service</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
