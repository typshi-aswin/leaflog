import styles from './EcoCompanionCard.module.css';
import { motion } from 'framer-motion';

function EcoCompanionCard() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <p>My Eco Companion</p>
            </div>
            <div className={styles.treeContainer}>
                <motion.p
                    animate={{ y: [0, -10, 0] }} // bounce up & down
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                >
                    🌳
                </motion.p>
                <span>Growing Tree</span>
            </div>
        </div>
    );
}

export default EcoCompanionCard;
