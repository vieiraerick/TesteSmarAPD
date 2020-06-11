import React, { Component } from 'react';
import ptbr from 'date-fns/locale/pt-BR';
// import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import api from '../../services/api';

import 'react-datepicker/dist/react-datepicker.css';

import { Container, Form } from './styles';

registerLocale('ptbr', ptbr);
setDefaultLocale('ptbr');

export default class Main extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
  };

  handleChangeStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleChangeEndDate = (date) => {
    this.setState({
      endDate: date,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    alert('Funcionou');

    // this.setState({ loading: true, error: false });

    // try {
    //   const { newRepo, repositories } = this.state;

    //   if (newRepo === '') throw 'Você precisa indicar um repositório';

    //   const hasRepo = repositories.find((r) => r.name === newRepo);

    //   if (hasRepo) throw 'Repositório duplicado';

    //   const response = await api.get(`/repos/${newRepo}`);

    //   const data = {
    //     name: response.data.full_name,
    //   };

    //   this.setState({
    //     repositories: [...repositories, data],
    //     newRepo: '',
    //   });
    // } catch (error) {
    //   this.setState({ message: error, error: true });
    // } finally {
    //   this.setState({ loading: false });
    // }
  };

  render() {
    return (
      <Container>
        <h1>Teste SmarAPD</h1>
        <Form action="/rooms">
          <label htmlFor="tile">Título da reunião</label>
          <input type="text" name="title" />
          <label htmlFor="room">Sala desejada</label>
          <input type="text" name="room" />
          <label htmlFor="startDate">Início</label>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChangeStartDate}
            showTimeSelect
            dateFormat="Pp"
          />
          <label htmlFor="endDate">Término</label>
          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleChangeEndDate}
            showTimeSelect
            dateFormat="Pp"
          />
          <button onClick={this.handleSubmit}>Reservar Sala</button>
        </Form>
        <div id="modal" className="hide">
          <p>Sala indisponível</p>
        </div>
      </Container>
    );
  }
}
