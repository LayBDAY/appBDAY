import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Scoreboard() {
  const location = useLocation();
  const userName = location.state?.userName || null;
  const userScore = location.state?.userScore || 0;

  const [allScores, setAllScores] = useState(() => {
    // Recuperar puntajes guardados si existen
    const saved = localStorage.getItem("allScores");
    return saved ? JSON.parse(saved) : [];
  });

  // Ordenar de mayor a menor
  const sortedScores = [...allScores].sort((a, b) => b.score - a.score);
  const top10 = sortedScores.slice(0, 10);

    const userIndex = sortedScores.findIndex(s => s.name === userName);
    const userPosition = userIndex !== -1 ? userIndex + 1 : null;

  return (
    <div className="page-transition"
    style={{
      padding: "20px",
      textAlign: "center",
      minHeight: "100vh",
backgroundColor: "#fff4f7"
}}>
      <h2 style={{
        fontSize: "28px",
        color: "#ff69b4" }}>🏆SCOREBOARD</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {top10.map((entry, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: entry.name === userName ? "hotpink" : "#f8f8f8",
              color: entry.name === userName ? "white" : "black",
              margin: "6px 0",
              padding: "12px",
              borderRadius: "12px",
              fontWeight: index < 3 ? "bold" : "normal",
              fontSize: "16px",
            }}
          >
            <span>{index + 1}. {entry.name}</span>
            <span>{entry.score}/30</span>
          </li>
        ))}
      </ul>

      {userPosition && userPosition > 10 && (
        <div style={{
          marginTop: "20px",
          padding: "12px",
          backgroundColor: "#ffe4ec",
          borderRadius: "14px",
          fontSize: "16px",
          color: "#ff69b4",
          fontWeight: "bold"
        }}>
          Tu posición: #{userPosition} — {sortedScores[userIndex].score}/30 💖
        </div>
      )}


      <p style={{ marginTop: "20px", color: "#ff69b4", fontSize: "16px" }}>
        ¡Felicitaciones a todos los que aparecen al top 10!
      </p>

      <div style={{ marginTop: "10px", fontSize: "20px" }}>
        {top10.slice(0, 3).map((entry, i) => (
          <p key={i}>
            ❤️ {entry.name}
          </p>
        ))}
      </div>
    </div>
  );
}
