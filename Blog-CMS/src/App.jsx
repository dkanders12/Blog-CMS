import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import "./App.scss";
import FirstPage from "./Pages/FirstPage/FirstPage";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Post" element={<FirstPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
