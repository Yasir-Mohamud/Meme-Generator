import React, { useState, useEffect } from "react";

export default function Meme() {
  // eslint-disable-next-line no-unused-vars
  const [allMemeImage, setAllMemeImage] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * (allMemeImage.length - 1));
    return setMeme((prev) => {
      return (prev = {
        ...prev,
        randomImage: allMemeImage[randomNumber].url,
      });
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    return setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImage(data.data.memes));
  }, []);

  return (
    <main className="main">
      <form className="form">
        <div className="form--input">
          <input
            className="form--input--left"
            type="text"
            placeholder="TOP TEXT"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="BOTTOM TEXT"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom"> {meme.bottomText}</h2>
      </div>
    </main>
  );
}
