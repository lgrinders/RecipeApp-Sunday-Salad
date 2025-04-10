import Footer from "./components/footer";
import NavBar from "./components/NavBar/index";
import Details from "./pages/Details/index";
import Favorites from "./pages/Favorites/index";
import Home from "./pages/Home/index";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}
