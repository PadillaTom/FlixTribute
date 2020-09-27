import React, { useState, useEffect } from 'react';
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

//Base URL for Images Path --> "/4egSeI3qLvY22lHn4yIDrrU0ZNF.jpg"
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

function Row({ title, fetchUrl, isLargeRow }) {
  // State:
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

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

  // React Youtube:
  const opts = {
    height: '390',
    width: '100%',
    marginTop: '0.5rem',
    playerVars: {
      // URL
      autoplay: 1,
    },
  };
  // Functions:
  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      // React-MovieTrailer --> Will search for the Title online.
      movieTrailer(item.original_title || '')
        // If Found-->
        .then((url) => {
          // Youtube Dummy URL : https://www.youtube.com/watch?v=XtMThy8QKqU&t=9658s
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }) //Not Found --> Log Error
        .catch((error) => console.log(error));
    }
  };

  // Main:
  return (
    <React.Fragment>
      <div className='row-container'>
        <h2>{title}</h2>
        <div className='row-poster-container'>
          {movies.map((item) => (
            <img
              key={item.id}
              onClick={() => {
                handleClick(item);
              }}
              className={`row-poster-img ${isLargeRow && 'large-row'} `}
              src={`${imgBaseUrl}${
                isLargeRow ? item.poster_path : item.backdrop_path
              }`}
              alt={item.original_title}
            ></img>
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
      </div>
    </React.Fragment>
  );
}

export default Row;
