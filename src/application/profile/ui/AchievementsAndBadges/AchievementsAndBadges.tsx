import styles from './AchievementsAndBadges.module.css';
import { FaAward } from "react-icons/fa6";

function AchievementsAndBadges () {

    const badges = [
    { id: 1, name: 'Leaf Guardian', icon: '🍃', earned: true, date: '2024-01-15' },
    { id: 2, name: 'Water Saver', icon: '💧', earned: true, date: '2024-01-20' },
    { id: 3, name: 'Recycling Hero', icon: '♻️', earned: true, date: '2024-01-25' },
    { id: 4, name: 'Carbon Warrior', icon: '🌍', earned: false },
    { id: 5, name: 'Solar Champion', icon: '☀️', earned: false },
    { id: 6, name: 'Eco Master', icon: '🏆', earned: false },
  ];
    return(
        <div className={styles.achievementsCard}>
  <div className={styles.achievementsHeader}>
    <FaAward className="w-8 h-8" style={{ color: '#8fc866' }} />
    <h2 className={styles.achievementsTitle}>Achievements & Badges</h2>
  </div>

  <div className={styles.badgesGrid}>
    {badges.map((badge) => (
      <div
        key={badge.id}
        className={`${styles.badgeItem} ${badge.earned ? styles.badgeEarned : styles.badgeLocked}`}
      >
        <div className={styles.badgeIcon}>
          {badge.earned ? badge.icon : '❓'}
        </div>
        <p
          className={`${styles.badgeName} ${
            badge.earned ? styles.badgeNameEarned : styles.badgeNameLocked
          }`}
        >
          {badge.name}
        </p>

        {badge.earned && (
          <div className={styles.badgeTooltip}>
            <div className={styles.badgeTooltipContent}>Earned: {badge.date}</div>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
    );
};

export default AchievementsAndBadges;
