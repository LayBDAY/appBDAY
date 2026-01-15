import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import bgImg from "../assets/dis-invitation.png";
import FavIco from "../assets/favicon-Laysita.png"

export default function EnterName() {
  const location = useLocation();
  const navigate = useNavigate();
  const guestOrigin = location.state?.guestOrigin || "Otro";

  const [guestName, setGuestName] = useState("");

  const handleContinue = () => {
    if (guestName.trim() === "") {
      alert("Escribe tu nombre o apodo");
      return;
    }
    localStorage.setItem("guestName", guestName)
    navigate("/guest-list", {
      state: { guestOrigin, guestName },
    });
  };

  return (
    <div className="page-transition"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${bgImg})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "#fff", marginBottom: "20px" }}>holiiiii :)</h2>
      <h3 style={{
         marginBottom: "20px",
         color: "#CA5D75",
         fontSize: "32px",
         fontFamily: "Glock",
         fontWeight: "400",
         lineHeight: "30.72px",
         wordWrap: "break-word"
         }}>Ingresa tu nombre</h3>
      <input
        type="text"
        placeholder="Escribe aquí tu nombre o apodo"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "12px",
          border: "1px solid #ff69b4",
          width: "250px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      />
      <button
        onClick={handleContinue}
        style={{
          padding: "12px 24px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: "#ff69b4",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Continuar
      </button>
      <link rel="icon" href={FavIco} type="image/png"/>
    </div>
  );
}
