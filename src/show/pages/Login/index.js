import Login from './view';
import { connect } from 'react-redux';
import { login } from '../../../process/redux/actions/userActions';

export default connect(
  state => ({}),
  {login}
)(Login);
