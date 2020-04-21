import React from 'react';
import { storiesOf } from '@storybook/react';
import styles from 'App.module.scss';
import Btn from './Btn';

storiesOf('Button', module)
  .add('Generate Button', () => (
    <Btn className={styles.generate__btn} active text='generuj hasło' />
  ))
  .add('Copy Button', () => <Btn className={styles.copy__btn} text='kopiuj' />);
