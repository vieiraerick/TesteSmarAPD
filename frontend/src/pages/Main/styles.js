import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  background: #97a977;
  padding: 30px;
  border-radius: 10px;

  input {
    flex: 1;
    border: 1px solid #7159c1;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    margin-top: 32px;
    height: 48px;
    border: 2px solid #758755;
    background: #97a977;
    border-radius: 8px;
    color: #fff;
    transition: 400ms;

    :hover {
      background: #758755;
    }
  }
`;
