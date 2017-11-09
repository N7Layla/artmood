import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import Art from './Art'
import {fetchArt} from './store/art'

class App extends Component {
  componentWillMount() {
    this.props.fetchArt()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Art />
      </div>
    );
  }
}

const mapStateToProps = ({art}) => ({art})
const mapDispatchToProps = {fetchArt}

export default connect(mapStateToProps, mapDispatchToProps)(App);
