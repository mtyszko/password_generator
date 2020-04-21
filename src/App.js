import React, { Component } from 'react';
import Btn from 'components/Btn/Btn';
import PassContainer from './components/PassContainer/PassContainer';
import styles from './App.module.scss';

class App extends Component {
  state = {
    pass: '',
    passLength: 4,
    passPath: 'words',
  };

  handleRandom = (data) => data[Math.floor(Math.random() * data.length)];

  formatPassword = (pass) => pass.replace('_', '').toLowerCase();

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
          ? (pass = this.formatPassword(pass))
          : console.log(null);
        return pass;
      })
      .then((pass) => {
        this.setState({
          pass,
        });
      });

  render() {
    return (
      <div className={styles.app}>
        <PassContainer pass={this.state.pass} />
        <Btn
          className={styles.generate__btn}
          onClick={this.getData}
          active
          text='generuj hasło'
        />
      </div>
    );
  }
}

export default App;
