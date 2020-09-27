import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';

function Banner() {
  // State:
  const [movie, setMovie] = useState([]);

  // Fetching Data Outside our web (ASYNC)
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchTopRated);
      //
      // SetMovie to be --> Random inside our Requested Array
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchMovie();
  }, []);

  //   console.log(movie); // Comprobamos que Funcione

  // Main:
  return (
    <React.Fragment>
      <div
        className='banner'
        styles={{
          backgroundSize: 'cover',
          backgroundImage: `url (
              "https://image.tmdb.org/t/p/${movie?.backdrop_path}"
              )`,
          backgroundPosition: 'center center',
        }}
      >
        <div className='banner-info-container'>
          <h1 className='banner-title'>
            {movie?.title || movie?.name || movie?.original_title}
          </h1>
          <div className='banner-btns'>
            <button className='banner-btn'>Play</button>
            <button className='banner-btn'>Add to My List</button>
          </div>
          <p className='banner-desc'>{movie?.overview}</p>
        </div>
        <div className='banner-fade-bottom'></div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
