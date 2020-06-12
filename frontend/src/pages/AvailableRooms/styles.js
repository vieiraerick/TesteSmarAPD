import styled from 'styled-components';
import Colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    p {
      font-size: 20px;
    }

    strong {
      color: ${Colors.text};
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Room = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: ${(props) =>
    props.available ? Colors.primary : Colors.disabled};

  strong {
    display: block;
    color: ${(props) => (props.available ? Colors.text : Colors.lightGray)};
    font-size: 20px;
    font-weight: normal;
  }
  span {
    display: block;
    color: ${(props) => (props.available ? Colors.text : Colors.lightGray)};
    font-size: 16px;
    font-weight: normal;
  }
`;
