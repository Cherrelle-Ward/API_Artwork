import { useState, useEffect } from "react";
import Artwork from "./components/artwork";

function App() {
  const [imageId, setImagieId] = useState([]);
  const [iiifUrl, setIiifUrl] = useState([]);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  // useEffect(() => {
  //   // ! calling the function
  //   fetchImg();
  // }, []);

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
