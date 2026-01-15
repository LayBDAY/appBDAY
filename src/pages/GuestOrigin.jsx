import { useNavigate } from "react-router-dom";
import bgImg from "../assets/fondo-origenes.png";

export default function GuestOrigin() {
  const navigate = useNavigate();

  const handleSelect = (origin) => {
    navigate("/enter-name", { state: { guestOrigin: origin } });
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
      <h1 className="title-small">¿De dónde conoces</h1>
      <h2 className="title-big">a Lay/Samy?</h2>

      <div className="grid">
        {["UNITEC", "Cole Gto", "Familia", "Otro"].map((origin) => (
          <button
          key={origin}
          className="option"
          onClick={() => handleSelect(origin)}
          >
            {origin}
          </button>
        )
        )}
      </div>
    </div>
  );
}
