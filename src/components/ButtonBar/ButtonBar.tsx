import React from 'react';
import styles from './ButtonBar.module.css';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const ButtonBar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/home', label: 'Home', icon: <FaHome size={20}/> },
        { path: '/profile', label: 'Profile', icon: <FaUser /> },
        { path: '/settings', label: 'Settings', icon: <FaCog /> },
    ];

    return (
        <div className={styles.bottomBar}>
            {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                    <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className={`${styles.navButton} ${isActive ? styles.active : ''}`}
                    >
                        {item.icon}
                        {isActive && <span className={styles.label}>{item.label}</span>}
                    </button>
                );
            })}
        </div>
    );
};

export default ButtonBar;
