import axios from 'axios';
import {key} from '../secret';

const baseUrl = 'https://api.harvardartmuseums.org/object?hasimage=1&sort=random'

const hash = '#';

const GET_ARTWORK = 'GET_ARTWORK';
const GET_COLOR = 'GET_COLOR';

const getArtwork = art => ({type: GET_ARTWORK, art})
const getColor = art => ({type: GET_COLOR, art})

export const fetchArt = (mood) => (dispatch) => {
  //&size=1
  console.log("mood=", mood)
  axios.get(baseUrl + `&keyword=${mood}&` + key)
  .then(res => dispatch(getArtwork(res.data.records.filter(piece => piece.images.length > 0))))
  //dispatch(getArtwork(res.data.records.filter(piece => piece.images.length > 0)))
  .catch(err => console.error(err))
}

export const fetchColor = (color) => (dispatch) => {
  console.log("color=", color)
  axios.get(baseUrl + `&color=${color}&` + key)
  .then(res => console.log(res.data.records))
  //dispatch(getColor(res.data))
  .catch(err => console.error(err))
}

export default function reducer(art = {}, action) {
  switch (action.type) {
    case GET_ARTWORK:
      return action.art
    case GET_COLOR:
      return action.art
    default:
      return art
  }
}
