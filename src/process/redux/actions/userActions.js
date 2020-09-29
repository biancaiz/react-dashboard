import axios from 'axios';
import { API_SERVER } from '../../constants';

export const login = (user, history) => dispatch => {
  axios.post(`${API_SERVER}/v2/sessions`, {session: {...user}})
    .then(response => {
      const authToken = response.data.data.attributes.auth_token;
      setAuthorizationHeader(authToken);
      dispatch({type: 'SET_USER', payload: response.data})
      history.push('/home')
    })
}

export const getUsers = () => dispatch => {
  axios.get(`${API_SERVER}/v2/users`, { headers: authHeader() })
    .then(response => {
      dispatch({type: 'SET_USERS', payload: response.data})
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

const setAuthorizationHeader = token => {
  const auth_token = `Bearer ${token}`
  localStorage.setItem('auth_token', auth_token);
  axios.defaults.headers.common['Authorization'] = auth_token;
}
