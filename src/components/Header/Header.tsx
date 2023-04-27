import './Header.css';
import { IoPersonCircleOutline } from 'react-icons/io5';
import Logo from '../../../public/assets/img/logo.png'

function Header() {
    return(
        <>
            <div className='header'>
                <div className='divAbstract'></div>
                <img src={Logo} alt="Logo" />
                <div className='header_iconPerfil'><IoPersonCircleOutline /></div>
            </div>
            <div className='ghostHeader'></div>
        </>
    )
}

export default Header;