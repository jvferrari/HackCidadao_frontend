import { IoPersonCircleOutline } from 'react-icons/io5';
import './Header.scss';

function Header () {
    return(
        <header className='header'>
            <div></div>
            <div className='header_logo'>Logo</div>
            <div className='header_icon-profile'> <IoPersonCircleOutline /> </div>
        </header>
    )
}

export default Header;