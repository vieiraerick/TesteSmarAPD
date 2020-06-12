import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import book from './book/sagas';

export default function* rootSaga() {
  return yield all([auth, book]);
}
