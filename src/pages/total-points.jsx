import Points from "../assets/points.png"
import Back from "../assets/BACK.png"
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";



export default function TotalPoints() {
    const navigate = useNavigate();
    const location = useLocation();

    const totalPoints = location.state?.totalPoints ?? 0;
    const totalQuestions = location.state?.totalQuestions ?? 10;
    const userName = location.state?.userName?.trim();


    useEffect(() => {
        if (!location.state?.userName?.trim()) return;
const saved = localStorage.getItem("allScores");
const allScores = saved ? JSON.parse(saved) : [];

const existingUser = allScores.find(s => s.name === userName);

if (existingUser) {
    existingUser.score = totalPoints;
} else {
    allScores.push({
    name: userName,
    score: totalPoints,
    });
}

localStorage.setItem("allScores", JSON.stringify(allScores));
}, [totalPoints, userName]);


    return (
        <div className="page-transition" style={{
            backgroundImage: `url(${Points})`,
            width: "375px",
            height: "812px",
            position: "relative"
        }}>
            <h1 style={{
                position: "absolute",
                top: "465px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                fontFamily: "Fredoka",
                fontWeight: "1000",
                fontSize: "60px",
                margin: "0px"
            }}>
                {totalPoints} / {totalQuestions}
            </h1>
            <button style={{
                position: "absolute",
                top: "680px",  
                left: "50%",
                transform: "translateX(-50%)",
                width: "100px",
                height: "100px",  
                backgroundImage: `url(${Back})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "rgba(0, 0, 0, 0)",
                border: "none",
                color: "rgba(0, 0, 0, 0)",
                cursor: "pointer"
            }}
            onClick={() => navigate("/quiz")}
            >
                AAAAAAAAAAAAA
            </button>
        </div>
    )
}