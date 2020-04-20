import React from 'react';
import styles from './GenerateBtn.module.scss';

const GenerateBtn = ({ getData }) => (
  <button className={styles.generate__btn} onClick={getData}>
    generuj hasło
  </button>
);

export default GenerateBtn;
