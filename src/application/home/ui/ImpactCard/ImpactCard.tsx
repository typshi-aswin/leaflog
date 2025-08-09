import styles from './ImpactCard.module.css';
import { SiOpslevel } from "react-icons/si";
import { FaTree } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

function ImpactCard() {

    const impacts = [
        {
            num: '7',
            text: 'day streak',
            subtext: 'Keep it going! 🔥',
            icon: SiOpslevel,
            iconColor: 'yellow'
        },
        {
            num: '2.4',
            text: 'kg CO2 saved',
            subtext: 'Equivalent to planting a tree 🌲',
            icon: FaTree,
            iconColor: 'var(--green-shade-two)',
        },
        {
            num: '12L',
            text: 'water saved',
            subtext: 'Every drop counts 💧',
            icon: FaDroplet,
            iconColor: 'blue'
        }
    ];

    return (
        <div className={styles.container}>
            <p className={styles.heading}> Your Impact</p>

            <div className={styles.impactContainer}>
                {impacts.map((task) => (
                    <div className={styles.impact}>
                        <div className={styles.iconContainer}>
                            <task.icon size={20} color={task.iconColor}/>
                        </div>
                        <div className={styles.textContainer}>
                            <p> <strong> {task.num}</strong> {task.text}</p>
                            <span> {task.subtext}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImpactCard;