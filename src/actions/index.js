import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123';


export function fetchPosts(){
  alert('sfsdf');

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  //const request = axios.get('http://reduxblog.herokuapp.com/api/posts?key=123');

  console.log(request);

  return {
    type:FETCH_POSTS,
    payload: request
  };
}
