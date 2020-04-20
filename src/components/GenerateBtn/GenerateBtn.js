import React from 'react';
import PropTypes from 'prop-types';
import styles from './GenerateBtn.module.scss';

const GenerateBtn = ({ getData }) => (
  <button className={styles.generate__btn} onClick={getData}>
    generuj hasło
  </button>
);

GenerateBtn.propTypes = {
  getData: PropTypes.func.isRequired,
};

export default GenerateBtn;
