import './Navbar.css';
import FAC from '../../../public/assets/icons/fast-acess-camera.png';
import Pointer from '../../../public/assets/icons/pointer.svg';
import Search from '../../../public/assets/icons/search.svg';

function Navbar() {
    return(
        <div>
            <div className='navbar'>
                <div className='box'>
                    <img src={Pointer} alt="" />
                    <p>PETS NO MAPA</p>
                </div>
                <img className='navbar_fast_acess_camera' src={FAC} />
                <div className='box'>
                    <img src={Search}/>
                    <p>PET PERDIDO</p>
                </div>
            </div>
            <div className='ghostNavbar'></div>
        </div>
    )
}

export default Navbar;