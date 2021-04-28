import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import styles from './Header.module.css';


const Header = () => {
    const [iconColor,setColor] = useState('grey');
    const [showDropdown, setShowDropdown] = useState(true);
    const handleClickIcon = () => {
        setShowDropdown(!showDropdown)
    }
    
    return (
        <div className={styles.header}>
            <div className={styles.icon} onMouseOver={() => setColor('white')} onMouseOut={() => setColor('grey')} onClick={() => handleClickIcon()}>
                <BsList size='2.5em' color={iconColor}/>
            </div>
        </div>
    );
}

export default Header;