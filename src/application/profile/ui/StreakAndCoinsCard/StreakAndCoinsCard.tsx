import styles from './StreakAndCoinsCard.module.css';
import { FaFire } from "react-icons/fa";
import { PiCoinsFill } from "react-icons/pi";

function StreakAndCoinsCard() {
    return(
        <div className={styles.container}> 
            <div className={styles.dailyStreakContainer}>
                <div className={styles.headerContainer}>
                    <FaFire color ='orange' size={30}/>
                    <p> Daily Streak </p>
                </div>
                 <p className={styles.streak}> 23 </p>
                 <span className={styles.subtext}> Daily Eco Streak</span>
            </div>
            <div className={styles.ecocoinsContainer}>
                <div className={styles.headerContainer}>
                    <PiCoinsFill color ='yellow'size={30}/>
                    <p> Eco Coins </p>
                </div>
                 <p className={styles.ecoCoins}> 2847 </p>
                 <span className={styles.subtext}> Keep Growing</span>
            </div>

        </div>
    );
};

export default StreakAndCoinsCard;