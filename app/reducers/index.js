import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import directory from './directory';
import { default as modals } from './modals';

export default combineReducers({
  messages,
  auth,
  directory,
  modals
});
