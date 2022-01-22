
import { useState } from "react";
import styles from "./bill.module.scss";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Bill(){

    const [count, setCount] = useState(1);

    
    return(
        <div className={styles.billContainer}>
            <div className={styles.billTitles}>
                <h2 className={styles.billTitle}>Bill</h2>
                <h2 className={styles.billId}>Order #01</h2>
            </div>
            <div className={styles.billOption}>
                    <button className="btn billBtn">
                        Dine in
                    </button >
                    <button className="btn billBtn">
                        Take Away
                    </button>
                    <button className="btn billBtn">
                        Delivery
                    </button>
            </div>
            <div className={styles.billBody}>
                <div className={styles.billInfo}>
                    <div className={styles.billItem}>
                        <div className={styles.productItem}>
                            <img className={styles.billItemImg} src="https://thuvienhoasen.org/images/file/FDoAqJwm1QgBAAZr/cup-of-coffee.jpg"/>
                            <div className={styles.billItemDesc}>
                                <div>
                                    <h3>Peru Beans</h3>
                                    <span>Beans + 75% + 250g</span>
                                </div>
                                <span className={styles.billItemPrices}>$ 42.50</span>
                            </div>
                        </div>

                    </div>
                    <div className={styles.billItemNum}>
                        <RemoveCircleOutlineIcon sx={{ fontSize:29}} onClick={() => {
                            if(count > 1) setCount(count - 1)
                        }}/>
                        <span>{count}</span>
                        <AddCircleOutlineIcon sx={{ fontSize:29}} onClick={() => setCount(count + 1)}/>
                    </div>
                </div>
        
                
            </div>
            <div className={styles.billPay}>
                <div className={styles.itemprice}>
                    <span>Items</span>
                    <span>$ 102.50</span>
                </div>
                <div className={styles.discount}>
                    <span>Discount</span>
                    <span>- $ 3.00</span>
                </div>
                <div className={styles.totalPrice}>
                    <span>Total</span>
                    <span>-$ 99.50</span>
                </div>
            </div>
            <div className={styles.payMent}>
                <div className={styles.payingType}>
                    <button className="btn payingTypeBtn">
                        Cash
                    </button>
                    <button className="btn payingTypeBtn">
                        Debit
                    </button>
                    <button className="btn payingTypeBtn">
                        E-Wallet
                    </button>
                </div>
                <button type="submit" className="btn primaryBtn checkoutBtn">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Bill;