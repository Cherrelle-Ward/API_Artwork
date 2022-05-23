import { useState, useEffect } from "react";
import react from "react";
import "../App.css";
import { faker } from "@faker-js/faker";

const Artwork = ({
  error,
  setError,
  imageId,
  setImageId,
  setIiifUrl,
  iiifUrl,
}) => {
  const [moreInfo, setMoreInfo] = useState(false);

  let pageNum = Math.floor(Math.random() * 5000) + 1;

  //! FETCH
  const fetchImg = async () => {
    try {
      setError(false);
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks?fields=id,artist_title,title,artist_display,image_id&limit=12&page=${pageNum}`
      );
      if (res.status !== 200) {
        throw new Error("oops");
      }
      let data = await res.json();
      console.log(data, "i am res");
      setImageId(data.data);
      console.log(imageId, "i am artwork");

      setIiifUrl(data.config.iiif_url);
      console.log(iiifUrl, "i am iiifUrl");
    } catch (error) {
      console.log(error, "error");
      setError({ error: true, message: error.message });
    }
  };

  useEffect(() => {
    // ! calling the function
    fetchImg();
  }, []);

  return (
    <div className="main-container">
      <div className="main-tile-container">
        {imageId.map((item, index) => {
          return (
            <div className="tile">
              <h1> {item.title} </h1>
              <h2>By {item.artist_title}</h2>
              <p>{item.artist_display}</p>
              <p>
                Price : £
                {faker.datatype.number({
                  min: 100,
                  max: 10000,
                })}
              </p>
              <img
                key={index}
                src={`${iiifUrl}/${item.image_id}/full/843,/0/default.jpg`}
                alt="Artwork"
              />
              <button
                onClick={() => {
                  setMoreInfo(true);
                }}
              >
                More Info
              </button>
              {!moreInfo ? null : <div>hello</div>}
            </div>
          );
        })}
      </div>

      <div className="btn">
        <button onClick={fetchImg}>Next Page</button>
      </div>
    </div>
  );
};

export default Artwork;
