import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

import ShowAllPets from "./ShowAllPets/ShowAllPets";
import MediaToCare from './MediaToCare/MediaTocare';

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

import { useState } from 'react';

import './Home.scss';



function Home() {
    const banners = [banner1, banner2, banner3]
    const messages = ['Adote um PET','Denuncie maus tratos!', 'Encontrou um animal perdido? Registre-o!' ]
    
    
    const [currentIndex, setCurrentIndex] = useState(0)

    function previousBanner () {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex -1)    
        }
    }
    function nextBanner () {
        if(currentIndex < banners.length-1) {
            setCurrentIndex(currentIndex +1)    
        }
    }

    return(
        <>
            <Header/>
            <div className="container">
                <div className="carousel" >
                    <div className="carousel_btn-arrow" onClick={previousBanner}><FaArrowAltCircleLeft/></div>
                    <div className="carousel_btn-arrow" onClick={nextBanner}><FaArrowAltCircleRight/> </div>
                    <img className='carousel_img-banner' src={banners[currentIndex]}/>
                    <p className="carousel_messages">{messages[currentIndex]}</p>
                </div>
                <div className="section-scrollbar">
                    <p>A procura de companhia?</p>
                    <p>Adote um PET</p>
                    <ShowAllPets/>
                </div>
                <div className="section-scrollbar">
                    <p>Aprenda a como cuidar do seu pet</p>
                    <p>Gato ou cachorro, conheça os cuidados básicos</p>
                    <MediaToCare/>
                </div>
            </div>
            <Navbar/>
        </>
    )
}
export default Home;
