import React, { Component } from 'react';
import './App.css';
import FormOfData from './components/formOfData';
import axios from 'axios';

class App extends Component {
  state = {
    allPlaces: [],
  };
  handleNewPlace = async (placeData) => {
    console.log('handleNewPlace');
    console.log(placeData);
    const sendedResult = await axios.post(
      'http://localhost:4000/newplace',
      placeData
    );
    console.log('sendedResult:', sendedResult);
    console.log(sendedResult.data);
  };
  render() {
    return (
      <div>
        <FormOfData
          //miestas='Siauliai'
          onNewPlace={this.handleNewPlace}
        />
      </div>
    );
  }
}

export default App;
