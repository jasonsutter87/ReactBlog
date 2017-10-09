import {
  INCREASE_COUNT,
  ADD_TO_POSTS,
} from '../constants';


export function addToCount(count) {
  return {
    type: INCREASE_COUNT,
    count: count + 1
  };
}

export function addToPosts(id, title, contents) {
  return {
     type: ADD_TO_POSTS,
     id,
     title,
     contents,
   };
}
