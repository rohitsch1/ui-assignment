import React from 'react';
import styles from '../App.module.css';
import info from '../assets/info.svg'
import referral from '../assets/referral.svg'
import em from '../assets/em.svg'
import upgade from '../assets/upgade.svg'
import vector from '../assets/vector.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.firstSection}>
      <div className={styles.userInfo}>
        <div className={styles.userDetails}>
          <img src={info} alt="User avatar" className={styles.userAvatar} />
          <div className={styles.userName}>
            <span className={styles.greeting}>HELLO</span> NIKHIL134
          </div>
        </div>
      </div>
      <button className={styles.referralButton}>
        <img src={referral} alt="Referral icon" className={styles.referralIcon} />
        <span>Referral Link</span>
      </button>
      </div>
       <div className={styles.languageSelector}>
        <img src={em} alt="Language flag" className={styles.languageFlag} />
        <span className={styles.languageCode}>en</span>
      </div>
      <div className={styles.secondhalf}>
        <div className={styles.nftInfo}>
          <img src={vector} alt="NFT icon" className={styles.nftIcon} />
          <span className={styles.nftText}>my NFT free</span>
        </div>
        <button className={styles.upgradeButton}>
          <img src={upgade} alt="Upgrade icon" className={styles.upgradeIcon} />
          <span>Upgrade</span>
        </button>
      </div> 
    </header>
  );
};

export default Header;