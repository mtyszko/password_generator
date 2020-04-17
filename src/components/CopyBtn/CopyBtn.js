import React from 'react';
import styles from './CopyBtn.module.scss';

// copyPassword() is copying password to clipboard

const copyPassword = () => {
  const pass = document.getElementsByTagName('article')[0];
  const tempArea = document.createElement('textarea');
  pass.appendChild(tempArea);
  tempArea.textContent = pass.textContent;
  tempArea.select();
  document.execCommand('copy');
  pass.removeChild(tempArea);
};

const CopyBtn = () => {
  return (
    <button className={styles.copy__btn} onClick={copyPassword}>
      copy
    </button>
  );
};

export default CopyBtn;
