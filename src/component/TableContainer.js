
import ButtonContainer from "./ButtonContainer.js"
import Table from "./Table.js"
import styles from "./TableContainer.module.css"
import {useState, useEffect} from 'react'


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

const TableContainer = ({startSize}) => {
    
    const [row,setRow] = useState(startSize[0]);
    const [col,setCol] = useState(startSize[1]); 
    const [data, setData] = useState((row!==0&&col!==0) ? createEmptyArray(row, col) : [])
    
    const addRow = () => {
        if(data.length!==0){
            let tmp = [...data]
            let arr = []
            for(let i = 0; i<tmp[0].length; i++){
                arr.push('')
            }
            tmp.push(arr)
            setData(tmp)
            setRow(data.length)
            setCol(data[0].length)
        }
        else{
            setData(createEmptyArray(1, 1))
        }
    }
    
    const addCol = () => {
        if(data.length!==0){
            let tmp = [...data]
            for(let i = 0; i<tmp.length; i++){
                tmp[i].push('')
            }
            setData(tmp)
            setRow(data.length)
            setCol(data[0].length)
        }
        else{
            setData(createEmptyArray(1, 1))
        }
    }

    const deleteRow = (index) => {
        let tmp = [...data]
        tmp.splice(index,1)
        console.log(tmp)
        setData(tmp)
    }

    useEffect(() => {
        setRow(startSize[0])
        setCol(startSize[1])
        setData(createEmptyArray(startSize[0], startSize[1]))
    }, [startSize]);

    console.log("TableContainer",data)
    return(
        <div className={styles.tablecontainer}>
            <ButtonContainer addRow={addRow} addCol={addCol}/>
            <Table arr={data} setArr={setData} deleteRow={deleteRow}/>
        </div>
    )
}

export default TableContainer;