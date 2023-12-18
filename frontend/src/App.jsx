import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Fix: Add 'axios' after 'import' keyword

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data); // Fix: Correct variable name to setJokes
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error); // Fix: Log the error message
      });
  }, []); // Fix: Add an empty dependency array to run the effect only once

  return (
    <>
      <div>
        <h1>Welcome to Jokes world </h1>
        <p>Jokes {jokes.length}</p> {/* Fix: Correct variable name to jokes.length */}
        {jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
