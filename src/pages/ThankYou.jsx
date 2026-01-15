import thankYouImg from "../assets/dis-invitation-3.png"; // Fondo de Figma
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();
  const guestName = localStorage.getItem("guestName") || "Invitado";

  return (
    <div
    className="page-transition"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${thankYouImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 className="thanks-big">GRACIAS</h1>
      <h2 className="thanks-small">{guestName}</h2>

      <p className="message">
        Valoro mucho tu respuesta, no olvides <strong>ENTRAR</strong> aquí conocer
        los detalles y mantener contacto de alguna actualización
      </p>
      <p className="message">
        Si en algún momento cambia algo, puedes modificar tu respuesta cuando quieras
      </p>

      <button
        onClick={() => navigate("/")} // Regresar al menú principal o invitación
        style={{
          padding: "14px 28px",
          fontSize: "18px",
          backgroundColor: "#ff69b4",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontFamily: "IM FEEL French Canon SC",
          lineHeight: "18.20px",
          wordWrap: "break-word"
        }}
      >
        Volver al inicio
      </button>
    </div>
  );
}
