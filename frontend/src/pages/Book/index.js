import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';

import api from '~/services/api';

import { bookRoomRequest } from '~/store/modules/book/actions';

import 'react-datepicker/dist/react-datepicker.css';

import { Container, Modal } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  room: Yup.string().required('A sala é obrigatória'),
});

export default function Book() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function loadRooms() {
      const response = await api.get('rooms');

      setRooms(response.data);
    }

    loadRooms();
  }, []);

  const dispatch = useDispatch();

  function handleSubmit({
    title,
    room,
    startTime = startDate,
    endTime = endDate,
  }) {
    dispatch(bookRoomRequest({ title, room, startTime, endTime }));
  }

  function handleSuccessModal() {
    document.querySelector("div[id='success']").classList.add('hide');
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h2>Agende uma reunião</h2>
        <p>Título da reunião</p>
        <Input name="title" placeholder="Título da Reunião" />
        <p>Sala a ser reservada</p>
        <Input name="room" list="rooms" placeholder="Escolha uma sala" />
        <datalist id="rooms">
          {rooms.map((room) => (
            <option key={room.id} value={room.name}>
              {room.name}
            </option>
          ))}
        </datalist>
        <p>Hora de início</p>
        <DatePicker
          name="startDatePicker"
          autoComplete="off"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="time"
          dateFormat="dd/MM/yyyy 'às' HH:mm"
        />
        <p>Hora de término</p>
        <DatePicker
          name="endDatePicker"
          autoComplete="off"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="time"
          dateFormat="dd/MM/yyyy 'às' HH:mm"
        />

        <button id="submit" type="submit">
          Reservar Sala
        </button>
      </Form>
      <Modal className="hide" id="success">
        <section>
          <p>Agendamento concluído</p>
          <button onClick={handleSuccessModal}>X</button>
        </section>
      </Modal>
    </Container>
  );
}
