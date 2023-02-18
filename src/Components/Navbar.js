import React from "react";
import Navigation from "./Navigation";
function Navbar() {
  return (
    <div className="border-b p-3 flex justify-between items-center">
      <span className="font-bold">RakaminApp</span>
      <Navigation />
    </div>
  );
}

export default Navbar;
