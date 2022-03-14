
import { useState } from "react";
import {Link, NavLink} from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LandingPage from '../../pages/landingpages';
import styles from './nav.module.scss';


function Nav( nav ) {

    const [active, setActive] = useState('blue');
    return (
        <div className= {styles.navbar}>
            <div>
                <div>
                    <AcUnitIcon className={styles.navLogo} color='primary' fontSize='large'/>
                </div>
                <div>
                    <NavLink to='/' className={styles.pageLink}>
                        <HomeOutlinedIcon className={styles.navItem} fontSize='large'/>
                    </NavLink>
                    <NavLink to='/Library' className={styles.pageLink}>
                        <CategoryOutlinedIcon className={styles.navItem} fontSize='large'/>
                    </NavLink>
                    <NavLink to='/Dash' className={styles.pageLink}>
                        <PaidOutlinedIcon className={styles.navItem} fontSize='large'/>
                    </NavLink>
                    <NavLink to='/Emp' className={styles.pageLink}>
                        <PaymentOutlinedIcon className={styles.navItem} fontSize='large'/>
                    </NavLink>
                    
                </div>
            </div>
            <div>
                <LogoutIcon className={styles.navLogout} fontSize='large'/>
            </div>
        </div>

    );

}

export default Nav;