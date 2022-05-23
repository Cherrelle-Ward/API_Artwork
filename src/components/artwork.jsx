import { useState, useEffect } from "react";
import react from "react";
import "../App.css";

const Artwork = ({
  error,
  setError,
  imageId,
  setImageId,
  setIiifUrl,
  iiifUrl,
}) => {
  //! Add Handle

  let pageNum = Math.floor(Math.random() * 5000) + 1;

  //! FETCH
  const fetchImg = async () => {
    try {
      setError(false);
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks?fields=id,artist_title,title,artist_display,image_id&limit=10&page=${pageNum}`
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
    <div className="tile-container">
      {imageId.map((item, index) => {
        return (
          <div className="tile">
            <h1> {item.title} </h1>
            <h2>By {item.artist_title}</h2>
            <p>{item.artist_display}</p>
            <img
              key={index}
              src={`${iiifUrl}/${item.image_id}/full/843,/0/default.jpg`}
              alt="Artwork"
            />{" "}
          </div>
        );
      })}

      <button onClick={fetchImg}>Next Page</button>
    </div>
  );
};

export default Artwork;
