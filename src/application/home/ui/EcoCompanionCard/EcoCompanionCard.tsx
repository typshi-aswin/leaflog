import styles from './EcoCompanionCard.module.css';
import { motion } from 'framer-motion';

function EcoCompanionCard() {
    return (
        <motion.div
            className={styles.container}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}>
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
        </motion.div>
    );
}

export default EcoCompanionCard;
