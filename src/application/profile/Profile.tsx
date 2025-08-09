import styles from './Profile.module.css';
import Navbar from '../../components/Navbar/Navbar';
import ButtonBar from '../../components/ButtonBar/ButtonBar';
import PersonalDetails from './ui/PersonalDetails/PersonalDetails';
import StreakAndCoinsCard from './ui/StreakAndCoinsCard/StreakAndCoinsCard';
import AchievementsAndBadges from './ui/AchievementsAndBadges/AchievementsAndBadges';
import RewardsRedemption from './ui/RewardsRedemption/RewardsRedemption';
import { motion } from 'framer-motion';

function Profile() {
    return (
        <>
            <Navbar />
            <motion.div className={styles.backgroundContainer}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <PersonalDetails />
                <StreakAndCoinsCard />
                <AchievementsAndBadges />
                <RewardsRedemption />
            </motion.div>
            <ButtonBar />
        </>
    );
};

export default Profile;