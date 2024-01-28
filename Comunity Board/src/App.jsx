import React, { useState } from 'react';
import './App.css';
import topImage from "/Resources/Joke.jpg";

const App = () => {
  const dadJoke = [
    { name: "Gravity Book", category: "Science Jokes", image: "Resources/donkey.jpg" },
    { name: "Lifesaver Inventor", category: "One-liners", image: "Resources/JokeVault.jpg" },
    { name: "Award Winning Scarecrow", category: "Occupation Jokes", image: "Resources/Award.jpg" },
    { name: "Construction Delay", category: "Puns", image: "Resources/Shrek.jpg" },
    { name: "Piano Hands", category: "Music Jokes", image: "Resources/Music.jpg" },
    { name: "Animal Talk", category: "Animal Jokes", image: "Resources/Animal.jpg" },
    { name: "Fruity Pun", category: "Food Jokes", image: "Resources/Food.jpg" },
    { name: "Mathematical Laughter", category: "Math Jokes", image: "Resources/Math.jpg" },
    { name: "Historical Humor", category: "History Jokes", image: "Resources/History.jpg" },
    { name: "Techy Giggle", category: "Technology Jokes", image: "Resources/Tech.jpg" },
   
  ];

  const jokesContent = {
    "Puns": "I told my wife she should embrace her mistakes. She gave me a hug.",
    "One-liners": "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Animal Jokes": "What do you call a fish wearing a crown? A kingfish!",
    "Food Jokes": "I'm on a seafood diet. I see food and I eat it.",
    "Music Jokes": "Why did the musician get locked out of their house? Because they left the keys in the piano!",
    "Occupation Jokes": "Why don't scientists trust atoms? Because they make up everything!",
    "Science Jokes": "Did you hear about the famous microbiologist who visited 30 different countries and spoke 6 languages? He was a man of many cultures.",
    "Math Jokes": "Why was the math book sad? Because it had too many problems.",
    "Sports Jokes": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "History Jokes": "I asked my history teacher how he liked his new job. He said it's all in the past.",
    "Technology Jokes": "Why was the computer cold? It left its Windows open."
  };

  const [jokesState, setJokesState] = useState({});

  const handleViewJoke = (category) => {
    setJokesState(prevState => ({
      ...prevState,
      [category]: jokesContent[category]
    }));
  };

  return (
    <div className="App">
      {/* Add image at the top of the page */}
      <img src={topImage} alt="Top Image" className="top-image"/>
      <h1>Dad Joke of the Day</h1>
      <div className="dad-joke-container">
        {dadJoke.map(joke => (
          <div className="dad-joke-item" key={joke.name}>
            <img src={joke.image} alt={joke.name} className="dad-joke-image" />
            <h2>{joke.name}</h2>
            <p>{joke.category}</p>
            <button className="view-joke-button" onClick={() => handleViewJoke(joke.category)}>View Joke</button>
            {/* Render the joke for this category if available */}
            {jokesState[joke.category] && (
              <div className="joke-display">
                <p>{jokesState[joke.category]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;