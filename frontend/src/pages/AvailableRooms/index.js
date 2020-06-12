import React, { useState, useMemo, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import { Container, Room } from './styles';

const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function AvailableRooms() {
  const [availableRooms, setAvailableRooms] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const data = rooms.map((room) => {
        return {
          number: `Sala ${room}`,
          available: true,
        };
      });

      setAvailableRooms(data);
    }

    loadSchedule();
  }, [date]);

  return (
    <Container>
      <header>
        <p>Escolha uma sala disponível para:</p>
        <strong>{dateFormatted}</strong>
      </header>

      <ul>
        {availableRooms.map((room) => (
          <Room key={room.number} available={room.available}>
            <strong>{room.number}</strong>
            <span>{room.available ? 'Livre' : 'Ocupada'}</span>
          </Room>
        ))}
      </ul>
    </Container>
  );
}
