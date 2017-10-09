import React, { Component } from 'react';
import * as Actions from './actions';
import { connect } from 'react-redux';
import NewPost from './componets/newpost';
import './styles/clean-blog.css';


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
                <button type="button" id='modalNewPostClose' className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
        <div>
          <center>
            <ul>{postItems}</ul>
          </center>
        </div>
        <div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">

                    <li className="list-inline-item">
                      <a href="https://github.com/jasonsutter87">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">Copyright &copy; Jason Sutter 2017</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
    </div>
    );
  }
}


function mapStateToProps (state){
  return {
    count: state.count,
    posts: state.posts,
  }
}

export default connect(
  mapStateToProps,
  Actions
)(App);
