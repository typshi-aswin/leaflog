import styles from './PersonalDetails.module.css';
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

function PersonalDetails() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileCard}>
                <div className={styles.avatarWrapper}>
                    <div className={styles.avatarCircle}>
                        <img
                            src="assets\envar-studio-valorant-first-breakfast-final-02-22.jpg"
                            alt="User Avatar"
                            className={styles.avatarImage}
                        /></div>
                    <button className={styles.cameraBtn}>
                        <IoCameraOutline className="w-5 h-5" style={{ color: '#8fc866' }} />
                    </button>
                </div>

                <h1 className={styles.username}>Aswin V Sivan</h1>
                <p className={styles.email}>aswinvsivan@gmail.com</p>

                <button className={styles.editProfileBtn}>
                    <MdOutlineEdit className="w-4 h-4" />
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

export default PersonalDetails;