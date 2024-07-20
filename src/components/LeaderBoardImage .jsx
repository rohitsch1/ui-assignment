import React from 'react';
import { motion } from 'framer-motion';
import styles from './LeaderBoardImage.module.css';
import leader from '../assets/leader.svg'

const LeaderBoardImage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageWrapper}
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={leader}
          alt="Leaderboard"
          className={styles.leaderBoardImg}
          whileHover={{
            rotateY: [0, 180, 360],
            transition: { duration: 1, ease: "easeInOut" }
          }}
        />
        <motion.div
          className={styles.popup}
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
        </motion.div>
        <motion.div
          className={styles.sideArrow}
          initial={{ opacity: 0, x: -20 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          &rarr;
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.bubble}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className={styles.bubble}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className={styles.bubble}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default LeaderBoardImage;
