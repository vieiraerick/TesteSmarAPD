import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-green.svg';
import { Container, Content } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <a
            href="http://www.smarapd.com.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            SmarAPD
          </a>
          <p>Gerenciamento de Salas de Reunião</p>
        </nav>

        <aside>
          <p>Bem vind@! Fulan@</p>
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
