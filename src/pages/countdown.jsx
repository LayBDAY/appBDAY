import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/countdown.css";
import CountDownGif from "../assets/count-down.gif";

export default function QuizCountdown() {
  const { level } = useParams(); // facil | medio | dificil
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // iniciar disolver
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1800);

    // navegar después del fade
    const navTimer = setTimeout(() => {
      navigate(`/quiz/${level}`);
    }, 2800); // 1800 + 1000

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [level, navigate]);

  return (
    <div className={`countdown-screen ${fade ? "fade-out" : ""}`}>
      <img
        src={CountDownGif}
        alt="Countdown"
        className="countdown-gif"
      />
    </div>
  );
}