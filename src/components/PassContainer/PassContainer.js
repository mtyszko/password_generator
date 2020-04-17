import React from 'react';
import PropTypes from 'prop-types';
import styles from './PassContainer.module.scss';
import CopyBtn from 'components/CopyBtn/CopyBtn';

const PassContainer = ({ pass, getData }) => {
  return (
    <div className={styles.wrapper}>
      <article className={styles.container} onClick={getData}>
        {pass}
      </article>
      <CopyBtn />
    </div>
  );
};

PassContainer.propTypes = {
  pass: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};

export default PassContainer;
