import styles from './RewardsRedemption.module.css';
import { FaGifts } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaTree } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";

function RewardsRedemption() {
    return(
        <div className={styles.rewardsCard}>
  <div className={styles.rewardsHeader}>
    <FaGifts className="w-8 h-8" style={{ color: '#8fc866' }} />
    <h2 className={styles.rewardsTitle}>Redeem Your Eco Coins</h2>
  </div>

  <div className={styles.rewardsGrid}>
    <div className={styles.redeemBox}>
      <h3 className={styles.redeemTitle}>Cryptocurrency Redemption</h3>
      <div className={styles.cryptoGrid}>
        <div className={`${styles.cryptoItem} ${styles.cryptoItemOrange}`}>
          <FaBitcoin className={`${styles.cryptoIcon} text-orange-500`} />
          <span className={styles.cryptoText}>BTC</span>
        </div>
        <div className={`${styles.cryptoItem} ${styles.cryptoItemBlue}`}>
          <FaEthereum className={`${styles.cryptoIcon} text-orange-500`} />
          <span className={styles.cryptoText}>ETH</span>
        </div>
        <div className={`${styles.cryptoItem} ${styles.cryptoItemGreen}`}>
          <LuCircleDollarSign className={styles.cryptoIcon} style={{ color: '#81c784' }} />
          <span className={styles.cryptoText}>USDT</span>
        </div>
      </div>
      <button className={styles.redeemButton}>
        Redeem Crypto
      </button>
    </div>
    <div className={styles.treeBox}>
  <h3 className={styles.treeTitle}>Plant a Tree Donation</h3>
  <div className={styles.treeContent}>
    <FaTree className={styles.treeIcon} />
    <p className={styles.treeText}>
      Partner with NGOs to plant real trees and make a lasting impact on our planet.
    </p>
  </div>
  <button className={styles.treeButton}>
    Donate to NGO
  </button>
</div>
  </div>
</div>
    );
};

export default RewardsRedemption;