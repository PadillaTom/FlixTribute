import React, { useState, useEffect } from 'react';
import axios from '../axios';

//Base URL for Images Path --> "/4egSeI3qLvY22lHn4yIDrrU0ZNF.jpg"
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

function Row({ title, fetchUrl, isLargeRow }) {
  // State:
  const [movies, setMovies] = useState([]);

  // UseEffect: When ROW Loads: Make the request
  useEffect(() => {
    // Debemos usar ASYNC because we are requesting outside
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request); // Vemos si funciona (Array)
      // Populate our State:
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // This will run JUST ONCE when Component Loads (ROW) + Evertime Axios Link Changes
  }, [fetchUrl]);
  // console.log(movies); // Comprobamos dichos Destructured Arrays

  return (
    <React.Fragment>
      <div className='row-container'>
        <h2>{title}</h2>
        <div className='row-poster-container'>
          {movies.map((item) => (
            <img
              key={item.id}
              className={`row-poster-img ${isLargeRow && 'large-row'} `}
              src={`${imgBaseUrl}${
                isLargeRow ? item.poster_path : item.backdrop_path
              }`}
              alt={item.original_title}
            ></img>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Row;
