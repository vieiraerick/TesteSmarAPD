import produce from 'immer';

const INITIAL_STATE = {
  booking: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.booking = action.payload.user;
        break;
      }
      case '@book/BOOK_ROOM_SUCCESS': {
        draft.booking = action.payload.booked;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.booking = null;
        break;
      }
      default:
    }
  });
}
