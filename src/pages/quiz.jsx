import QuizImg from "../assets/fondo-quiz.png"
import LvlImg from "../assets/lvl.png";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
    const navigate = useNavigate()

    return (
        <div className="page-transition">
            <div className="container" style={{
            margin: "0",
            width: "375px",
            height: "812px",
            backgroundImage: `url(${QuizImg})`,
            overflow: "hidden",
            position: "relative"
            }}>
                <img src={LvlImg} className="title-img" style={{
                    position: "absolute",
                    width: "305px",
                    left: "37px",
                    top: "163px"
                }}/>

                <div className="quiz-btn facil" onClick={() => navigate("/quiz-start/facil")}>facil</div>
                <div className="quiz-btn medio" onClick={() => navigate("/quiz-start/medio")}>medio</div>
                <div className="quiz-btn dificil" onClick={() => navigate("/quiz-start/dificil")}>dificil</div>
                
            </div>
        </div>
    )
}