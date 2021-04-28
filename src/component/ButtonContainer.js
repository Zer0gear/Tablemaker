import styles from './ButtonContainer.module.css'
import Button from 'react-bootstrap/Button'

const ButtonContainer = () => {
    return(
        <div className={styles.buttoncontainer}>
            <button className={styles.button} id={styles.leftbutton} > เพิ่มแถว </button>
            <button className={styles.button}>เพิ่มคอลัมน์</button>
        </div>
    )
}

export default ButtonContainer