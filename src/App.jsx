import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;