/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import Btn from 'components/Btn/Btn';
import LangSection from 'sections/LangSection/LangSection';
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
    lang: 'pl',
  };

  componentDidMount() {
    this.handleLang('pl');
  }

  clearNumber = () => (document.getElementsByName('passLength')[0].value = '');

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
    this.clearNumber();
    this.setState({
      passLength: passType === 'chars' ? 12 : 4,
      passType: e.target.value,
      error: '',
    });
  };

  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    const passType = this.state.passType;
    const error =
      passType === 'chars'
        ? this.validate(value, 4, 32)
        : this.validate(value, 2, 8);

    this.setState({
      [name]: e.target.value,
      error: name === 'passLength' ? error : '',
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  addNumberToPass = () =>
    this.state.addNumber
      ? `${this.state.separator}${Math.floor(Math.random() * 9)}`
      : null;

  validate = (num, min, max) => {
    return isNaN(num) || num < min || num > max
      ? `  ${this.state.lang.errorMsg}${min} - ${max}`
      : '';
  };

  handleLang = (lang) => {
    const passType = this.state.passType;
    fetch(`../data/${lang}.json`)
      .then((res) => res.json())
      .then((res) => {
        this.clearNumber();
        this.setState({
          passLength: passType === 'chars' ? 12 : 4,
          lang: res,
          error: '',
        });
      });
  };

  render() {
    const { lang, pass, passType, error } = this.state;
    const {
      generate,
      recomended,
      words,
      chars,
      wordsNumber,
      charsNumber,
      separator,
      firstLetter,
      lastCharNumber,
    } = this.state.lang;
    return (
      <div className={styles.app}>
        <div className={styles.lang}>
          <LangSection lang={lang} handleLang={this.handleLang} />
        </div>

        <div className={styles.main}>
          <section className={styles.btn__wrapper}>
            <Btn
              className={styles.generate__btn}
              onClick={this.getPassword}
              text={generate}
            />
          </section>

          <PassContainerSection pass={pass} recomended={recomended} />
          <OptionsSection
            passType={passType}
            handleInput={this.handleInput}
            handleCheckbox={this.handleCheckbox}
            handlePassType={this.handlePassType}
            error={error}
            words={words}
            chars={chars}
            wordsNumber={wordsNumber}
            charsNumber={charsNumber}
            separator={separator}
            firstLetter={firstLetter}
            lastCharNumber={lastCharNumber}
          />
        </div>
        <footer>&copy; mtdev</footer>
      </div>
    );
  }
}

export default App;
