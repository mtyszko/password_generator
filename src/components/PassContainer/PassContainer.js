import React from 'react';
import PropTypes from 'prop-types';
import CopyBtn from 'components/CopyBtn/CopyBtn';
import GenerateBtn from 'components/GenerateBtn/GenerateBtn';
import styles from './PassContainer.module.scss';

const PassContainer = ({ pass, getData }) => {
  return (
    <div className={styles.wrapper}>
      <GenerateBtn getData={getData} />
      <article className={styles.container}>{pass}</article>

      <CopyBtn />
    </div>
  );
};

PassContainer.propTypes = {
  pass: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};

export default PassContainer;
