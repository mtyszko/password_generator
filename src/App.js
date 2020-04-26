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
  };

  handleRandom = (data) => data[Math.floor(Math.random() * data.length)];

  handleWord = (data) => {
    const word = this.handleRandom(data);
    const firstLetter = word[0];
    const newFirstLetter = firstLetter.toUpperCase();
    const newWord = this.state.capitalize
      ? word.replace(firstLetter, newFirstLetter)
      : word.toLowerCase();
    console.log(newWord);
    return newWord;
  };

  formatPassword = (pass) => pass.replace(`${this.state.separator}`, '');

  getPassword = () =>
    fetch(`../data/${this.state.passType}`)
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

  handleInput = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.checked,
    });
  };

  addNumberToPass = () =>
    this.state.addNumber ? Math.floor(Math.random() * 9) : null;

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
        />
      </div>
    );
  }
}

export default App;
