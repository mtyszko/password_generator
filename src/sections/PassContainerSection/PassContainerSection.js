import React from 'react';
import PropTypes from 'prop-types';
import Btn from '../../components/Btn/Btn';
import styles from './PassContainerSection.module.scss';

const copyPassword = () => {
  console.log('coś');
  const pass = document.getElementsByTagName('article')[0];
  const tempArea = document.createElement('textarea');
  pass.appendChild(tempArea);
  tempArea.textContent = pass.textContent;
  tempArea.select();
  document.execCommand('copy');
  pass.removeChild(tempArea);
};

const PassContainerSection = ({ pass, copy, recomended }) => {
  return (
    <>
      <section className={styles.wrapper}>
        <article className={styles.container}>{pass}</article>
        <Btn className={styles.copy__btn} onClick={copyPassword} text={copy} />
      </section>
      <div className={styles.recomended}>{recomended}</div>
    </>
  );
};

PassContainerSection.propTypes = {
  pass: PropTypes.string.isRequired,
  recomended: PropTypes.string,
  copy: PropTypes.string,
};

export default PassContainerSection;
