import axios from 'axios';
import { API_SERVER } from '../../constants';

export const getClients = () => dispatch => {
  axios.get(`${API_SERVER}/v2/clients`, { headers: authHeader() })
    .then(response => {
      dispatch({type: 'SET_CLIENTS', payload: response.data})
    })
}

export const createClient = (data) => dispatch => {
  axios.get(`${API_SERVER}/v2/clients`, {
    headers: authHeader(),
    data: data
  })
    .then(response => {
      dispatch({type: 'CREATE_CLIENT', payload: response.data})
    })
}

export default function authHeader() {
  const token = localStorage.getItem('auth_token');

  if (token) {
    return { Authorization: token };
  } else {
    return {};
  }
}
