/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import Btn from 'components/Btn/Btn';
import PassContainerSection from 'sections/PassContainerSection/PassContainerSection';
import OptionsSection from 'sections/OptionsSection/OptionsSection';
import styles from 'App.module.scss';

class App extends Component {
  state = {
    pass: '',
    passLength: 4,
    passType: 'words',
    separator: '_',
    capitalize: false,
    addNumber: false,
    error: '',
  };

  handleRandom = (data) => data[Math.floor(Math.random() * data.length)];

  handleWord = (data) => {
    const word = this.handleRandom(data);
    const firstLetter = word[0];
    const newFirstLetter = firstLetter.toUpperCase();
    const newWord = this.state.capitalize
      ? word.replace(firstLetter, newFirstLetter)
      : word.toLowerCase();
    return newWord;
  };

  formatPassword = (pass) => pass.replace(`${this.state.separator}`, '');

  getPassword = () => {
    return this.state.error
      ? null
      : fetch(`../data/${this.state.passType}`)
          .then((res) => res.json())
          .then((res) => {
            let pass = '';
            for (let i = 0; i < this.state.passLength; i++) {
              this.state.passType === 'chars'
                ? (pass += this.handleRandom(res))
                : (pass += `${this.state.separator}${this.handleWord(res)}`);
            }
            this.state.passType === 'words'
              ? (pass = `${this.formatPassword(pass)}${this.addNumberToPass()}`)
              : console.log(null);
            return pass;
          })
          .then((pass) => {
            this.setState({
              pass,
            });
          });
  };

  handlePassType = (e) => {
    const passType = e.target.value;
    document.getElementsByName('passLength')[0].value = '';
    this.setState({
      passLength: passType === 'chars' ? 12 : 4,
      passType: e.target.value,
      error: '',
    });
  };

  handleInput = (e) => {
    const name = e.target.name;
    console.log(name);
    const passType = this.state.passType;
    const error =
      passType === 'chars'
        ? this.validate(e.target.value, 4, 32)
        : this.validate(e.target.value, 2, 8);

    this.setState({
      [name]: e.target.value,
      error: name === 'passLength' ? error : '',
    });
  };

  handleCheckbox = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.checked,
    });
  };

  addNumberToPass = () =>
    this.state.addNumber
      ? `${this.state.separator}${Math.floor(Math.random() * 9)}`
      : null;

  validate = (num, min, max) => {
    return isNaN(num) || num < min || num > max
      ? `  podaj liczbę od ${min} do ${max}!!`
      : '';
  };

  render() {
    return (
      <div className={styles.app}>
        <section className={styles.btn__wrapper}>
          <Btn
            className={styles.generate__btn}
            onClick={this.getPassword}
            text='generuj hasło'
          />
        </section>

        <PassContainerSection pass={this.state.pass} />
        <OptionsSection
          passType={this.state.passType}
          handleInput={this.handleInput}
          handleCheckbox={this.handleCheckbox}
          handlePassType={this.handlePassType}
          handleSeparator={this.handleSeparator}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
