import axios from 'axios';

const baseUrl =
  'https://to-do-list-rest-api.herokuapp.com/api/1af41d63-43ea-4693-b0d3-38b1f5753512';

export const getItems = () => {
  return dispatch => {
    axios.get(`${baseUrl}/tasks`).then(
      response => {
        dispatch({type: 'GET_ITEMS', payload: response.data});
      },
      error => {
        dispatch({type: 'GET_ITEMS', payload: []});
      },
    );
  };
};

export const addItem = title => {
  return dispatch => {
    axios
      .post(`${baseUrl}/tasks`, {title: title, status: false})
      .then(response => {
        dispatch(getItems());
      });
  };
};

export const removeItem = id => {
  return dispatch => {
    axios.delete(`${baseUrl}/task/${id}`).then(response => {
      dispatch(getItems());
    });
  };
};

export const editItem = (id, title, status) => {
  return dispatch => {
    axios
      .put(`${baseUrl}/task/${id}`, {title: title, status: status})
      .then(response => {
        dispatch(getItems());
      });
  };
};
