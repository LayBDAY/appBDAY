import { useNavigate } from "react-router-dom";
import confirmImg from "../assets/dis-invitation-2.png"; // tu imagen de fondo de Figma

export default function ConfirmAttendance() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Guardar que el usuario confirmó asistencia
    const guestName = localStorage.getItem("guestName") || "Invitado";
    localStorage.setItem("confirmedAttendance", guestName);

    // Puedes redirigir a la lista de invitados o pantalla final
    navigate("/thankyou"); 
  };

  return (
    <div className="page-transition"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${confirmImg})`,
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
        <h1 className="question-main">¿Te gustaría</h1>
        <h2 className="question-sub">acompañarme ese día?</h2>
        <p className="info-text">
            Tú respuesta lo antes posible me ayudará a organizarme con temas de cantidad,
            espero podernos vernos ahí, graciaaas &lt;3
        </p>

      <button
        onClick={handleConfirm}
        style={{
          padding: "14px 28px",
          fontSize: "18px",
          backgroundColor: "#ff69b4",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Sí, asistiré 🩷
      </button>

      <button
        onClick={() => navigate(-1)} // Regresar a pantalla anterior
        style={{
          padding: "14px 28px",
          fontSize: "16px",
          backgroundColor: "white",
          color: "#ff69b4",
          border: "2px solid #ff69b4",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        No puedo asistir
      </button>
    </div>
  );
}
