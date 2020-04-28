import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './LangSection.module.scss';

const LangSection = ({ handleLang }) => (
  <section className={styles.main}>
    <Input
      type='radio'
      name='lang'
      onChange={() => handleLang('pl')}
      label='pl'
      className={styles.checkbox}
      defaultChecked
    />

    <Input
      type='radio'
      name='lang'
      onChange={() => handleLang('eng')}
      label='eng'
      className={styles.checkbox}
    />
  </section>
);

LangSection.propTypes = {
  handleLang: PropTypes.func,
};
export default LangSection;
