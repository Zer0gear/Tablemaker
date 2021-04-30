import styles from './Table.module.css'
import {useCallback, useState, useEffect} from 'react'
import {BsXSquareFill} from 'react-icons/bs'

const Table = ({arr, setArr, deleteRow}) => {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [data, setData] = useState(arr);
    const handleClick = (e) => {

        const id = e.target.id;
        let res = id.split('-');
        const row = parseInt(res[1]);
        const col = parseInt(res[2]);
        const val = prompt("แก้ไขตารางแถวที่ "+(row+1)+" คอลัมน์ที่ "+(col+1), e.target.innerText);
        let arr = data;
        arr[row][col] = val;
        setData(arr);
        setArr(arr);
        forceUpdate();
    }

    
    const changeColor = (e,color) => {
        e.target.bgColor = color
    }

    const handleDeleteRow = (e) => {
        const id = e.target.id;
        let res = id.split('-');
        const row = parseInt(res[1]);
        deleteRow(row-1);
    }

    useEffect(() => {
        setData(arr);
      }, [arr]);

    return(
        <>
        {
            data.length===0||data[0].length===0 ? 
            <img src={'/notable.png'} alt=""/> :
            <table className={styles.table}>
                {
                    data.map((r,rindex) => 
                        <tr className={styles.row}>
                            {r.map((c,cindex) =>
                                <td className={styles.columns} id={'th-'+rindex+'-'+cindex} style={{width: 100/data[0].length+'%'}}
                                onClick={(e)=>handleClick(e)} onMouseOver={(e) => changeColor(e,'grey')} onMouseOut={(e) => changeColor(e,'white')}>
                                    {c}
                                </td>      
                            )}
                            <td className={styles.delete} id={'dl-'+rindex}><BsXSquareFill onClick={(e)=>handleDeleteRow(e)} color='red'/></td>
                        </tr>


                    )
                }
            </table>
        }
        </>
    )
}

export default Table;