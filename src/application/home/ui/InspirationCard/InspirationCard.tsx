import styles from './InspirationCard.module.css';
import { IoBulbOutline } from "react-icons/io5";
function InspirationCard() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer1}>
                <div className={styles.iconContainer} >
                    <IoBulbOutline size ={25}/>
                </div>
            </div>
            <div className={styles.innerContainer2}>
                <p>Daily Inspiration</p>
                <span className={styles.quoteText}>"Small acts, when multiplied by millions of people, can transform the world."</span>
                <br />
                <br />
                <span className={styles.authorText}>- Howard Zinn </span>
            </div>
        </div>
    );
};

export default InspirationCard;