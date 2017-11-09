import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchArt} from './store/art'

class Art extends Component {
  componentWillMount() {
    this.props.fetchArt()
  }
  render() {
    let test = this.props.art.records ? this.props.art.records[0].images[0].baseimageurl : ''
    console.log("props???", test)
    const art = this.props.art.records;
    return (
        <div className="App-intro">
        { art ?
          art.map(item =>
        <ul key={item.id}>
            <li>{item.title}</li>
            {item.images[0] ? <img alt={item.title} src={item.images[0].baseimageurl} /> : ''}
         </ul>
          ) : <br />
        }
        </div>
    );
  }
}

const mapStateToProps = ({art}) => ({art})
const mapDispatchToProps = {fetchArt}

export default connect(mapStateToProps, mapDispatchToProps)(Art);
