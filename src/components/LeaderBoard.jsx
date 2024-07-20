import React from 'react';
import styles from '../App.module.css';
import leaderIcon from '../assets/leaderIcon.svg'


const LeaderBoard = () => {
  return (
    <div className={styles.leaderBoard}>

      <div className={styles.leaderBoardTitle}>
        <h2>leaderBoard</h2>
        <img src={leaderIcon} alt="Leaderboard icon" className={styles.leaderBoardIcon} />
      </div>
    </div>
  );
};

export default LeaderBoard;