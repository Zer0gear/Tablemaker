import {useEffect} from "react"
import ButtonContainer from "./ButtonContainer.js"
import Table from "./Table.js"
import styles from "./TableContainer.module.css"

const TableContainer = () => {
    return(
        <div className={styles.tablecontainer}>
            <ButtonContainer/>
            <Table/>
        </div>
    )
}

export default TableContainer;