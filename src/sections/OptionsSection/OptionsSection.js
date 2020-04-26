import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './OptionsSection.module.scss';

const OptionsSection = ({ passType, handleInput, handleCheckbox }) => (
  <section className={styles.wrapper}>
    <article className={styles.main}>
      <Input
        type='radio'
        passType='words'
        name='passType'
        isSelected={passType === 'words'}
        onChange={handleInput}
        label='słowa'
        className={styles.radio}
      />
      <Input
        type='radio'
        passType='chars'
        name='passType'
        isSelected={passType === 'chars'}
        onChange={handleInput}
        label='znaki'
        className={styles.radio}
      />
    </article>
    <article className={styles.details}>
      {passType === 'chars' ? (
        <Input
          type='text'
          label='ile znaków?'
          className={styles.textbox}
          onChange={handleInput}
        />
      ) : (
        <>
          <Input
            name='passLength'
            type='text'
            label='ile słów?'
            className={styles.textbox}
            onChange={handleInput}
          />
          <Input
            type='text'
            name='separator'
            label='separator'
            className={styles.textbox}
            onChange={handleInput}
          />
          <Input
            type='checkbox'
            name='capitalize'
            label='pierwsza litera wielka?'
            className={styles.checkbox}
            onChange={handleCheckbox}
          />
          <Input
            type='checkbox'
            name='addNumber'
            label='cyfra na końcu?'
            className={styles.checkbox}
            onChange={handleCheckbox}
          />
        </>
      )}
    </article>
  </section>
);

OptionsSection.propTypes = {
  passType: PropTypes.string.isRequired,
  handleInput: PropTypes.func,
  handleCheckbox: PropTypes.func,
};
export default OptionsSection;
