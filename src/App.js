import React, { Component } from 'react';
import './App.css';
import DataService from './services/data';
import { PdpContainer } from './containers/PdpContainer'
import { PlpContainer } from './containers/PlpContainer'
import { CartContainer } from './containers/CartContainer'

class App extends Component {
  state = {
    hello: 1,
    drugs: [],
  }

  componentDidMount() {
    DataService.getData().then(({data}) => {
      this.setState({
        drugs: data
      })
    });
  }
  
  handleClick = () => {
    DataService.getData().then(({data}) => {
      this.setState((prevState) => ({ drugs: prevState.drugs.concat(data)}))
    });
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={this.handleClick}
        >Do a thing</button>

        <PdpContainer />
        <PlpContainer />
        <CartContainer />
      </div>
    );
  }
}

export default App;
