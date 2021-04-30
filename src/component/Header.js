import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import styles from './Header.module.css';
import {Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({setSize}) => {
    const [iconColor,setColor] = useState('grey');
    const [showDropdown, setShowDropdown] = useState(true);
    const handleClickIcon = () => {
        setShowDropdown(!showDropdown)
    }
    const handleDropdown = (choice) => {
        switch(choice){
            case 'ADD':
                const row = parseInt(prompt("กรุณาระบุจำนวนแถว"));
                const col = parseInt(prompt("กรุณาระบุจำนวนคอลัมน์"));
                setSize([row,col])
        }
    }
    return (
      <div className={styles.header}>

        <style type="text/css">
            {`
            .btn-black {
            background-color: #3E3A3A;
            }

            `}
        </style>

        <div
          className={styles.icon}
          onMouseOver={() => setColor("white")}
          onMouseOut={() => setColor("grey")}
          onClick={() => handleClickIcon()}
        >
        <Dropdown>
        <Dropdown.Toggle variant={'black'} bsPrefix="p-0">
          <BsList size="2.5em" color={iconColor} />
        </Dropdown.Toggle>
          <Dropdown.Menu className="ddmenu">
            <Dropdown.Item onClick={()=>handleDropdown('ADD')}>เพิ่มตารางใหม่</Dropdown.Item>
            <Dropdown.Item disabled> โหลดตาราง </Dropdown.Item>
            <Dropdown.Item disabled> นำเข้าตาราง </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
}

export default Header;