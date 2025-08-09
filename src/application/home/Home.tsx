import Navbar from "../../components/Navbar/Navbar";
import styles from './Home.module.css';
import EcoMissions from "./ui/EcoMissionsCard/EcoMissions";
import ImpactCard from "./ui/ImpactCard/ImpactCard";
import InspirationCard from "./ui/InspirationCard/InspirationCard";
import ButtonBar from "../../components/ButtonBar/ButtonBar";
import LeaderboardCard from "./ui/LeaderboardCard/LeaderboardCard";

function Home() {
    return(
       <>
       <Navbar />
       <div className={styles.backgroundContainer}>
        <EcoMissions />
        <div className={styles.innerContainer}> 
        <ImpactCard />
        <InspirationCard />
        </div>
        <LeaderboardCard />
       </div>
       <ButtonBar />
       </>
    );
};

export default Home;
