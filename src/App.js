import React, { Component } from 'react';
import * as Actions from './actions';
import { connect } from 'react-redux';


function BlogTitle(props){
  return <input id='blogTitle' type='text' onChange={props.handleChange} />
}
function BlogSource_Url(){

}
function BlogContents(){

}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.props.addToCount(this.props.count));
    console.log(this.props.addToPosts('my title','www.google.com','sweet contents'));
  }


  render() {
    return (
      <div>
        <div>
        count: {this.props.count}
        </div>
        <div>
        </div>
        <div>
          <input id='button' type='button' value='Push' onClick={this.handleClick}/>
        </div>
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
)(App);
