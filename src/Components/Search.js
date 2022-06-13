import React, { useState } from "react";
import "../Styles/search.css";

const Search = ({getImages, setImages}) => {
      const [formData, setFormData] = useState("");
      const handleSubmit = (event) => {
        event.preventDefault();
        getImages(
          `https://images-api.nasa.gov/search?q=${formData}`, setImages
        )
        setFormData("")
      };
      const handleChange = (event) => {event.preventDefault(); setFormData(event.target.value)};

  return (
    <>
    <div className="search">
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData} onChange={handleChange} placeholder="Search"/>
          <input type="submit" value="Submit" />
        </form>
      </div></>
  );
}

export default Search;