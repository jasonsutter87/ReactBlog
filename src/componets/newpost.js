import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
const uuidV4 = require("uuid-v4")
const $ = require("jquery");

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      contents: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    if(event.target.name === 'title') {
      this.setState({title: event.target.value})
    }else {
      this.setState({contents: event.target.value})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addToCount(this.props.count)
    this.props.addToPosts(uuidV4().split('-')[0], new Date().toDateString() ,this.state.title, this.state.contents);
    $('#modalNewPostClose').click()
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Title:</label><br />
          <input className="form-control"  type="text" name="title" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Content:</label><br />
          <textarea className="form-control" type="text_area" rows="5" name="contents" onChange={this.handleChange}/>
        </div>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


function mapStateToProps (state){
  return {
    count: state.count
  }
}

export default connect(
  mapStateToProps,
  Actions
)(NewPost);
