import { useRef, useState, useEffect } from "react";
import RotateImg from "../assets/Rotate.png";
import PicImg from "../assets/take-pic.png";
import ChangeImg from "../assets/change.png";
import BackImg from "../assets/atras.png";
import CheckImg from "../assets/pic.png";
import DownloadImg from "../assets/download.png";
// --- CAM ---
import MarcoCam1 from '../assets/Marcos/cam/1.png';
import MarcoCam2 from '../assets/Marcos/cam/2.png';
import MarcoCam3 from '../assets/Marcos/cam/3.png';
import MarcoCam4 from '../assets/Marcos/cam/4.png';
import MarcoCam5 from '../assets/Marcos/cam/5.png';
import MarcoCam6 from '../assets/Marcos/cam/6.png';
import MarcoCam7 from '../assets/Marcos/cam/7.png';
import MarcoCam8 from '../assets/Marcos/cam/8.png';
import MarcoCam9 from '../assets/Marcos/cam/9.png';
import MarcoCam10 from '../assets/Marcos/cam/10.png';
// Text
import MarcoText1 from '../assets/Marcos/text/1.png';
import MarcoText2 from '../assets/Marcos/text/2.png';
import MarcoText3 from '../assets/Marcos/text/3.png';
import MarcoText4 from '../assets/Marcos/text/4.png';
import MarcoText5 from '../assets/Marcos/text/5.png';
import MarcoText6 from '../assets/Marcos/text/6.png';
import MarcoText7 from '../assets/Marcos/text/7.png';
import MarcoText8 from '../assets/Marcos/text/8.png';
import MarcoText9 from '../assets/Marcos/text/9.png';
import MarcoText10 from '../assets/Marcos/text/10.png';
import MarcoText11 from '../assets/Marcos/text/11.png';
import MarcoText12 from '../assets/Marcos/text/12.png';
import MarcoText13 from '../assets/Marcos/text/13.png';
import MarcoText14 from '../assets/Marcos/text/14.png';
import MarcoText15 from '../assets/Marcos/text/15.png';
import MarcoText16 from '../assets/Marcos/text/16.png';
import MarcoText17 from '../assets/Marcos/text/17.png';
import MarcoText18 from '../assets/Marcos/text/18.png';
import MarcoText19 from '../assets/Marcos/text/19.png';
import MarcoText20 from '../assets/Marcos/text/20.png';
import MarcoText21 from '../assets/Marcos/text/21.png';
import MarcoText22 from '../assets/Marcos/text/22.png';
import MarcoText23 from '../assets/Marcos/text/23.png';
import MarcoText24 from '../assets/Marcos/text/24.png';
import MarcoText25 from '../assets/Marcos/text/25.png';
import MarcoText26 from '../assets/Marcos/text/26.png';
import MarcoText27 from '../assets/Marcos/text/27.png';
import MarcoText28 from '../assets/Marcos/text/28.png';
// Stickers
import Sticker31 from '../assets/Marcos/stickers/31.png';
import Sticker32 from '../assets/Marcos/stickers/32.png';
import Sticker33 from '../assets/Marcos/stickers/33.png';
import Sticker34 from '../assets/Marcos/stickers/34.png';
import Sticker35 from '../assets/Marcos/stickers/35.png';
import Sticker36 from '../assets/Marcos/stickers/36.png';
import Sticker37 from '../assets/Marcos/stickers/37.png';
import Sticker38 from '../assets/Marcos/stickers/38.png';
import Sticker39 from '../assets/Marcos/stickers/39.png';
import Sticker40 from '../assets/Marcos/stickers/40.png';
import Sticker41 from '../assets/Marcos/stickers/41.png';
import Sticker42 from '../assets/Marcos/stickers/42.png';
import Sticker43 from '../assets/Marcos/stickers/43.png';
import Sticker44 from '../assets/Marcos/stickers/44.png';
import Sticker45 from '../assets/Marcos/stickers/45.png';
import Sticker46 from '../assets/Marcos/stickers/46.png';
import Sticker47 from '../assets/Marcos/stickers/47.png';
import Sticker48 from '../assets/Marcos/stickers/48.png';
import Sticker49 from '../assets/Marcos/stickers/49.png';
import Sticker50 from '../assets/Marcos/stickers/50.png';
import Sticker51 from '../assets/Marcos/stickers/51.png';
import Sticker52 from '../assets/Marcos/stickers/52.png';
import Sticker53 from '../assets/Marcos/stickers/53.png';

    // --- LISTA DE MARCOS ---
    const framesList = [
        MarcoText1, Sticker31, MarcoCam1,
        MarcoText2, Sticker32, MarcoCam2,
        MarcoText3, Sticker33, MarcoCam3,
        MarcoText4, Sticker34, MarcoCam4,
        MarcoText5, Sticker35, MarcoCam5,
        MarcoText6, Sticker36, MarcoCam6,
        MarcoText7, Sticker37, MarcoCam7,
        MarcoText8, Sticker38, MarcoCam8,
        MarcoText9, Sticker39, MarcoCam9,
        MarcoText10, Sticker40, MarcoCam10,
        MarcoText11, Sticker41,
        MarcoText12, Sticker42,
        MarcoText13, Sticker43,
        MarcoText14, Sticker44,
        MarcoText15, Sticker45,
        MarcoText16, Sticker46,
        MarcoText17, Sticker47,
        MarcoText18, Sticker48,
        MarcoText19, Sticker49,
        MarcoText20, Sticker50,
        MarcoText21, Sticker51,
        MarcoText22, Sticker52,
        MarcoText23, Sticker53,
        MarcoText24,
        MarcoText25,
        MarcoText26,
        MarcoText27,
        MarcoText28,
    ];


    export default function Pictures() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const frameRef = useRef(null);

    const [currentFrame, setCurrentFrame] = useState(0);
    const [currentCamera, setCurrentCamera] = useState("user");
    const [isPreview, setIsPreview] = useState(false);


    // CAMARA
    useEffect(() => {
        async function startCamera() {
        if (!videoRef.current) return;
        if (videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: currentCamera }
            });
            videoRef.current.srcObject = stream;
        } catch (err) {
            console.error("Error accediendo a la cámara:", err);
        }
        }

        if (!isPreview) startCamera();
    }, [currentCamera, isPreview]);

    // PREVIEW
        const handleCapture = () => {
        if (isPreview) return;
        if (!videoRef.current || !canvasRef.current || !frameRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const container = videoRef.current.parentElement;
        const cw = container.offsetWidth;
        const ch = container.offsetHeight;

        const vw = videoRef.current.videoWidth;
        const vh = videoRef.current.videoHeight;

        const containerRatio = cw / ch;
        const videoRatio = vw / vh;

        let sx, sy, sWidth, sHeight;

        // Calcular recorte como object-fit: cover
        if (videoRatio > containerRatio) {
            sHeight = vh;
            sWidth = vh * containerRatio;
            sx = (vw - sWidth) / 2;
            sy = 0;
        } else {
            sWidth = vw;
            sHeight = vw / containerRatio;
            sx = 0;
            sy = (vh - sHeight) / 2;
        }

        // Canvas igual al contenedor
        canvas.width = cw;
        canvas.height = ch;

        // Dibujar recorte del video
        ctx.drawImage(videoRef.current, sx, sy, sWidth, sHeight, 0, 0, cw, ch);

        // Dibujar marco encima
        const frame = new Image();
        frame.src = frameRef.current.src;
        frame.onload = () => {
            ctx.drawImage(frame, 0, 0, cw, ch);
            setIsPreview(true);
        };
        };


    // 🔄 Rotar cámara
    const handleRotate = () => {
        if (isPreview) return;
        setCurrentCamera(currentCamera === "user" ? "environment" : "user");
    };

    // 🖼 Cambiar marco
    const handleFrameChange = () => {
        if (isPreview) return;
        const next = (currentFrame + 1) % framesList.length;
        setCurrentFrame(next);
    };

    // ⬇️ Descargar imagen
    const handleDownload = () => {
        const previewCanvas = canvasRef.current;

        // Crear canvas temporal 1080x1920
        const downloadCanvas = document.createElement("canvas");
        downloadCanvas.width = 1080;
        downloadCanvas.height = 1920;
        const ctx = downloadCanvas.getContext("2d");

        // Escalar la imagen del preview al tamaño de descarga
        ctx.drawImage(previewCanvas, 0, 0, 1080, 1920);

        const link = document.createElement("a");
        link.download = "foto-lay.png";
        link.href = downloadCanvas.toDataURL("image/png");
        link.click();
        };

    // 🔙 Volver a cámara
    const handleBack = () => setIsPreview(false);

    return (
        <div
        className="page-transition"
        style={{
            margin: "0",
            width: "375px",
            height: "812px",
            backgroundColor: "#FFDAE7",
            overflow: "hidden",
            position: "relative"
        }}
        >
        <div
            className="camera-container"
            style={{ position: "absolute", top: 74, left: 1, width: 373, height: 663, overflow: "hidden" }}
        >
            <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: isPreview ? "none" : "block"
            }}
            ></video>

            <canvas
            ref={canvasRef}
            style={{
                width: "100%",
                height: "100%",
                display: isPreview ? "block" : "none"
            }}
            ></canvas>

            <img
            ref={frameRef}
            className="frame"
            src={framesList[currentFrame]}
            alt="Marco"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
            />
        </div>

        {/* BOTONES */}
        <div
        className="controls"
        style={{
            position: "absolute",
            bottom: 110,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 40
        }}
        >
        <img
            src={isPreview ? BackImg : RotateImg}
            alt={isPreview ? "Volver" : "Rotar cámara"}
            onClick={isPreview ? handleBack : handleRotate}
            style={{
            width: 36,
            height: 36,
            cursor: "pointer",
            objectFit: "contain"
            }}
        />

        <img
            src={isPreview ? CheckImg : PicImg}
            alt={isPreview ? "Check" : "Tomar foto"}
            onClick={handleCapture}
            style={{
            width: 70,
            height: 70,
            cursor: "pointer",
            objectFit: "contain"
            }}
        />

        <img
            src={isPreview ? DownloadImg : ChangeImg}
            alt={isPreview ? "Descargar" : "Cambiar marco"}
            onClick={isPreview ? handleDownload : handleFrameChange}
            style={{
            width: 32,
            height: 32,
            cursor: "pointer",
            objectFit: "contain"
            }}
        />
        </div>
        </div>
    );
}