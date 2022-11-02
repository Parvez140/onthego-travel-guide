import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import ChekOut from "./components/ChekOut/ChekOut/ChekOut";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import SingUp from "./components/Login/SingUp/SingUp";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chekOut/:serviceId" element={<ChekOut />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
