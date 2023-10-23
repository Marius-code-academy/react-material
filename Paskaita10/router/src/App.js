import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import User from "./components/User/User";

function App() {
  return (
    <div>
      <header>
        <Link to={"/about"}>About</Link>
        {"    "}
        <Link to={"/contacts"}>Contacts</Link>
        {"    "}
        <Link to={"/"}>Home</Link>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={"Nerasta"} />
      </Routes>
      <footer>Cia yra footeris</footer>
    </div>
  );
}

export default App;
