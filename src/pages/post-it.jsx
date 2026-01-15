import PostItImgFondo from "../assets/post-it-fondo.png"
import { useNavigate } from "react-router-dom";
import CheckImg from "../assets/check.png";

export default function PostIt() {
    const navigate = useNavigate();

    function obtenerUsuarioId() {
        let id = localStorage.getItem('usuarioId');
        if (!id) {
            id = crypto.randomUUID();
            localStorage.setItem('usuarioId', id);
        }
        
        return id;
    }



   // 🔹 Guardar mensaje en Google Sheets con validaciones
    async function guardarPostIt() {
        const texto = document.getElementById('postitText').value.trim();
        if (!texto) return alert('Escribe algo 🩷');

        const userId = obtenerUsuarioId();

        try {
            // 🔹 Primero obtenemos los mensajes existentes desde Sheets
            const fetchGet = await fetch('https://script.google.com/macros/s/AKfycbzC4RPAQQHmGQ3vS_juQvcSU9pXC2k3a_IvLHCzEMuZnoIYunaSdxYOds-NyDjwOpbfug/exec'); // GET para leer todos los mensajes
            const data = await fetchGet.json();
            const mensajes = data.mensajes || [];

            // 🔹 Validaciones
            if (mensajes.some(m => m.userId === userId)) {
                return alert('Ya dejaste tu post-it');
            }
            if (mensajes.length >= 23) {
                return alert('Ya se completaron los 23 post-it');
            }

            // 🔹 Preparar mensaje a enviar
            const mensaje = {
                userId,
                texto,
                fecha: new Date().toISOString()
            };

            // 🔹 Guardar en Sheets
            const response = await fetch('https://script.google.com/macros/s/AKfycbzC4RPAQQHmGQ3vS_juQvcSU9pXC2k3a_IvLHCzEMuZnoIYunaSdxYOds-NyDjwOpbfug/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mensaje)
            });

            const result = await response.json();
            if (result.success) {
                navigate("/gracias");
            } else {
                alert('Ocurrió un error al guardar el mensaje');
            }

        } catch (error) {
            console.error('Error al guardar:', error);
            alert('No se pudo conectar con la base de datos');
        }
    }





    return (
        <div className="page-transition">
            <div style={{
                position: "relative",
                width: "375px",
                height: "812px",
                margin: "auto",
                overflow: "hidden",
            }}>
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
            <textarea
            id="postitText"
            className="postit-text"
            placeholder="Escribe aquí..."
            maxLength={300}
            style={{
                position: "absolute",
                top: "385px",
                left: "70px",
                width: "235px",
                height: "220px",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                resize: "none",
                zIndex: 10,
                }}
                />
            
            <button style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                backgroundImage: `url(${CheckImg})`,
                backgroundSize: "cover",
                width: "60px",
                height: "60px",
                zIndex: 10,
                color: "rgba(0, 0, 0, 0)"
            }}
            onClick={guardarPostIt}
            >AAAA</button>
            </div>
        </div>
    )
}