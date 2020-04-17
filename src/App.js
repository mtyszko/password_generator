import React, { Component } from 'react';
import styles from './App.module.scss';
import PassContainer from './components/PassContainer/PassContainer';

class App extends Component {
  state = {
    pass: 'tu będzie hasło',
    passLength: 12,
    passPath: 'chars',
  };

  handleRandom = (data) => {
    return data[Math.floor(Math.random() * data.length)];
  };

  cleanPassword = (pass) => (pass = pass.replace('_', '').toLowerCase());

  getData = () =>
    fetch(`../data/${this.state.passPath}`)
      .then((res) => res.json())
      .then((res) => {
        let pass = '';
        for (let i = 0; i < this.state.passLength; i++) {
          this.state.passPath === 'chars'
            ? (pass += this.handleRandom(res))
            : (pass += `_${this.handleRandom(res)}`);
        }
        this.state.passPath === 'words'
          ? (pass = this.cleanPassword(pass))
          : console.log(null);
        return pass;
      })
      .then((pass) =>
        this.setState({
          pass,
        }),
      );
  render() {
    return (
      <div className='App'>
        <h1>password generator</h1>
        <PassContainer getData={this.getData} pass={this.state.pass} />
      </div>
    );
  }
}

export default App;
