import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchArt} from './store/art'
import FlatButton from 'material-ui/FlatButton';

class Art extends Component {
  render() {
    const style = {
      button: {
        textTransform: 'uppercase'
      }
    }
    let art = this.props.art
    let piece = art[Math.floor(Math.random() * art.length)]
    let tweetUrl = 'https://twitter.com/intent/tweet?text=I love this art! '
    return (
        <div className="App-intro">
        { piece ?
          <div>
        <div className="art-caption">{piece.images[0] ?
          <div>
          <img height="450px" alt={piece.title} src={piece.images[0].baseimageurl || piece.images[0].iiifbaseuri} />
        <div>{piece.title}, {piece.people ? piece.people.filter(person => person.role === "Artist")[0].displayname || piece.people[0].displayname : ''}, {piece.dated || piece.century}, {piece.culture}, {piece.technique}</div>
        <div><small>{piece.creditline}</small></div>
        <div><FlatButton style={style.button}><a href={piece.url}>Read More About This Piece</a></FlatButton></div>
        <div><FlatButton style={style.button} onClick={() => window.open(tweetUrl + "'" + piece.title + "' by " + piece.people[0].name + " " + piece.url + " (via %23ARTmood)")}>Share on Twitter</FlatButton></div>
        </div>
        : 'Apologies, try again.'}</div>
        </div>
           : <br />
        }
        </div>
    )
  }
}

const mapStateToProps = ({art}) => ({art})
const mapDispatchToProps = {fetchArt}

export default connect(mapStateToProps, mapDispatchToProps)(Art);
