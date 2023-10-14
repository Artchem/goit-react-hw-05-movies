import axios from 'axios';
// https://api.themoviedb.org/3/movie/popular/?api_key=
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.headers.common['key'] = '38837496-e09cca1b216ed759136fb60be';
// const API_KEY = 'b2293c9f70e699fcb144268897e83a3f';
// const params = {
//   key: API_KEY,
// image_type: 'photo',
// orientation: 'horizontal',
// safesearch: true,
// per_page: 12,
// };
export async function fetchMovie(query) {
  const resp = await axios.get(
    `${query}?api_key=b2293c9f70e699fcb144268897e83a3f`
  );
  const data = resp.data;
  // console.log(data);
  return data;
}

export async function getMoviesByQuery(query) {
  const resp = await axios.get(
    `search/movie?query=${query}&api_key=b2293c9f70e699fcb144268897e83a3f`
  );
  const data = resp.data;
  // console.log(data);
  return data;
}
