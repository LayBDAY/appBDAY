import CartitaImg from "../assets/fondo-cartita.png";
import { useNavigate } from "react-router-dom";
import CheckImg from "../assets/check.png";

export default function Cartitas() {
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
    async function guardarCartita() {
    const texto = document.getElementById("cartitaText").value.trim();
    if (!texto) return alert("Escribe algo 💗");

    const userId = obtenerUsuarioId();

    try {
      // 🔹 Obtener todos los mensajes existentes desde Sheets
      const fetchGet = await fetch('https://script.google.com/macros/s/AKfycbzC4RPAQQHmGQ3vS_juQvcSU9pXC2k3a_IvLHCzEMuZnoIYunaSdxYOds-NyDjwOpbfug/exec'); // GET para leer todos los mensajes
        const data = await fetchGet.json();
        const mensajes = data.mensajes || [];

      // 🔹 Filtrar mensajes del usuario
        const misMensajes = mensajes.filter(m => m.userId === userId);

      // 🔹 Validación: máximo 23 mensajes en total (opcional)
        if (misMensajes.length >= 23) {
        return alert("Ya dejaste suficientes mensajes 💖");
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
                {/* Fondo */}
        <div
        style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${CartitaImg})`,
            backgroundSize: "375px",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none"
        }}
        />

        {/* Textarea */}
        <textarea
        id="cartitaText"
        placeholder="Escribe aquí..."
        maxLength={400}
        style={{
            position: "absolute",
            top: "459px",
            left: "145px",
            width: "105px",
            height: "200px",
            background: "transparent",
            border: "none",
            outline: "none",
            resize: "none",
            overflowY: "auto",
            transform: "rotate(-11deg)",
            transformOrigin: "top left",
            fontFamily: "Englebert",
            fontSize: "8px",
            lineHeight: "7.68px",
            zIndex: 10
        }}
        />

        {/* Botón check */}
        <button
        onClick={guardarCartita}
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