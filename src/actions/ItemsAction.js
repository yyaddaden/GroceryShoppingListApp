import axios from 'axios';

const baseUrl =
  'https://yyaddaden.pythonanywhere.com/api/823a32e2-4a1f-4ff3-b28e-5a9f2c600a63';

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
