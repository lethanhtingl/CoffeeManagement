
import { useState } from "react";
import {Link, NavLink} from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import PersonOutline from '@mui/icons-material/PersonOutline';
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
                    <NavLink to='/' title='Trang Chủ' className={styles.pageLink}>
                        <HomeOutlinedIcon className={styles.navItem} fontSize='large'/>
                    </NavLink>
                    <NavLink to='/Library' title='SomeThing' className={styles.pageLink}>
                        <CategoryOutlinedIcon className={styles.navItem} fontSize='large'/>
                    </NavLink>
                    <NavLink to='/Dash' title='DashBoard' className={styles.pageLink}>
                        <PaidOutlinedIcon className={styles.navItem} fontSize='large'/>
                    </NavLink>
                    <NavLink to='/Emp' title='Nhân Viên' className={styles.pageLink}>
                        <PersonOutline className={styles.navItem} fontSize='large'/>
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