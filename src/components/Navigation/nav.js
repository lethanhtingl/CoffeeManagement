
import {Link} from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LandingPage from '../../pages/landingpages';
import styles from './nav.module.scss';


function Nav() {
    return (
        <div className= {styles.navbar}>
            <div>
                <div>
                    <AcUnitIcon className={styles.navLogo} color='primary'fontSize='large'/>  
                </div>
                <div>
                    <Link to='/LandingPage'>
                        <HomeOutlinedIcon color='primary' className={styles.navItem} fontSize='large'/>
                    </Link>
                    <CategoryOutlinedIcon className={styles.navItem} fontSize='large'/>
                    <PaidOutlinedIcon className={styles.navItem} fontSize='large'/>
                    <PaymentOutlinedIcon className={styles.navItem} fontSize='large'/>
                    <SettingsOutlinedIcon className={styles.navItem} fontSize='large'/>
                </div>
            </div>
            <div>
                <LogoutIcon className={styles.navLogout} fontSize='large'/>
            </div>
        </div>

    );

}

export default Nav;