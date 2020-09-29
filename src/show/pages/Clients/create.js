import List from './view';
import { connect } from 'react-redux';
import { createClient } from '../../../process/redux/actions/clientActions';

export default connect(
  state => ({}),
  {createClient}
)(List);
