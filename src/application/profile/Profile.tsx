import styles from './Profile.module.css';
import Navbar from '../../components/Navbar/Navbar';
import ButtonBar from '../../components/ButtonBar/ButtonBar';
import PersonalDetails from './ui/PersonalDetails/PersonalDetails';
import StreakAndCoinsCard from './ui/StreakAndCoinsCard/StreakAndCoinsCard';
import AchievementsAndBadges from './ui/AchievementsAndBadges/AchievementsAndBadges';

function Profile () {
    return(
        <> 
        <Navbar />
        <div className={styles.backgroundContainer}>
            <PersonalDetails />
            <StreakAndCoinsCard />
            <AchievementsAndBadges />
        </div>
        <ButtonBar />
        </>
    );
};

export default Profile;