import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import {fetchArt} from './store/art'
import Art from './Art'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      mood: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    console.log(evt.target.mood.value)
    this.setState = {
      submitted: true,
      mood: evt.target.mood.value
    }
    fetchArt(evt.target.mood.value)
    evt.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> I am feeling </label> <input name="mood" type="text" /> <label> today.</label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.submitted && (
          <Redirect to={'/art'} />
        )}
      </div>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = { fetchArt }

export default connect(mapStateToProps, mapDispatchToProps)(Form);
