import styles from './EcoMissions.module.css';
import { useState } from 'react';

function EcoMissions() {
    const ecoTasks = [
        "Use a reusable water bottle",
        "Turn off lights when not in use",
        "Recycle plastic waste",
        "Use public transport or carpool",
        "Avoid single-use plastics"
    ];

    const [checkedTasks, setCheckedTasks] = useState(Array(ecoTasks.length).fill(false));

    const handleCheck = (index: number) => {
        const newChecked = [...checkedTasks];
        newChecked[index] = !newChecked[index];
        setCheckedTasks(newChecked);
    };

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p>Today's Eco Missions</p>
                <div className={styles.numberContainer}>
                    0/{ecoTasks.length}
                </div>
            </div>
            <div className={styles.taskContainer}>
                {ecoTasks.map((task, index) => (
                    <div key={index} className={styles.task}>
                        <label className={styles.checkboxContainer}>
                            <input
                                type="checkbox"
                                checked={checkedTasks[index]}
                                onChange={() => handleCheck(index)}
                            />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <span className={styles.taskText}>{task}</span>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default EcoMissions;
