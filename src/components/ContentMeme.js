import React, { useState } from "react";
import "../components/ContentMeme.css";
import memesData from "./memesData";

const ContentMeme = () => {
  const [allMemesData, setAllMemesData] = useState(memesData);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function newMeme() {
    let memeArray = allMemesData.data.memes;
    let randNumber = Math.floor(Math.random() * memeArray.length);
    let url = memeArray[randNumber].url;
    setMeme((prev) => ({ ...prev, imageUrl: url }));
    console.log(meme);
  }

  return (
    <main>
      <div className="form">
        <input className="input1" type="text" placeholder="Bottom text"></input>
        <input className="input2" type="text" placeholder="Bottom text"></input>
        <button onClick={newMeme} className="form-button">
          Get a new meme image
        </button>
      </div>
      <div className="img-container">
        <img className="meme-img" src={meme.imageUrl} />
      </div>
    </main>
  );
};

export default ContentMeme;

/* 

import React from "react";
import "../components/ContentMeme.css";
import { useState } from "react";
import memesData from "./memesData";


const ContentMeme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getImage() {
    let memesArray = allMemeImages.data.memes;
    let randNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randNumber].url;
    setMeme((prev) => ({ ...prev, randomImage: url }));
  }

  return (
    <main>
      <div className="main-content">
        <div className="form">
          <input
            className="input1"
            type="text"
            placeholder="Bottom text"
          ></input>
          <input
            className="input2"
            type="text"
            placeholder="Bottom text"
          ></input>
          <button onClick={getImage} className="form-button">
            Get a new meme image
          </button>
        </div>
        <div className="img-container">
          <img className="meme-img" src={meme.randomImage} />
        </div>
      </div>
    </main>
  );
};

export default ContentMeme;

*/
