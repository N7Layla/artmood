import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchArt} from './store/art'

class Art extends Component {
  componentWillMount() {
    //this.props.fetchArt(this.props.mood)
  }
  render() {
  console.log("???", this.props.mood)
    let art = this.props.art.records;
    let piece = this.props.art.records ? this.props.art.records[0] : ''
    console.log("props???", this.props.art.records)
    return (
        <div className="App-intro">
        { art ?
          <div>
        <div>{piece.title}</div>
        <div>{piece.images[0] ? <img alt={piece.title} src={piece.images[0].baseimageurl} /> : ''}</div>
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
