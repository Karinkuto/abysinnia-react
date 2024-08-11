import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavComponent from "./components/NavComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import DownloadsAndSocialsComponent from "./components/DownloadsAndSocialsComponent";

function App() {
  return (
    <Router>
      <div className="p-4">
        <HeaderComponent />
      </div>
      <div style={{ paddingInline: "2em" }}>
        <NavComponent />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes as needed */}
      </Routes>
      <div style={{ margin: "2em" }}>
        <DownloadsAndSocialsComponent />
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
