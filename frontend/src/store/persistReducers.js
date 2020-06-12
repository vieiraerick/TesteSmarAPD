import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'smarapd',
      storage,
      whitelist: ['auth', 'book'],
    },
    reducers
  );

  return persistedReducer;
};
