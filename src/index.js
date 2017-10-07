import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BlogReducer from './reducers';
import { Router, Route, BrowserRouter } from 'react-router-dom';

const store = createStore(
  BlogReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



function NewPost(){
  return <h1>new post</h1>
}




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/new' component={NewPost} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

