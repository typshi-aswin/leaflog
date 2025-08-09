import styles from './Profile.module.css';
import Navbar from '../../components/Navbar/Navbar';
import ButtonBar from '../../components/ButtonBar/ButtonBar';
import PersonalDetails from './ui/PersonalDetails/PersonalDetails';
import StreakAndCoinsCard from './ui/StreakAndCoinsCard/StreakAndCoinsCard';
import AchievementsAndBadges from './ui/AchievementsAndBadges/AchievementsAndBadges';
import RewardsRedemption from './ui/RewardsRedemption/RewardsRedemption';

function Profile () {
    return(
        <> 
        <Navbar />
        <div className={styles.backgroundContainer}>
            <PersonalDetails />
            <StreakAndCoinsCard />
            <AchievementsAndBadges />
            <RewardsRedemption />
        </div>
        <ButtonBar />
        </>
    );
};

export default Profile;