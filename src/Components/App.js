import React from "react";
import "../Styles/app.css";
import Search from "./Search"
import logo from "../Images/logo.jpeg"

const App = () => {
  return (
    <div className="app">
      <img src={logo} alt="nasa logo" id="nasaLogo"/>
      <Search />
    </div>
  );
}

export default App;