import { useState } from 'react';
import { BsList } from 'react-icons/bs';

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    background: '#3E3A3A',
    padding: '.5rem',
    align: 'left'
}


const Header = () => {
    const [iconColor,setColor] = useState('grey');
    return (
        <div style={headerStyle}>
            <div style={{padding: '.5em'}} onMouseOver={() => setColor('white')} onMouseOut={() => setColor('grey')}>
                <BsList size='2.5em' color={iconColor}/>
            </div>
        </div>
    );
}

export default Header;