import RevealBg from "../assets/reveal.png";
import BtnPostIt from "../assets/btn-postit.png";
import Btn23Days from "../assets/btn-23days.png";
import BtnCartitas from "../assets/btn-cartitas.png";
import { useNavigate } from "react-router-dom";
import "../styles/animacion.css";

export default function ElegirMensaje() {
    const navigate = useNavigate();

    return (
    <div
        style={{
        width: "375px",
        height: "812px",
        position: "relative",
        background: "#FFDAE7",
        overflow: "hidden",
        }}
    >
      {/* Fondo */}
        <img
        src={RevealBg}
        alt="Fondo Reveal"
        style={{
            width: "375px",
            height: "812px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            objectFit: "cover",
        }}
        />

      {/* Botones */}
        <a
        href="#"
        onClick={() => navigate("/reveal-post-it")}
        className="pulsing"
        style={{
            position: "absolute",
            width: "134px",
            height: "134px",
            left: "44px",
            top: "547px",
        }}
        >
        <img
            src={BtnPostIt}
            alt="Post-it"
            style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            }}
        />
        </a>

        <a
        href="#"
        onClick={() => navigate("/reveal-23day")}
        className="pulsing"
        style={{
            position: "absolute",
            width: "110.13px",
            height: "110.13px",
            left: "219.28px",
            top: "436.87px",
            transform: "rotate(25deg)",
            transformOrigin: "top left",
        }}
        >
        <img
            src={Btn23Days}
            alt="23 Days"
            style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            }}
        />
        </a>

        <a
        href="#"
        onClick={() => navigate("/reveal-cartitas")}
        className="pulsing"
        style={{
            position: "absolute",
            width: "121px",
            height: "121px",
            left: "212px",
            top: "666px",
        }}
        >
        <img
            src={BtnCartitas}
            alt="Cartitas"
            style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            }}
        />
        </a>
    </div>
    );
}

