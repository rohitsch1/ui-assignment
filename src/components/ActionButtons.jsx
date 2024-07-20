import React from 'react';
import styles from '../App.module.css';
import Stats from '../assets/Stats.svg'
import Team from '../assets/Team.svg';

const ActionButtons = () => {
  const actions = [
    { label: 'buy smt', className: styles.buySmt },
    { label: 'my stats', icon: Stats, className: styles.myStats },
    { label: 'my team', icon:Team, className: styles.myTeam },
  ];

  return (
    <div className={styles.actionButtons}>
      {actions.map((action, index) => (
        <button key={index} className={`${styles.actionButton} ${action.className}`}>
          {action.icon && <img src={action.icon} alt={`${action.label} icon`} className={styles.actionIcon} />}
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;