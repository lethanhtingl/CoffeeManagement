import styles from "./landingpage.module.scss"
import Category from "../components/Category/category"
import Menu from "../components/Menu/menu";
import Bill from "../components/Bill/bill";


function LandingPage(){

    return (
        <div className={styles.Menu}>
            <div className={styles.homeMenu}>
                <Category />
                <Menu />
            </div>

            <div className={styles.homeBill}>
                <Bill />
            </div>
        </div>
    );
}

export default LandingPage;