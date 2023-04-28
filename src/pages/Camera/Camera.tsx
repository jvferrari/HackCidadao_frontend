import Header from "../../components/Header/Header";
import { AiFillCloseCircle } from 'react-icons/ai';

import { useEffect, useState } from "react";

import './Camera.scss';

function Camera() {
    const campToCamera = document.getElementById('camera-space')
    const [stream, setStream] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);

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
    }

    function closeCamera() {
        if(stream) {
          stream.getTracks().forEach(track => track.stop())
        }
    }
    return(
        <>
            <Header/>
            <div id="camera-space">
                <div className="close" onClick={closeCamera}><AiFillCloseCircle/></div>
            </div>
            <button onClick={captureImage}>Capturar</button>
            <img className="capturedImage" src={capturedImage}/>
        </>
    )
}
export default Camera;