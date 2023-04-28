import { CiLocationOn } from 'react-icons/ci';
import { BiSearch } from 'react-icons/bi';
import FastAcess from '../../assets/fast-acess.png';
import { Link } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {
    
    return(
        <nav>
            <div className="box">
                <div><CiLocationOn/></div>
                <p>PETS NO MAPA</p>  
            </div>                
            <Link to='/camera' className='box_fast-acess'>
                <img src={FastAcess}/>
            </Link>
            <div className="box">
                <div><BiSearch/></div>
                <p>PET PERDIDO</p> 
            </div>
        </nav>
    )
}

export default Navbar;