import {
  INCREASE_COUNT,
  ADD_TO_POSTS,
} from '../constants';

const initialState = {
  posts: [{id: '9b249b73', date: new Date().toDateString().toString(), title:'first post!',source_url:'http://www.google.com', contents:'ZOMG first post'}],
};

function BlogReducer(state = initialState, action) {
  const { id, date, title, contents } = action;
  switch (action.type) {
    case ADD_TO_POSTS:
      return {
       ...state,
       posts: [{
         id,
         date,
         title,
         contents,
       }, ...state.posts],
     };
    default:
      return state;
  }
}

export default BlogReducer;
