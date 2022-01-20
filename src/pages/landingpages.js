import styles from "./landingpage.module.scss"
import Category from "../components/Category/category"
import Menu from "../components/Menu/menu";

function LandingPage(){

    return (
        <div className={styles.Menu}>
            <div className={styles.homeMenu}>
                <Category />
                <Menu />
            </div>

            <div className={styles.homeBill}>

            </div>
        </div>
    );
}

export default LandingPage;