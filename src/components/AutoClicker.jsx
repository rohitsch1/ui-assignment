import React from 'react';
import styles from '../App.module.css';
import autoClicker from '../assets/AutoClicker.svg'

const AutoClicker = () => {
  return (
    <div className={styles.autoClicker}>
      <div className={styles.autoClickerHeader}>
        <h2>autoClicker</h2>
        <img src={autoClicker} className={styles.autoClickerIcon} />
      </div>
      <div className={styles.autoClickerToggle}>
        <span className={styles.toggleOn}>ON</span>
        <span className={styles.toggleOff}>OFF</span>
      </div>
    </div>
  );
};

export default AutoClicker;