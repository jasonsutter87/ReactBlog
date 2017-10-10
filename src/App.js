import React, { Component } from 'react';
import * as Actions from './actions';
import { connect } from 'react-redux';
import NewPost from './componets/newpost';
import Footer from './componets/footer'
import './styles/clean-blog.css';


function Header() {
  return(
    <header className="masthead bg-home" style={{"background-image": './styles/home-bg.jpg'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>My Thoughts</h1>
              <span className="subheading">A blog for all of the things</span><br />
              <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#myModal">New Thought?</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function Modal() {
  return(
    <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog">

        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title center">New Post</h4>
          </div>
          <div className="modal-body">
            <NewPost />
          </div>
          <div className="modal-footer">
            <button type="button" id='modalNewPostClose' className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
  }


  render(props) {
    const posts = this.props.posts;
    const postItems = posts.map((post) =>
    <div>
      <div key={post.id.toString()} className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview">
              <a href={'/posts/'+ post.id}>
                <h2 className="post-title">
                  {post.title.slice(0,64)}
                </h2>
                <h3 className="post-subtitle">
                  {post.contents.slice(0,25)}..
                </h3>
              </a>
              <p className="post-meta">Posted on:{'\t'}
                {post.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
    );
    return (
      <div>
        <Header />
        <Modal />
        <div>
          <center>
            <ul>{postItems}</ul>
          </center>
        </div>
        <Footer />
    </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    posts: state.posts,
  }
}

export default connect(
  mapStateToProps,
  Actions
)(App);
