import styles from './LeaderBoardCard.module.css';
import { RxAvatar } from "react-icons/rx";
function LeaderboardCard() {

    const leaderboardData = [
        {
            name: 'Eco Warrior',
            streak: '12d',
            points: '1250',
        },
        {
            name: 'Green Thumb',
            streak: '11d',
            points: '1100',
        },
        {
            name: 'Eco Friend',
            streak: '8d',
            points: '850',
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <p> Leaderboard </p>
                <span> View All </span>
            </div>

            <div className={styles.leaderboardContainer}>
                {leaderboardData.map((item, index) => (
                    <div className={styles.leaderboard}>
                        <div className={styles.leftContainer}>
                            <p className={styles.index}> #{index+1}</p>
                            <RxAvatar size ={26}/>
                            <div className={styles.nameContainer}>
                                <p className={styles.name}> {item.name}</p>
                                <span className={styles.streak}>🔥 {item.streak}</span>
                            </div>
                        </div>
                        <div className={styles.pointContainer}> 
                        <p className={styles.points}> {item.points}</p>
                        <span> points </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default LeaderboardCard;