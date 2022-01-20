
import Button from '@mui/material/Button';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';
import styles from "./category.module.scss"
function Category(){
    return(
        <div className={styles.category}>
            <ul className={styles.categoryList}>
                <li className={styles.categoryItem}>
                    <Button variant="contained" className={styles.CateBtn}>
                        <CoffeeOutlinedIcon className={styles.cateIcon}/>
                        Coffee
                    </Button>
                </li>
                <li className={styles.categoryItem}>
                    <Button variant="outlined" className={styles.CateBtn}>
                    <CoffeeOutlinedIcon className={styles.cateIcon}/>
                        Tea
                    </Button>
                </li>
                <li className={styles.categoryItem}>
                    <Button variant="outlined" className={styles.CateBtn}>Beans</Button>
                </li>
                <li className={styles.categoryItem}>
                    <Button variant="outlined" className={styles.CateBtn}>Bundles</Button>
                </li>
                <li className={styles.categoryItem}>
                    <Button variant="outlined" className={styles.CateBtn}>Snack</Button>
                </li>
            </ul>
        </div>
    );
}

export default Category;