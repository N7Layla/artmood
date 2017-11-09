import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    return(
      <div>
        <form>
          <label> I am feeling </label> <input type="text" />
        </form>
      </div>
    )
  }
}

mapDispatchToProps = {}
