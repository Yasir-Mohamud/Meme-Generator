import React, { useState } from "react";
import Data from "../memesData";

export default function MemeGenerator() {
  const [memeImage, setMemeImage] = useState(
    "https://i.imgflip.com/1g8my4.jpg"
  );

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = Data.data.memes;
    const randomNumber = Math.floor(Math.random() * (memesArray.length - 1));
    return setMemeImage(memesArray[randomNumber].url);
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
      <img className="meme--image" src={memeImage} alt="" />
    </main>
  );
}
