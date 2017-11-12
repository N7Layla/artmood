import axios from 'axios';
//import {key} from '../secret';

let secret = process.env.KEY;

const baseUrl = 'https://api.harvardartmuseums.org/object?hasimage=1&sort=random'

const GET_ARTWORK = 'GET_ARTWORK';
const GET_COLOR = 'GET_COLOR';

const getArtwork = art => ({type: GET_ARTWORK, art})
const getColor = art => ({type: GET_COLOR, art})

export const fetchArt = (mood) => (dispatch) => {
  //&size=1
  console.log("mood=", mood)
  console.log(secret)
  axios.get(baseUrl + `&keyword=${mood}&` + secret)
  .then(res => dispatch(getArtwork(res.data.records.filter(piece => piece.images.length > 0))))
  .catch(err => console.error(err))
}

export const fetchColor = (color) => (dispatch) => {
  console.log("color=", color)
  color = "#" + color.toLowerCase();
  axios.get(baseUrl + "&color=any&size=50&" + secret)
  .then(res => dispatch(getColor(res.data.records.filter(piece => piece.colors.some(col => col.css3 === color) && piece.images.length > 0))))
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
