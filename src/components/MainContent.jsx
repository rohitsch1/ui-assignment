import React from "react";
import styles from "../App.module.css";
import ActionButtons from "./ActionButtons";
import AutoClicker from "./AutoClicker";
import LeaderBoard from "./LeaderBoard";
import saffronMount from "../assets/saffronMount.svg";
import LeaderBoardImage from "./LeaderBoardImage ";
import vector from '../assets/vector.svg';

const MainContent = () => {
  return (
    <>
      <div className={styles.containerSaffron}>
        <div className={styles.titleContainer}>
          <img
            src={saffronMount}
            alt="Saffron Mount icon"
            className={styles.titleIcon}
          />
          <h1 className={styles.title}>saffron mount</h1>
        </div>
        <section className={styles.actionSection}>
          <ActionButtons />
        </section>
      </div>
      <main className={styles.mainContent}>
        <section className={styles.statsSection}>
          <AutoClicker />
          <LeaderBoard />
        </section>
        <LeaderBoardImage />
        <section className={styles.balanceSection}>
          <div className={styles.balance}>
            <div className={styles.balanceHeader}>
              <span>TABS LEFT</span>
              <img
                  src={vector}
                  alt="Energy icon"
                  className={styles.energyIcon}
                />
                <span>1000</span>
            </div>
            <div className={styles.progressBar}>
            </div>
          </div>
        </section> 
         <section className={styles.balanceSection}>
          <div className={styles.balance}>
            <div className={styles.balanceHeader}>
              <span>BALANCE</span>
              <span className={styles.currency}>SMT</span>
            </div>
            <div className={styles.balanceValue}>
              <img
                src={saffronMount}
                className={styles.balanceIcon}
              />
              <span>0.0000</span>
            </div>
            <hr className={styles.balanceDivider} />
            <div className={styles.energyBalance}>
              <span>TOTAL ENERGY BALANCE</span>
              <div className={styles.energyValue}>
                <img
                  src={vector}
                  alt="Energy icon"
                  className={styles.energyIcon}
                />
                <span>0</span>
              </div>
            </div>
          </div>
        </section> 
      </main>
    </>
  );
};

export default MainContent;
