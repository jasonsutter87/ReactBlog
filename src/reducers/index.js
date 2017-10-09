import {
  INCREASE_COUNT,
  ADD_TO_POSTS,
} from '../constants';

const initialState = {
  count: 0,
  posts: [{id: '9b249b73', title:'first post!',source_url:'http://www.google.com', contents:'ZOMG first post'}],
};

function BlogReducer(state = initialState, action) {
  const { id, title, contents, count } = action;
  switch (action.type) {
    case INCREASE_COUNT:
        return Object.assign({}, state, { count });
    case ADD_TO_POSTS:
      return {
       ...state,
       posts: [{
         id,
         title,
         contents,
       }, ...state.posts],
     };
    default:
      return state;
  }
}

export default BlogReducer;
