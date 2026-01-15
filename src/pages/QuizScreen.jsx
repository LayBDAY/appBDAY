import { useParams } from "react-router-dom";
import { useState } from "react";
import { quizFacil } from "../data/quizFacil";
import { quizMedio } from "../data/quizMedio";
import { quizDificil } from "../data/quizDificil";
import "../styles/quiz.css";
import FondoImg from "../assets/17.png";
import { useNavigate } from "react-router-dom";

export default function Quizzes() {
  const navigate = useNavigate();
  const { level } = useParams();

  const quizzes = {
    facil: quizFacil,
    medio: quizMedio,
    dificil: quizDificil,
  };

  const questions = quizzes[level];
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);


  if (!questions) {
  return <div>Quiz no encontrado</div>;
  }

  const current = questions[index];

  const handleAnswer = (optionIndex) => {
  const isCorrect = current.correct.includes(optionIndex);

  const newPoints = isCorrect ? points + 1 : points;

  setPoints(newPoints);

  if (index < questions.length - 1) {
    setIndex(index + 1);
  } else {
    navigate("/total-points", {
      state: {
        totalPoints: newPoints,
        totalQuestions: questions.length
      }
    });
  }
};



  return (
    <div className="quiz-container">
      <img
        src={FondoImg}
        alt="fondo"
        className="quiz-background"
      />

      <div className="quiz-question">
        {current.question}
      </div>

      {current.options.map((opt, i) => (
        <button
          key={i}
          className="quiz-option"
          style={{ top: `${298 + i * 125}px`, fontSize: "cover",
          backgroundColor: opt.startsWith("#") ? opt : "#FD81AE",
          color: opt.startsWith("#") ? "transparent" : "white",
      }}
          onClick={() => handleAnswer(i)}
        >
          {opt.startsWith("#") ? "" : opt}
        </button>
      ))}
    </div>
  );
}