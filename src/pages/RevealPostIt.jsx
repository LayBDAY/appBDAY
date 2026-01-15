import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostItImgFondo from "../assets/post-it-fondo.png";

export default function RevealPostIt() {
    const navigate = useNavigate();
    const [mensajes, setMensajes] = useState([]);
    const [index, setIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);




    // 🔹 Obtener mensajes desde Google Sheets
    useEffect(() => {
        async function fetchMensajes() {
            try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbzC4RPAQQHmGQ3vS_juQvcSU9pXC2k3a_IvLHCzEMuZnoIYunaSdxYOds-NyDjwOpbfug/exec"); // 🔹 reemplaza con tu URL de Web App
                const data = await response.json();
                setMensajes(data.mensajes || []); // suponiendo que tu API devuelve { mensajes: [...] }
            } catch (error) {
                console.error("Error al obtener mensajes:", error);
                alert("No se pudieron cargar los mensajes");
            }
        }
        fetchMensajes();
    }, []);

    useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 50); 
    return () => clearTimeout(timer);
    }, [index]);


    const siguienteMensaje = () => {
    if (index < mensajes.length - 1) {
        setIndex(i => i + 1);
    } else {

        navigate("/elegir-mensaje");
    }
    };

    const mensajeActual = mensajes[index];




    return (
    <div
        style={{
        position: "relative",
        width: "375px",
        height: "812px",
        margin: "auto",
        overflow: "hidden",
        cursor: "pointer", 
        }}
        onClick={siguienteMensaje}
    >
      {/* Fondo */}
        <div
        style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${PostItImgFondo})`,
            backgroundSize: "375px",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
        }}
        />

      {/* Mensaje actual */}
        {mensajeActual && (
        <div
            style={{
            position: "absolute",
            top: "385px",
            left: "70px",
            width: "235px",
            height: "220px",
            padding: "10px",
            fontSize: "16px",
            fontFamily: "GFS Neohellenic",
            fontWeight: "400",
            lineHeight: "16.8px",
            color: "#000",
            backgroundColor: "transparent",
            border: "1px dashed rgba(0,0,0,0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            wordWrap: "break-word",
            zIndex: 10,
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "scale(1)" : "scale(0.8)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
        >
            {mensajeActual.texto}
        </div>
        )}
    </div>
    );
}
