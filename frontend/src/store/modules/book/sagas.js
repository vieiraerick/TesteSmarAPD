import { takeLatest, call, put, all } from 'redux-saga/effects';
import { addHours } from 'date-fns';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { bookRoomSuccess, bookRoomFailure } from './actions';

export function* bookRoom({ payload }) {
  try {
    const { title, room, start, end } = payload.data;
    const now = new Date();
    const limit = addHours(now, 2);

    if (!start) {
      document
        .querySelector("input[name= 'startDatePicker']")
        .classList.add('uncorrect');

      toast.error('Selecione uma data de início');

      return;
    }

    if (!end) {
      document
        .querySelector("input[name= 'endDatePicker']")
        .classList.add('uncorrect');

      toast.error('Selecione uma data de término');

      return;
    }

    if (start < limit) {
      document
        .querySelector("input[name= 'startDatePicker']")
        .classList.add('uncorrect');

      toast.error('A reunião deve ser agendada com 2 horas de antecedência');

      return;
    }
    if (start >= end) {
      document
        .querySelector("input[name= 'endDatePicker']")
        .classList.add('uncorrect');

      toast.error('O término da reunião deve ser posterior ao início');

      return;
    }

    const reunion = {
      title,
      room,
      start,
      end,
    };

    const response = yield call(api.put, 'users', reunion);

    document.querySelector("div[id='success']").classList.remove('hide');

    yield put(bookRoomSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira os seus dados!');

    yield put(bookRoomFailure());
  }
}

export default all([takeLatest('@book/BOOK_ROOM_REQUEST', bookRoom)]);
