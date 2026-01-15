import { useNavigate } from "react-router-dom";
import invitationImg from "../assets/invitation.png";
import FavIco from "../assets/favicon-Laysita.png";


export default function Invitation() {
  const navigate = useNavigate();

  return (
    <div className="page-transition"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${invitationImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Botones principales */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "10px",
        position: "relative",
                    top: "-40px"
        }}>
        <button
          onClick={() => navigate("/guest-origin")}
          style={{
            padding: "12px 24px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#ff69b4",
            color: "white",
            fontWeight: "400",
            cursor: "pointer",
            fontSize: "13px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            fontFamily: "IM FEEL FRENCH Canon SC",
            lineHeight: "18.20px",
            wordWrap: "break-word"
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
           VER LISTA DE INVITADOS
        </button>
        <button
          onClick={() => navigate("/confirm")}
          style={{
            padding: "12px 24px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#ff69b4",
            color: "white",
            fontWeight: "400",
            cursor: "pointer",
            fontSize: "13px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            fontFamily: "IM FEEL French Canon SC",
            lineHeight: "18.20px",
            wordWrap: "break-word"
            
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          CONFIRMAR ASISTENCIA
        </button>
      </div>

      {/* Botón de corazón */}
      <button
        onClick={() => navigate("/splash")}
        style={{
          marginBottom: "15px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "hotpink",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          transition: "transform 0.2s",
          position: "relative",
                    top: "-30px"
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        ❤️
      </button>

      {/* Tip */}
      <p
        style={{
          color: "#A2365E",
          textAlign: "center",
          fontSize: "14px",
          fontFamily: "Gideon Roman",
          lineHeight: "15px",
          wordWrap: "break-word",
          margin: "0",
          position: "relative",
                    top: "-20px"
        }}
      >
        Tip: Agrega esta app a tu pantalla de inicio para <br></br> usarla sin internet y con la mejor experiencia
      </p>

      <link rel="icon" href={FavIco} type="image/png"/>
    </div>
  );
}
