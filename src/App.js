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
    console.log('INITIAL STATE', this.state)

    DataService.getData().then(({data}) => {
      this.setState({
        drugs: data
      })

      console.log('component did mount. NEW STATE', this.state)
    });
  }
  
  handleClick = () => {
    DataService.getData().then(({data}) => {
      console.log('handleClick', data)
      // TODO: Figure out how to add new drugs to array
      this.setState((prevState) => {
        drugs: prevState.drugs.concat(data)
      })
      console.log('handleClick. NEW STATE', this.state)
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
