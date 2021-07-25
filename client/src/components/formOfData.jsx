import React, { Component } from 'react';

class FormOfData extends Component {
  state = {
    name: '',
    continent: '',
    population: '',
    typeOfPlace: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('siunciam');
    const placeData = {
      name: this.state.name,
      continent: this.state.continent,
      population: this.state.population,
      typeOfPlace: this.state.typeOfPlace,
    };
    // console.log(placeData);
    this.props.onNewPlace(placeData);
  };

  handleTown = (event) => {
    // console.log('miestas');
    // console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  handleContinent = (event) => {
    // console.log('continent');
    // console.log(event.target.value);
    this.setState({ continent: event.target.value });
  };

  handlePopulation = (event) => {
    // console.log('population');
    // console.log(event.target.value);
    this.setState({ population: event.target.value });
  };

  handleCountry = (event) => {
    // console.log('country');
    // console.log(event.target.value);
    this.setState({ typeOfPlace: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='placeholders-container'>
        <h4>Write name: {this.props.miestas}</h4>
        <input
          onChange={this.handleTown}
          value={this.state.name}
          className='container__holder'
          type='text'
          placeholder='name'
          name='name'
        />
        <h4>Write continent:</h4>
        <input
          onChange={this.handleContinent}
          value={this.state.continent}
          className='container__holder'
          type='text'
          placeholder='continent'
          name='continent'
        />
        <h4>Write population:</h4>
        <input
          onChange={this.handlePopulation}
          value={this.state.population}
          className='container__holder'
          type='number'
          placeholder='population'
          name='population'
        />
        <h4>Write type Of Place:</h4>
        <input
          onChange={this.handleCountry}
          value={this.state.typeOfPlace}
          className='container__holder'
          type='text'
          placeholder='typeOfPlace'
          name='typeOfPlace'
        />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

export default FormOfData;
