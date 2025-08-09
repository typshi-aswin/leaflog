import styles from './Profile.module.css';
import Navbar from '../../components/Navbar/Navbar';
import ButtonBar from '../../components/ButtonBar/ButtonBar';

function Profile () {
    return(
        <> 
        <Navbar />
        <div className={styles.container}>

        </div>
        <ButtonBar />
        </>
    );
};

export default Profile;