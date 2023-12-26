import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-700 h-20 text-white flex items-center gap-20 p-10 font-semibold">
      <Link className="cursor-pointer hover:scale-110" to="/dashboard">
        Dashboard
      </Link>
      <Link className="cursor-pointer hover:scale-110" to="/">
        Reservation
      </Link>
    </div>
  );
};

export default Header;
