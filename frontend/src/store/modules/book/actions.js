export function bookRoomRequest(data) {
  return {
    type: '@book/BOOK_ROOM_REQUEST',
    payload: { data },
  };
}

export function bookRoomSuccess(booked) {
  return {
    type: '@book/BOOK_ROOM_SUCCESS',
    payload: { booked },
  };
}

export function bookRoomFailure() {
  return {
    type: '@book/BOOK_ROOM_FAILURE',
  };
}
