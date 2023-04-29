import dog1 from '../../../assets/uploads/Dog1.jpg'
// import dog2 from '../../../assets/uploads/Dog2.jpeg'
// import dog3 from '../../../assets/uploads/Dog3.jpeg'
// import dog4 from '../../../assets/uploads/Dog4.jpg'
// import dog5 from '../../../assets/uploads/Dog5.jpg'
// import dog6 from '../../../assets/uploads/Dog6.jpg'
import dog7 from '../../../assets/uploads/Dog7.jpeg'
import dog8 from '../../../assets/uploads/Dog8.jpeg'
import dog9 from '../../../assets/uploads/Dog9.jpeg'
import dog10 from '../../../assets/uploads/Dog10.jpeg'
import dog11 from '../../../assets/uploads/Dog11.jpg'
import dog12 from '../../../assets/uploads/Dog12.jpg'
import dog13 from '../../../assets/uploads/Dog13.jpg'
import dog14 from '../../../assets/uploads/Dog14.jpg'
import dog15 from '../../../assets/uploads/Dog15.jpg'
import cat1 from '../../../assets/uploads/Gato1.jpeg'
import cat2 from '../../../assets/uploads/Gato2.jpeg'
import cat3 from '../../../assets/uploads/Gato3.jpg'
import cat4 from '../../../assets/uploads/Gato4.jpg'
// import cat5 from '../../../assets/uploads/Gato5.jpg'
// import cat6 from '../../../assets/uploads/Gato6.jpg'
// import cat7 from '../../../assets/uploads/Gato7.jpeg'
// import cat8 from '../../../assets/uploads/Gato8.jpg'
// import cat9 from '../../../assets/uploads/Gato9.jpg'
import cat10 from '../../../assets/uploads/Gato10.jpg'
import cat11 from '../../../assets/uploads/Gato11.jpg'
import cat12 from '../../../assets/uploads/Gato12.jpg'
import cat13 from '../../../assets/uploads/Gato13.jpg'
import cat14 from '../../../assets/uploads/Gato14.jpg'
import cat15 from '../../../assets/uploads/Gato15.jpg'

import './ShowAllPets.scss';

function ShowAllPets() {
    const allPets = [dog1,dog7,dog8,dog9,dog10,dog11,dog12,dog13,dog14,dog15,cat1,cat2,cat3,cat4,cat10,cat11,cat12,cat13,cat14,cat15];
    

    return(
        <div className="scrollbar">
            {allPets.map((pet, index) => (
                <img className='scrollbar_petsToCatch' src={pet} key={pet[index]}/>
            ))}
        </div>
    )
}
export default ShowAllPets;