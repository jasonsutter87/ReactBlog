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

export function addToPosts(title, source_url, contents) {
  return {
     type: ADD_TO_POSTS,
     title,
     source_url,
     contents,
   };
}
