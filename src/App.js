import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
import Art from './Art'
import Form from './Form'
import {fetchArt} from './store/art'

class App extends Component {
  componentWillMount() {
    this.props.fetchArt()
  }
  render() {
    return (
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Switch>
            <Route path="/art" component={Art} />
            <Route path="/" component={Form} />
          </Switch>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = ({art}) => ({art})
const mapDispatchToProps = {fetchArt}

export default connect(mapStateToProps, mapDispatchToProps)(App);
