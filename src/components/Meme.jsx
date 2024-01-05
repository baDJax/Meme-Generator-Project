import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((memeData) => setAllMemes(memeData.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getImage() {
    const random = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[random].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }
  return (
    <div>
      <div className="meme-form" action="">
        <div className="meme-input">
          <input
            className="me-3"
            type="text"
            placeholder="text on top"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="text at bottom"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={getImage} type="submit">
          Get a new meme image🥃
        </button>
        <div className="meme-image ">
          <img src={meme.randomImage} className="meme" alt="" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Meme;
