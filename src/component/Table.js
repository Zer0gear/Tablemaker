import styles from './Table.module.css'
import {useCallback, useState} from 'react'

const createEmptyArray = (row, col) => {
    let arr = []
    for(let i = 0; i < row; i++){
        let subarr = []
        for(let j = 0; j < col; j++){
            subarr.push('')
        }
       arr.push(subarr)
    }
    return arr
}

const Table = (props) => {
    const [row, setRow] = useState(5);
    const [col, setCol] = useState(4);
    const [data, setData] = useState(props.data ? props.data : createEmptyArray(row,col));
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const handleClick = (e) => {
        const id = e.target.id;
        let res = id.split('-');
        const row = parseInt(res[1]);
        const col = parseInt(res[2]);
        const val = prompt("แก้ไขตารางแถวที่ "+(row+1)+" คอลัมน์ที่ "+(col+1));
        let arr = data;
        arr[row][col] = val;
        setData(arr);
        forceUpdate();
    }
    return(
            <table className={styles.table}>
                {
                    data.map((r,rindex) => 
                        <tr className={styles.row}>
                            {r.map((c,cindex) =>
                                <th className={styles.columns} id={'th-'+rindex+'-'+cindex} onClick={(e)=>handleClick(e)} style={{width: 100/col+'%'}}>
                                    {c}
                                </th>
                            )}
                        </tr>
                    )
                }
            </table>
    )
}

export default Table;