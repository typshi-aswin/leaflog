import Navbar from "../../../components/Navbar/Navbar";
import styles from './Login.module.css';
import { GiLindenLeaf } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";

function Login() {
    return (
        <>
            <Navbar />
            <div className={styles.backgroundContainer}>
                <div className={styles.container}>
                    <div className={styles.topContainer}>
                        <div className={styles.iconContainer}>
                            <GiLindenLeaf size={35} />
                        </div>
                        <p> Hey Human! </p>
                        <span>Login to track your eco journey 🌱</span>
                    </div>
                    <div className={styles.buttonContainer}>
                        <input type="text" className={styles.textBox} placeholder="Enter your email" />
                        <button className={styles.buttonDesign}> Send OTP </button>
                    </div>
                    <div className={styles.privacy}>
                    <FaShieldAlt size={12} color="var(--text-color-secondary)"/>
                    <span className={styles.privacyText}> We care about your privacy. Your email is safe with us</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;