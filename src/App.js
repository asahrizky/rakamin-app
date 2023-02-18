import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HelloWorld from "./Components/HelloWorld";

function App() {
  return (
    <div>
      <Navbar />
      <HelloWorld name="Rizky" />
      <Footer />
    </div>
  );
}

export default App;
