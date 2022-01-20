import styles from "./menu.module.scss"
import Button from '@mui/material/Button';
import { style } from "@mui/system";

function Menu(){
    return(
        <div>
            <h2 className={styles.menuTitle}>Menu</h2>
            <ul className={styles.menuList}>
                <li className={styles.menuForm}>
                    <div className={styles.menuItem}>
                        <img className={styles.productImg} src="https://thuvienhoasen.org/images/file/FDoAqJwm1QgBAAZr/cup-of-coffee.jpg"/>
                        <div>
                            <h3 className={styles.productTitle}>Coffee</h3>
                            <p className={styles.itemDesc}>Selected coffee beans with the best quality from...</p>
                            <span className={styles.productPrice}>$ 130.00</span>
                        </div>
                    </div>
                    <Button className={styles.detailBtn} variant="outlined">View Details</Button>
                </li>

                <li className={styles.menuItem}>
                    <div className={styles.menuItem}>
                            <img className={styles.productImg} src="https://thuvienhoasen.org/images/file/FDoAqJwm1QgBAAZr/cup-of-coffee.jpg"/>
                            <div>
                                <h3 className={styles.productTitle}>Coffee</h3>
                                <p className={styles.itemDesc}></p>
                                <span className={styles.productPrice}></span>
                            </div>
                    </div>
                    <Button variant="outlined">Outlined</Button>
                </li>

                <li className={styles.menuItem}>
                    
                </li>

                <li className={styles.menuItem}>
                    
                </li>
            </ul>
        </div>
    );
}

export default Menu;