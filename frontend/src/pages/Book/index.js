import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';

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
  const [reunion, setReunion] = useState();

  const rooms = ['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5'];

  const dispatch = useDispatch();

  function handleSubmit({ title, room }) {
    setReunion({
      title,
      room,
      start: startDate,
      end: endDate,
    });
    dispatch(bookRoomRequest(reunion));
  }

  function handleSuccessModal() {
    document.querySelector("div[id='success']").classList.add('hide');
  }

  function handleFailureModal() {
    document.querySelector("div[id='failure']").classList.add('hide');
  }

  function handleAnotherRoom() {
    alert('Remarcar');
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
            <option value={room}>{room}</option>
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
      <Modal id="success" class="hide">
        <section>
          <p>Agendamento concluído</p>
          <button onClick={handleSuccessModal}>X</button>
        </section>
      </Modal>
      <Modal id="failure" class="hide">
        <section>
          <p>Sala Ocupada</p>
          <button onClick={handleFailureModal}>X</button>
        </section>
        <nav>
          <button onClick={handleAnotherRoom}>Escolher outra sala</button>
        </nav>
      </Modal>
    </Container>
  );
}
