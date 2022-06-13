import React from "react";


function ImageResults({images}) {return (
<div className="image-results">
{
images.map((image) => {return(
    <div key={image.data.title}> <img  src={image.links[0].href} alt={image.data.description}/> </div>)})
     
}
</div>
)}


export default ImageResults;