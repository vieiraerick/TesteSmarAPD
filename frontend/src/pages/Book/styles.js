import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

import Colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 350px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 20px 50px;
    background: ${Colors.primary};
    border-radius: 10px;
    color: ${Colors.lightGray};
    font-weight: bold;

    h2 {
      color: #ffffff;
      margin-bottom: 20px;
    }

    input {
      background: ${Colors.lightGray};
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${Colors.text};
      margin: 0 0 10px;

      &::placeholder {
        color: ${lighten(0.45, Colors.text)};
      }
    }

    .uncorrect {
      color: #fa7575;
      border: 2px solid #fa7575;
    }

    span {
      background: #fa7575;
      padding: 3px;
      color: ${Colors.text};
      font-weight: 300;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button#submit {
      margin: 5px 0 0;
      height: 44px;
      background: ${Colors.darkenPrimary};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, Colors.darkenPrimary)};
      }
    }
  }
`;

export const Modal = styled.div`
  color: #ffffff;
  font-size: 48px;
  font-weight: bold;
  background: ${transparentize(0.2, Colors.primary)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    button {
      color: #ffffff;
      background: none;
      border: none;
    }
  }
  &.hide {
    display: none;
  }

  nav {
    button {
      padding: 10px 50px;
      background: ${Colors.lightGray};
      border: none;
      border-radius: 10px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.03, Colors.lightGray)};
      }
    }
  }
`;
