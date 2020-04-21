import React from 'react';
import PropTypes from 'prop-types';
import Btn from 'components/Btn/Btn';
import styles from './PassContainer.module.scss';

const copyPassword = () => {
  const pass = document.getElementsByTagName('article')[0];
  const tempArea = document.createElement('textarea');
  pass.appendChild(tempArea);
  tempArea.textContent = pass.textContent;
  tempArea.select();
  document.execCommand('copy');
  pass.removeChild(tempArea);
};

const PassContainer = ({ pass }) => {
  return (
    <div className={styles.wrapper}>
      <article className={styles.container}>{pass}</article>
      <Btn className={styles.copy__btn} onClick={copyPassword} text='kopiuj' />
    </div>
  );
};

PassContainer.propTypes = {
  pass: PropTypes.string.isRequired,
};

export default PassContainer;
