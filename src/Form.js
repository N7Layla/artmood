import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {fetchArt, fetchColor} from './store/art'
import Art from './Art'


const style = {
    fontSize: 'x-large',
    align: 'center',
    underlineStyle: {borderColor: 'orange500'},
    inputStyle: {textAlign: 'center' },
    buttonStyle: { margin: 10, backgroundColor: 'blue500'}
  }

class Form extends Component {
  constructor() {
    super()
    this.handleMoodSubmit = this.handleMoodSubmit.bind(this);
    this.handleColorSubmit = this.handleColorSubmit.bind(this);
  }

  handleMoodSubmit(evt) {
    this.props.fetchArt(evt.target.mood.value)
    evt.preventDefault();
  }

  handleColorSubmit(evt) {
    //console.log("color", evt.target.colorpicker.value)
    let color = evt.target.colorpicker.value;
    console.log("color=", color)
    this.props.fetchColor(color)
    evt.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleMoodSubmit}>
          <div><label className="form-text"> I am feeling </label> <TextField underlineStyle={style.underlineStyle} inputStyle={style.inputStyle} style={style} className="form-input" name="mood" type="text" /> <label className="form-text"> today.</label></div>
          <div><RaisedButton label="Get Art" type="submit" value="Submit" style={style.buttonStyle} primary={true} /></div>
        </form>
        <form onSubmit={this.handleColorSubmit}><label>Or, search by color: </label><input name="colorpicker" className="jscolor" /><input type="submit" value="Submit" /></form>
        <Art />
      </div>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = { fetchArt, fetchColor }

export default connect(mapStateToProps, mapDispatchToProps)(Form);
