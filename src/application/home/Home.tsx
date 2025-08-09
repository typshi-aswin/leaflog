import Navbar from "../../components/Navbar/Navbar";
import styles from './Home.module.css';
import EcoMissions from "./ui/EcoMissionsCard/EcoMissions";
import ImpactCard from "./ui/ImpactCard/ImpactCard";
import InspirationCard from "./ui/InspirationCard/InspirationCard";
import ButtonBar from "../../components/ButtonBar/ButtonBar";
import LeaderboardCard from "./ui/LeaderboardCard/LeaderboardCard";
import EcoCompanionCard from "./ui/EcoCompanionCard/EcoCompanionCard";

function Home() {
    return(
       <>
       <Navbar />
       <div className={styles.backgroundContainer}>
        <div className={styles.innerContainerOne}>
        <EcoMissions />
         <LeaderboardCard />
         </div>
        <div className={styles.innerContainerTwo}> 
        <ImpactCard />
        <EcoCompanionCard />
        <InspirationCard />
        </div>
       </div>
       <ButtonBar />
       </>
    );
};

export default Home;
