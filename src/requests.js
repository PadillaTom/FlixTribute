const API_KEY = '1c07d5d226aba14a4bb5b1fe1e5bcab5';

// View the TMDB DOCs to see how to make Requests:
// Here are a few URLs examples:
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNewReleases: `/discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020
`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
