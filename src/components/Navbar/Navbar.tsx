import styles from './Navbar.module.css';
import { GiLindenLeaf } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();
    const isHome = location.pathname === '/' || location.pathname === '';

    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.iconContainer}>
                        <GiLindenLeaf size={20} />
                    </div>
                    <div className={styles.textContainer}>
                        <p>LeafLog</p>
                        <span>Sustainable Living Tracker</span>
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    {isHome ? (
                        <div className={styles.welcomeContainer}>
                            <p>Welcome!</p>
                            <span>Ready for another eco-friendly day?</span>
                        </div>
                    ) : (
                        <>
                            <span>username</span>
                            <RxAvatar size={30}/>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;