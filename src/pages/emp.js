
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styles from "./emp.module.scss";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
function Emp(){
    return (
        <>
            <AddCircleOutlineIcon className={styles.empAdd}/>
            <ul className={styles.empList}>
                <li className ={styles.empItem}>
                    <div className={styles.empInfo}>
                        <img className={styles.empImg}  src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/140824654_1772222676321524_1957270478792163522_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NyWzZsFKy2oAX9MroZs&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8mA_UmBgKDRdCwskwUTYqPRdLxOz2roUTUs3_s71DEGw&oe=624FA604'/>
                        <span className='empName'>Le Thanh Tin</span>
                    </div>
                    <ArrowDropDownCircleOutlinedIcon className={styles.empDelete}/>
                </li>
                    
            </ul>
        </>
    );
}

export default Emp;