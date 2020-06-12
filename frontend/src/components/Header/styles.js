import styled from 'styled-components';
import { darken } from 'polished';

import Colors from '~/styles/colors';

export const Container = styled.div`
  background: ${Colors.dark};
  color: #ffffff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 5px;
    }

    a {
      font-weight: bold;
      color: #ffffff;
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid ${Colors.darkenPrimary};
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      margin-left: 10px;
      padding: 5px 15px;
      background: ${Colors.lightGray};
      border: none;
      border-radius: 5px;

      :hover {
        background: ${darken(0.05, Colors.lightGray)};
      }
    }
  }
`;
