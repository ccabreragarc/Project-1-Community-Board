import './App.css';

const App = () => {
  // Add an array of dad jokes objects with name, cuisine, and image
  const dadJoke = [
    { name: "Gravity Book", category: "Science Jokes", image: "Resources/donkey.jpg" },
    { name: "Lifesaver Inventor", category: "One-liners", image: "Resources/JokeVault.jpg" },
    { name: "Award Winning Scarecrow", category: "Occupation Jokes", image: "path-to-occupation-joke-image" },
    { name: "Construction Delay", category: "Puns", image: "path-to-pun-joke-image" },
    { name: "Piano Hands", category: "Music Jokes", image: "path-to-music-joke-image" },
    { name: "Animal Talk", category: "Animal Jokes", image: "path-to-animal-joke-image" },
    { name: "Fruity Pun", category: "Food Jokes", image: "path-to-food-joke-image" },
    { name: "Mathematical Laughter", category: "Math Jokes", image: "path-to-math-joke-image" },
    { name: "Historical Humor", category: "History Jokes", image: "path-to-history-joke-image" },
    { name: "Techy Giggle", category: "Technology Jokes", image: "path-to-technology-joke-image" },
    // ... add more dad jokes following the same structure
  ];
  
    
  return (
    <div className="App">
      <h1>Dad Joke of the Day</h1>
      <div className="dad-joke-container">
        {dadJoke.map(joke => (
          <div className="dad-joke-item" key={joke.name}>
            <img src={joke.image} alt={joke.name} className="dad-joke-image" />
            <h2>{joke.name}</h2>
            <p>{joke.type}</p>
            <button className="view-joke-button">View Joke</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
