import Navbar from "../../components/Navbar/Navbar";
import styles from './Home.module.css';
import EcoMissions from "./ui/EcoMissionsCard/EcoMissions";
import ImpactCard from "./ui/ImpactCard/ImpactCard";
import InspirationCard from "./ui/InspirationCard/InspirationCard";
import ButtonBar from "../../components/ButtonBar/ButtonBar";
import LeaderboardCard from "./ui/LeaderboardCard/LeaderboardCard";
import EcoCompanionCard from "./ui/EcoCompanionCard/EcoCompanionCard";
import { motion } from 'framer-motion';

function Home() {
    return (
        <>
            <Navbar />
            <div className={styles.backgroundContainer}>
                <motion.div
                    className={styles.innerContainerOne}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}>
                    <EcoMissions />
                    <LeaderboardCard />
                </motion.div>
               <motion.div
                    className={styles.innerContainerTwo}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}>
                    <ImpactCard />
                    <EcoCompanionCard />
                    <InspirationCard />
                </motion.div>
            </div>
            <ButtonBar />
        </>
    );
};

export default Home;
