// ChuckNorrisJokes.js
import React, { useState, useEffect } from 'react';

const ChuckNorrisJokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random/5');
        if (!response.ok) {
          throw new Error('Failed to fetch jokes');
        }
        const data = await response.json();
        setJokes(data.value);
      } catch (error) {
        console.error('Error fetching jokes:', error.message);
      }
    };

    fetchJokes();

    // Clean up function (optional)
    return () => {
      // Any cleanup code goes here
    };
  }, []);

  return (
    <div>
      <h2>Chuck Norris Jokes</h2>
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>{joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChuckNorrisJokes;