import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './header.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';

function Header(){
    return(


    <div className= {styles.header}>
        <Box sx={{ width: 1, alignItems: 'center', height: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box className={styles.headerCol} gridColumn="span 3">
                        <span>Welcome to the show!</span>
                        <h3>Let's Choose Your Drinks</h3>
                </Box>
                <Box className={styles.headerCol} gridColumn="span 5">
                    <div className= {styles.headerSearch}>
                            <input 
                                type={'text'} placeholder='Search Menu...' className={styles.searchInput} 
                            />
                            <SearchOutlinedIcon  className={styles.searchIcon}/>
                    </div>
                </Box>
                <Box className={styles.headerCol} gridColumn="span 4">
                    <div className={styles.userInfo}>
                        <NotificationsOutlinedIcon className={styles.notifiIcon}/>
                        <div className= {styles.users}>
                            <Avatar className={styles.avatar} alt="Le Thanh Tin" src="../assets/userImg/lethanhtin.jpg"/>
                            <div className={styles.user}>
                                <span className={styles.userType}>Admin</span>
                                <span className={styles.userName}>Le Thanh Tin</span>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </Box>
    </div>

    );
}

export default Header;