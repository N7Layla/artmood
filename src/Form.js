import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import {fetchArt} from './store/art'
import Art from './Art'

class Form extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    this.props.fetchArt(evt.target.mood.value)
    evt.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="form-text"> I am feeling </label> <input name="mood" type="text" /> <label className="form-text"> today.</label>
          <input className="form-input" type="submit" value="Submit" />
        </form>
        <Art />
      </div>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = { fetchArt }

export default connect(mapStateToProps, mapDispatchToProps)(Form);
