import { useState, useEffect } from "react";
import CountImgBg from "../assets/count-bg.png";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00"
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-23T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
}, 1000);

    return () => clearInterval(interval); // limpiar interval al desmontar
  }, []);

  return (
    <div
      className="countdown"
      style={{
        position: "absolute",
        top: "157px",
        left: "33px",
        width: "309px",
        height: "309px",
        backgroundImage: `url(${CountImgBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "50px",
        color: "#fff",
        zIndex: 2,
        fontFamily: "Francois One"
      }}
    >
      <span>{timeLeft.days}</span>
      <span>{timeLeft.hours}</span>
      <span>{timeLeft.minutes}</span>
    </div>
  );
}
