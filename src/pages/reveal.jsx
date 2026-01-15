import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbrirCartitas from "../assets/abrir-cartitas.gif";

export default function Reveal() {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => {
    setFadeOut(true);

    setTimeout(() => {
        const fechaLimite = new Date("2026-01-23T00:00:00"); // 23 de enero 2026 00:00:00
        const ahora = new Date();

        if (ahora >= fechaLimite) {
        navigate("/elegir-mensaje"); 
        } else {
        alert("Disponibles el 23/01/26 a las 00:00:00 💌NO OLVIDES FELICITAR A LAY🩷");
        navigate("/para-lay");
        }
    }, 1000);

    }, 4000);

    return () => clearTimeout(timer);
    }, [navigate]);

    return (
    <div
        style={{
        width: "375px",
        height: "812px",
        background: "#FFDAE7",
        overflow: "hidden",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 1s ease-out",
        }}
    >
        <img
        src={AbrirCartitas}
        alt="Abrir cartitas"
        style={{
            width: "375px",
            height: "812px",
            objectFit: "cover",
        }}
        />
    </div>
    );
}
