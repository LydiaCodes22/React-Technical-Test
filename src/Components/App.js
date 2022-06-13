import React, { useState } from "react";
import "../Styles/app.css";
import Search from "./Search";
import ImageResults from "./ImagesResults";
import getImages from "../Functions/getImages";
// import cors from "cors";


const App = () => {

const [images, setImages] = useState([]);


return (
    <div className="app">
      <img src={"https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"} alt="nasa logo" id="nasaLogo"/>
      <Search  getImages={getImages} setImages={setImages} />
      {images && <ImageResults images={images}/>}
    </div>
  );
}

export default App;