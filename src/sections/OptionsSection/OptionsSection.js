import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './OptionsSection.module.scss';

const OptionsSection = ({
  passType,
  handleInput,
  handleCheckbox,
  handlePassType,
  error,
  words,
  chars,
  charsNumber,
  wordsNumber,
  separator,
  firstLetter,
  lastCharNumber,
}) => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.main}>
        <Input
          type='radio'
          passType='words'
          name='passType'
          onChange={handlePassType}
          label={words}
          className={styles.checkbox}
          defaultChecked
        />
        <Input
          type='radio'
          passType='chars'
          name='passType'
          onChange={handlePassType}
          label={chars}
          className={styles.checkbox}
        />
      </article>
      <article className={styles.details}>
        {passType === 'chars' ? (
          <Input
            name='passLength'
            type='text'
            label={charsNumber}
            className={styles.textbox}
            onChange={handleInput}
            error={error}
          />
        ) : (
          <>
            <Input
              name='passLength'
              type='text'
              label={wordsNumber}
              className={styles.textbox}
              onChange={handleInput}
              error={error}
            />
            <Input
              type='text'
              name='separator'
              label={separator}
              className={styles.textbox}
              onChange={handleInput}
            />
            <Input
              type='checkbox'
              name='capitalize'
              label={firstLetter}
              className={styles.checkbox}
              onChange={handleCheckbox}
            />
            <Input
              type='checkbox'
              name='addNumber'
              label={lastCharNumber}
              className={styles.checkbox}
              onChange={handleCheckbox}
            />
          </>
        )}
      </article>
    </section>
  );
};

OptionsSection.propTypes = {
  passType: PropTypes.string,
  handleInput: PropTypes.func,
  handleCheckbox: PropTypes.func,
  handlePassType: PropTypes.func,
  error: PropTypes.string,
  words: PropTypes.string,
  chars: PropTypes.string,
  charsNumber: PropTypes.string,
  wordsNumber: PropTypes.string,
  separator: PropTypes.string,
  firstLetter: PropTypes.string,
  lastCharNumber: PropTypes.string,
};

export default OptionsSection;
