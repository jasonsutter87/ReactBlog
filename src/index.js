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
      <p>Id: {obj.id}</p>
      <p>title: {obj.title}</p>
      <p>content: {obj.contents}</p>
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
