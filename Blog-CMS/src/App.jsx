import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import "./App.scss";
import FirstPage from "./Pages/FirstPage/FirstPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </>
  );
}

export default App;
