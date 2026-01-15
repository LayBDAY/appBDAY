import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/dis-invitation-1.png"

const allGuests = {
  UNITEC: ["Haley", "Luigi", "Ari", "Héctor", "Kass", "Nat O", "Jorge", "Zúñiga", "Natilla", "Danista", "Kevin", "Mafe", "Sebas", "Ariel", "Roy", "Vane", "Scar", "MJ", "Ernesto", "Ángel", "Cachu", "Naoko", "Aarón"],
  "Colegio Gto": ["Dany", "Max", "Leonel", "Mich", "Naty", "Gaby", "Goreti", "Viri", "Scarlet", "Pau", "Mili", "Leiden"],
  Familia: ["Allison", "Nancy", "Güero", "Arturo", "Joelito", "Abuis", "Abuelo", "Winter"],
  Otro: ["Carlitos", "Isra", "Karly", "Cami", "Frida", "Laura", "Tabi", "Nat", "Tania", "Caleb"],
};

export default function GuestList() {
  const navigate = useNavigate();
  const location = useLocation();
const guestName = location.state?.guestName || localStorage.getItem("guestName") || "Invitado";
  const guestOrigin = location.state?.guestOrigin || "Otro";

  const filteredGuests = allGuests[guestOrigin] || [];

  return (
    <div className="page-transition"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${bgImg})`,
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{
        color: "white",
        fontSize: "40px",
        fontFamily: "Gloock",
        fontWeight: "400",
        lineHeight: "38.40px",
        wordWrap: "break-word",
        margin: "90px 0 0"
      }}>LISTA DE</h1>
      <h2 style={{
        color: "white",
        fontSize: "32px",
        fontFamily: "Gloock",
        fontWeight: "400",
        lineHeight: "30.72px",
        wordWrap: "break-word",
        margin: "0px 0 0"
      }}>INVITADOS</h2>
      <p style={{
        color: "white",
        fontSize: "12px",
        fontFamily: "Gideon Roman",
        fontWeight: "400",
        lineHeight: "11.52px",
        wordWrap: "break-word",
        margin: "0px 0 30px"
      }}>Descubre quíen de tus amigos está invitado o ha confirmado para que disfruten juntos</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredGuests.map((guest, index) => (
          <li
            key={index}
            style={{
              backgroundColor: guest === guestName ? "hotpink" : "#FFFFFF9E",
              color: guest === guestName ? "white" : "black",
              margin: "8px 0",
              padding: "12px",
              borderRadius: "12px",
              fontSize: "16px",
              margin: "0 0 10px"
            }}
          >
            {guest}
          </li>
        ))}
      </ul>

        <div className="actions">
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
      <button className="enter"
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
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        ❤️
      </button>

        </div>
    </div>
  );
}
