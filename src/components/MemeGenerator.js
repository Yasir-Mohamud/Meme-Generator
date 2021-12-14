import React, { useState } from "react";
import Data from "../memesData";

export default function MemeGenerator() {
  const [allMemeImage, setAllMemeImage] = useState(Data);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * (memesArray.length - 1));
    return setMeme((prev) => {
      return (prev = {
        ...prev,
        randomImage: memesArray[randomNumber].url,
      });
    });
  }

  return (
    <main className="meme">
      <form className="meme--form">
        <div className="meme--input">
          <input
            className="meme--input--left"
            type="text"
            placeholder="input"
          />
          <input type="text" placeholder="input" />
        </div>

        <button className="meme--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <img className="meme--image" src={meme.randomImage} alt="" />
    </main>
  );
}
