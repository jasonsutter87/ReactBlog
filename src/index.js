import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BlogReducer from './reducers';
import {  Route, BrowserRouter } from 'react-router-dom';
import { loadState, saveState} from './localStorage'
const persistedState = loadState();

const store = createStore(
  BlogReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Post = function(props){
  let _id = props.match.params.postId
  let obj = store.getState().posts.find(ele => ele.id === _id)
  return(
    <div>
      <div>
        <header className="masthead">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-heading">
                <h1>{obj.title}</h1>
                <span className="meta">Posted on: {'\t'}
                {obj.date}</span>
              </div>
            </div>
          </div>
          </div>
        </header>
      </div>
      <div>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>{obj.contents}</p>
            </div>
          </div>
        </div>
      </article>
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
  )
}

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/posts/:postId' component={Post} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
