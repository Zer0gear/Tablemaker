import styles from './ButtonContainer.module.css'
import {useImperativeHandle, useState} from 'react'

const ButtonContainer = ({addRow, addCol}) => {
    const handleClickAddRow = () => {
        addRow()
    }
    const handleClickAddCol = () => {
        addCol()
    }
    return(
        <div className={styles.buttoncontainer}>
            <button className={styles.button} id={styles.leftbutton} onClick={handleClickAddRow}> เพิ่มแถว </button>
            <button className={styles.button} onClick={handleClickAddCol}>เพิ่มคอลัมน์</button>
        </div>
    )
}

export default ButtonContainer