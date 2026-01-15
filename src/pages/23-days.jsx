import DaysImg from "../assets/Days.png";
import { useNavigate } from "react-router-dom";
import CheckImg from "../assets/check.png";

export default function Days() {
const navigate = useNavigate();

function obtenerUsuarioId() {
    let id = localStorage.getItem("usuarioId");
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("usuarioId", id);
    }
    return id;
}



// 🔹 Guardar mensaje en Google Sheets con validaciones
    async function guardar23Days() {
    const texto = document.getElementById("daysText").value.trim();
    if (!texto) return alert("Escribe algo 💗");

    const userId = obtenerUsuarioId();
    const hoy = new Date().toISOString().split("T")[0];

    try {
      // 🔹 Primero obtenemos los mensajes existentes desde Sheets
      const fetchGet = await fetch('https://script.google.com/macros/s/AKfycbzC4RPAQQHmGQ3vS_juQvcSU9pXC2k3a_IvLHCzEMuZnoIYunaSdxYOds-NyDjwOpbfug/exec'); // GET para leer todos los mensajes
        const data = await fetchGet.json();
        const mensajes = data.mensajes || [];

      // 🔹 Filtrar mensajes del usuario
        const misMensajes = mensajes.filter(m => m.userId === userId);
        const hoyMensajes = misMensajes.filter(m => m.fecha === hoy);

      // 🔹 Validaciones
        if (misMensajes.length >= 23) {
        return alert("Ya alcanzaste tus 23 mensajes 💖");
        }
        if (hoyMensajes.length >= 5) {
        return alert("Máximo 5 mensajes por día ✨");
        }

      // 🔹 Preparar mensaje a enviar
        const mensaje = {
        userId,
        texto,
        fecha: hoy
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
                {/* Fondo */}
        <div
        style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${DaysImg})`,
            backgroundSize: "375px",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none"
        }}
        />

        {/* Textarea */}
        <textarea
        id="daysText"
        placeholder="Escribe aquí..."
        maxLength={300}
        style={{
            position: "absolute",
            top: "425px",
            left: "109px",
            width: "150px",
            height: "131px",
            background: "transparent",
            border: "none",
            outline: "none",
            resize: "none",
            transform: "rotate(-19deg)",
            transformOrigin: "top left",
            fontFamily: "Englebert",
            fontSize: "16px",
            lineHeight: "15.36px",
            zIndex: 10
        }}
        />

        {/* Botón check */}
        <button
        onClick={guardar23Days}
        style={{
            position: "absolute",
            bottom: "32px",
            right: "28px",
            width: "58px",
            height: "58px",
            background: `url(${CheckImg})`,
            backgroundSize: "cover",
            border: "none",
            cursor: "pointer",
            zIndex: 10
                }}/>
            </div>
        </div>
    )
}