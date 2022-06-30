import { useState, useEffect } from "react";
import Artwork from "./components/artwork";
import { faker } from "@faker-js/faker";

function App() {
  const [imageId, setImagieId] = useState([]);
  const [iiifUrl, setIiifUrl] = useState([]);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const addFakerData = (data) => {
    let fakerData = faker.commerce.price((10, 20));
    console.log(fakerData, "i am faker data");
    // try {
    //   for (let i = 0; i < data.length; i++) {
    //     data[i].price = faker.commerce.price();
    //   }
    //   return data;
    //   console.log(data, "i am faker data");
    // } catch (error) {
    //   console.log(error, "i am error");
    // }
  };

  useEffect(() => {
    // ! calling the function
    addFakerData();
  }, []);

  return (
    <div className="App">
      <div className="heading">
        <h1>Welcome to our art store</h1>
      </div>

      <Artwork
        imageId={imageId}
        setImageId={setImagieId}
        iiifUrl={iiifUrl}
        setIiifUrl={setIiifUrl}
        setError={setError}
      />
    </div>
  );
}

export default App;
