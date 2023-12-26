import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Dashboard from "./pages/Dashboard";
import Reservation from "./pages/Reservation";
import Model from "./components/Model";

function App() {
  return (
    <>
      <Header />
      <div className="mx-10 my-5">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Reservation />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
