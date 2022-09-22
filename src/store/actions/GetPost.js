import axios from 'axios';

import { postError, postLoading, postSuccess } from '../slices/Posts';

export const getPosts = () => {
  return (dispatch) => {
    dispatch({ type: postLoading, payload: true });
    axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => {
        dispatch({ type: postSuccess, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: postError, payload: error });
      })
      .finally(() => {
        dispatch({ type: postLoading, payload: false });
      });
  };
};
