import {
  ADD_TO_POSTS,
} from '../constants';

export function addToPosts(id, date, title, contents) {
  return {
     type: ADD_TO_POSTS,
     id,
     date,
     title,
     contents,
   };
}
