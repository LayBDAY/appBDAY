import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartitaImg from "../assets/fondo-cartita.png";

export default function RevealCartitas() {
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
                setMensajes(data.mensajes || []);
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
            backgroundImage: `url(${CartitaImg})`,
            backgroundSize: "375px",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
        }}
        />

      {/* Mensaje actual con animación y scroll */}
        {mensajeActual && (
        <div
            style={{
            position: "absolute",
            top: "459px",       
            left: "145px",
            width: "105px",
            height: "200px",
            padding: "5px",
            fontFamily: "Englebert",
            fontSize: "8px",
            lineHeight: "7.68px",
            color: "#000",
            textAlign: "center",
            transform: "rotate(-11deg)",
            transformOrigin: "top left",
            backgroundColor: "transparent",
            border: "1px dashed rgba(0,0,0,0)",
            zIndex: 10,
            overflowY: "auto",      
            opacity: fadeIn ? 1 : 0,
            scale: fadeIn ? 1 : 0.8,
            transition: "opacity 0.5s ease, transform 0.5s ease",
            wordWrap: "break-word",
            display: "flex",
            justifyContent: "center",
            }}
        >
            {mensajeActual.texto}
        </div>
        )}
    </div>
    );
}
