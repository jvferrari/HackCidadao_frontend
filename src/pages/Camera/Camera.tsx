import Header from "../../components/Header/Header";
import { AiFillCloseCircle } from 'react-icons/ai';

import { useEffect, useState } from "react";

import './Camera.scss';

function Camera() {
    const campToCamera = document.getElementById('camera-space')
    const [stream, setStream] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        cameraOn()
    },[campToCamera])

    function cameraOn() {
        navigator.mediaDevices.getUserMedia({video:true})
        .then(stream => {
            const video = document.createElement('video')
            video.srcObject = stream;
            campToCamera?.appendChild(video)
            video.play()
            video.width = 350;
            setStream(stream)
        })
    }
    function captureImage() {
        const video = document.querySelector('video');
        const canvas = document.createElement('canvas');
        canvas.width = 375;
        canvas.height = 281;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        const capturedImageUrl = canvas.toDataURL('image/png');
        setCapturedImage(capturedImageUrl);
        localStorage.setItem('capturedImage', capturedImage);
    }

    function descart() {
        if(capturedImage) {
            setCapturedImage(null)
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
        });
      }, []);

    async function submitForm(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('hair', document.querySelector('#hair').value);
        formData.append('size', document.querySelector('input[name="size"]:checked').value);
        formData.append('health', document.querySelector('input[name="health"]:checked').value);
        formData.append('latitude', latitude)
        formData.append('longitude', longitude)

        const data = {
            hair: formData.get('hair'),
            size: formData.get('size'),
            health: formData.get('health'),
            latitude: formData.get('latitude'),
            longitude: formData.get('longitude')
        }

        const response = await fetch('http://localhost:3000/camera', {
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(data)
        });
      
        const result = await response.json();
        console.log(result);
    }   

    return(
        <>
            <Header/>
            <div id="camera-space">
                <div className="close" onClick={descart}><AiFillCloseCircle/></div>
            </div>
            <button onClick={captureImage}>Capturar</button>
            
            <form className='container_form'>
                <h3>Registro de PET perdido</h3>
                <div className='container_form_picture'>
                    <label className="label-title" htmlFor="picture">Foto</label>
                    <img className="capturedImage" src={capturedImage}/>
                </div>
                <div>
                    <label className="label-title" htmlFor="hair">Pelagem</label>
                    <select name="hair" id="hair">
                        <option value="null">-----------</option>
                        <option value="branco">Branco</option>
                        <option value="caramelo">Caramelo</option>
                        <option value="cinza">Cinza</option>
                        <option value="preto">Preto</option>
                        <option value="malhado">Malhado</option>
                    </select>
                </div>
                <div className='container_form_porte'>
                    <label className="label-title">Porte</label>
                    <div>
                        <input type="radio" name="size" id="small" value='pequeno' defaultChecked/>
                        <label htmlFor="small">Pequeno</label>
                    </div>
                    <div>
                        <input type="radio" name="size" id="medium" value='medio' />
                        <label htmlFor="medium">Médio</label>
                    </div>
                    <div>
                        <input type="radio" name="size" id="big" value='grande'/>
                        <label htmlFor="big">Grande</label>
                    </div>
                </div>
                <div>
                    <label className="label-title">Estado de Saúde</label>
                    <div>
                        <input type="radio" name="health" id="health" value='saudavel' defaultChecked/>
                        <label htmlFor="health">Saudável</label>
                    </div>
                    <div>
                        <input type="radio" name="health" id="hungry" value='desnutrido'/>
                        <label htmlFor="hungry">Desnutrido</label>
                    </div>
                    <div>
                        <input type="radio" name="health" id="hurt" value='ferido'/>
                        <label htmlFor="hurt">Machudado</label>
                    </div>
                    <div>
                        <input type="radio" name="health" id="sick" value='doente'/>
                        <label htmlFor="sick">Doente</label>
                    </div>
                </div>
                <button className='container_form_btn-register' type="submit" onClick={submitForm}>Registrar</button>
            </form>
        </>
    )
}
export default Camera;