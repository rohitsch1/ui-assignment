import React from 'react';
import styles from '../App.module.css';
import Icon1 from '../assets/icon1.svg'
import Icon2 from '../assets/icon2.svg'
import Icon3 from '../assets/icon3.svg'
import Icon4 from '../assets/icon4.svg'

const Footer = () => {
  const footerItems = [
    { label: 'My Bank', icon:Icon1 },
    { label: 'my team', icon: Icon2},
    { label: 'Staking', icon: Icon3},
    { label: 'Airdrops', icon: Icon4},
  ];

  return (
    <footer className={styles.footer}>
      {footerItems.map((item, index) => (
        <div key={index} className={styles.footerItem}>
          <div className={styles.footerIcon}>
            <img src={item.icon} alt={`${item.label} icon`} />
          </div>
          {item.label && <span className={styles.footerLabel}>{item.label}</span>}
        </div>
      ))}
    </footer>
  );
};

export default Footer;