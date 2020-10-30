import logo from './logo.svg';
import './App.css';
import React from 'react';

const MyFunctionComponent = (props) => {
  return <div>{props.text || 'default'}</div>
};

class MyClassComponent extends React.Component {
  render() {
    return <div>{this.props.text || 'default'}</div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world
        </p>
        <MyFunctionComponent text="1">

        </MyFunctionComponent>
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
      </header>
    </div>
  );
}

export default App;
