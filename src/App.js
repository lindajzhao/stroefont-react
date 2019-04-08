import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataService from './services/data';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button
            onClick={this.handleClick}
          >Do a thing</button>
        </header>
      </div>
    );
  }
}

export default App;
