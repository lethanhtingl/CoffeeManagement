
import styles from './dash.module.scss';
import TodayIcon from '@mui/icons-material/Today';
import CallMissedIcon from '@mui/icons-material/CallMissed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Dash(){
    return (
        <div className={styles.dashBody}>
            <div className = {styles.sideBar}>
                <span>Good Morning Team!</span>
                <ul className={styles.listProceeds}>
                    <li className={`${styles.proceedCard} ${styles.today}`}>
                        <TodayIcon className={styles.proceedIcon}/>
                        <div>
                            <span className={styles.proceedTitle}>Today</span>
                            <span className={styles.proceeded}>$ 200</span>
                        </div>
                    </li>
                    <li className={`${styles.proceedCard} ${styles.thisWeek}`}>
                        <CallMissedIcon className={styles.proceedIcon} />
                        <div>
                            <span className={styles.proceedTitle}>This Week</span>
                            <span className={styles.proceeded}>$ 5000</span>
                        </div>
                    </li>
                    <li className={`${styles.proceedCard} ${styles.thisMonth}`}>
                        <AccessTimeIcon className={styles.proceedIcon} />
                        <div>
                            <span className={styles.proceedTitle}>This Month</span>
                            <span className={styles.proceeded}>$ 14500</span>
                        </div>
                    </li>
                </ul>

                <div className={styles.chartAndSomething}>
                    <div className={styles.chart}>
                        
                    </div>
                </div>
            </div>
            <div className={styles.rightSideBar}>
                hihi
            </div>
        </div>
    );
}

export default Dash;