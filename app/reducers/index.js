import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import directory from './directory';

export default combineReducers({
  messages,
  auth,
  directory
});
