import {
  INCREASE_COUNT,
  ADD_TO_POSTS,
} from '../constants';

const initialState = {
  count: 0,
  posts: [{title:'first post!',source_url:'http://www.google.com', contents:'ZOMG first post'}],
};

function BlogReducer(state = initialState, action) {
  const { title, source_url, contents, count } = action;
  switch (action.type) {
    case INCREASE_COUNT:
        return Object.assign({}, state, { count });
    case ADD_TO_POSTS:
      return {
       ...state,
       posts: [{
         title,
         source_url,
         contents,
       }, ...state.posts],
     };
    default:
      return state;
  }
}

export default BlogReducer;
