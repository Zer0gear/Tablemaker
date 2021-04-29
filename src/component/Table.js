import styles from './Table.module.css'
import {useCallback, useState, useEffect} from 'react'

const Table = ({arr, setArr}) => {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [data, setData] = useState(arr);
    
    const handleClick = (e) => {
        const id = e.target.id;
        let res = id.split('-');
        const row = parseInt(res[1]);
        const col = parseInt(res[2]);
        const val = prompt("แก้ไขตารางแถวที่ "+(row+1)+" คอลัมน์ที่ "+(col+1));
        let arr = data;
        arr[row][col] = val;
        setData(arr);
        setArr(arr);
        forceUpdate();
    }

    
    const handleMouseOut = () => {
    }

    useEffect(() => {
        setData(arr);
      }, [arr]);
    return(
            <table className={styles.table}>
                {
                    data.map((r,rindex) => 
                        <tr className={styles.row}>
                            {r.map((c,cindex) =>
                                <th className={styles.columns} id={'th-'+rindex+'-'+cindex} style={{width: 100/data[0].length+'%'}}
                                onClick={(e)=>handleClick(e)} onMouseOut={()=>handleMouseOut()}
                                >
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