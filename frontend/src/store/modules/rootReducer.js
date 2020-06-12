import { combineReducers } from 'redux';

import auth from './auth/reducer';
import book from './book/reducer';

export default combineReducers({
  auth,
  book,
});
