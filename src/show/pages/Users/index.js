import List from './view';
import { connect } from 'react-redux';
import { getUsers } from '../../../process/redux/actions/userActions';

export default connect(
  state => ({
    users: state.user.users
  }),
  {getUsers}
)(List);
