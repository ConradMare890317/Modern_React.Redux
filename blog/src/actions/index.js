import jsonPlaceholder from '../apis/jsonPlaceholder';


// Bad practice!!!!

// export const fetchPosts = async () => {
//  const response = await jsonPlaceholder.get('./posts');


export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('./posts');

  dispatch({ type: 'FETCH_POSTS', payload: response })
  };
