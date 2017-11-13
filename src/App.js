import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Art from './Art'
import Form from './Form'
import {fetchArt} from './store/art'

const style = {
  backgroundColor: 'cyan500'
}

class App extends Component {
  render() {
    return (
    <Router history={history}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="App">
          <header className="App-header" style={style}>
            <h1 className="App-title">ARTmood</h1>
            <h2 className="App-byline">Project by Layla Hedges • <a href="https://github.com/N7Layla/artmood">GitHub</a></h2>
          </header>
            <Switch>
              <Route path="/art" component={Art} />
              <Route path="/" component={Form} />
            </Switch>
        </div>
      </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = ({art}) => ({art})
const mapDispatchToProps = {fetchArt}

export default connect(mapStateToProps, mapDispatchToProps)(App);
