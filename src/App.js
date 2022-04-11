import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/counter";
import Parent from "./components/validating-props/parent";
import UseContextTutorial from "./components/Hooks/useContext/useContext";
import HttpRequests from "./components/httpRequests/httpRequests";
import GetRequest from "./components/httpRequests/getRequest";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/router/About";
import Nav from "./components/router/Nav";
import Home from "./components/router/Home";
import Shop from "./components/router/Shop";
import ShopDetails from "./components/router/ShopDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/shop/:id" exact element={<ShopDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
