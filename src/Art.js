import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchArt} from './store/art'

class Art extends Component {
  render() {
    //let art = this.props.art.records;
    let piece = this.props.art.records ? this.props.art.records[0] : ''
    console.log("props???", this.props.art.records)
    return (
        <div className="App-intro">
        { piece ?
          <div>
        <div>{piece.images ?
          <div>
          <img width="500px" alt={piece.title} src={piece.images[0].baseimageurl || piece.images[0].iiifbaseuri} />
        <div>{piece.title}</div>
        <div>{piece.people ? piece.people.filter(person => person.role === "Artist")[0].displayname : ''}</div>
        <div>{piece.dated || piece.century} / {piece.culture} / {piece.technique}</div>
        <div>{piece.creditline}</div>
        <div>Harvard Art Museums | <a href={piece.url}>Read More</a></div>
        </div>
        : 'Apologies, try again.'}</div>
        </div>
           : <br />
        }
        </div>
    );
  }
}

const mapStateToProps = ({art}) => ({art})
const mapDispatchToProps = {fetchArt}

export default connect(mapStateToProps, mapDispatchToProps)(Art);
