import React from 'react';
import { motion } from 'framer-motion';
import styles from './LeaderBoardImage.module.css';
import leader from '../assets/leader.svg';

const LeaderBoardImage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageWrapper}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={leader}
          alt="Leaderboard"
          className={styles.leaderBoardImg}
          whileHover={{
            rotateY: [0, 15, -15, 0], 
            scale: [1, 1.1, 1],
            opacity: [1, 0.9, 1],
            filter: ['brightness(100%)', 'brightness(150%)', 'brightness(100%)'], // Neon Glow Effect
            boxShadow: ['0 0 10px rgba(255, 255, 255, 0.8)', '0 0 20px rgba(255, 255, 255, 0.6)', '0 0 10px rgba(255, 255, 255, 0.8)']
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.popup}
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Popup content goes here */}
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
        initial={{ scale: 0, opacity: 0, y: 0 }}
        whileHover={{ scale: [0, 1.5, 0], opacity: [0, 1, 0], y: [-10, 10, -10] }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className={styles.bubble}
        initial={{ scale: 0, opacity: 0, y: 0 }}
        whileHover={{ scale: [0, 1.5, 0], opacity: [0, 1, 0], y: [-10, 10, -10] }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className={styles.bubble}
        initial={{ scale: 0, opacity: 0, y: 0 }}
        whileHover={{ scale: [0, 1.5, 0], opacity: [0, 1, 0], y: [-10, 10, -10] }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default LeaderBoardImage;
