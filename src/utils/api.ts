import axios from 'axios';
const myKey = import.meta.env.VITE_AUTORIZATION_KEY;

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${myKey}`,
  },
};

// fetch()
//   .then(res => res.json())
//   .then(res => console.log(res))
//     .catch(err => console.error(err));

function getData(query: string) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${query
        .split(' ')
        .join('+')
        .trim()}`,
      options
    )
    .then(function (response) {
      console.log(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getTranding() {
  return axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
}

function getMovieById(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
}

function getImageConfiguration() {
  return axios.get('https://api.themoviedb.org/3/configuration', options);
} // romove this maybe

function getReviews(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
}

function getCredits(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
}

function getMoviesListByName(name) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
    options
  );
}

export {
  getData,
  getTranding,
  getMovieById,
  getImageConfiguration,
  getReviews,
  getCredits,
  getMoviesListByName,
};
