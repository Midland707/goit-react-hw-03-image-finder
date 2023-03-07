import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '32874218-f955783fbc8df841e2f172dbc';
axios.defaults.params = {
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: 'true',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?key=${key}&q=${query}&page=${page}`);
  console.log('data =', data);
  return data;
};

// const BASE_URL = 'https://pixabay.com/api/';
// const key = '32874218-f955783fbc8df841e2f172dbc';
// const imgOnPage = 40;
// let pageNumber = 1;
// https://pixabay.com/api/?q=cat&page=1&key=32874218-f955783fbc8df841e2f172dbc&image_type=photo&orientation=horizontal&per_page=12
// `${BASE_URL}?key=${key}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${imgOnPage}&page=${pageNumber}`
