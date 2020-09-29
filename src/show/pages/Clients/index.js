import List from './view';
import { connect } from 'react-redux';
import { getClients } from '../../../process/redux/actions/clientActions';

export default connect(
  state => ({
    clients: state.client.clients
  }),
  {getClients}
)(List);
