import axios from "axios";

const getImages = (endpoint, setImages) => {
    axios.get(endpoint).then((response)=>{
      const items= response.data.collection.items
      const parsedImages = items.filter((i) => i.data[0].media_type==="image")
      setImages(parsedImages)
    }).catch((err) => {
      console.log(err);
    });
  }

  export default getImages