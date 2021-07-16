import jsonPlaceholder from '../apis/jsonPlaceholder';

// Bad practice!
// export const fetchPosts = async () => {
//  const response = await jsonPlaceholder.get('./posts');

export const fetchPosts = () => {
  const promise = jsonPlaceholder.get('./posts');

  return {
    type: 'FETCH_POSTS',
    payload: promise
  };
};
