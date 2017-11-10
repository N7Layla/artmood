import axios from 'axios';
import {key} from '../secret';


const baseUrl = 'https://api.harvardartmuseums.org/object?hasimage=1'

const GET_ARTWORK = 'GET_ARTWORK';

const getArtwork = art => ({type: GET_ARTWORK, art})

export const fetchArt = (mood) => (dispatch) => {
  console.log("mood=", mood)
  axios.get(baseUrl + `&keyword=${mood}&sort=random&hasimage=1&size=1&` + key)
  .then(res => dispatch(getArtwork(res.data)))
  .catch(err => console.error(err))
}

export default function reducer(art = {}, action) {
  switch (action.type) {
    case GET_ARTWORK:
      return action.art
    default:
      return art
  }
}
