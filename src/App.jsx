import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSwipeBack } from "./hooks/useSwipeBack";

import Invitation from "./pages/Invitation";
import GuestOrigin from "./pages/GuestOrigin";
import EnterName from "./pages/EnterName";
import GuestList from "./pages/GuestList";
import Scoreboard from "./pages/Scoreboard";
import ConfirmAttendance from "./pages/ConfirmAttendance";
import ThankYou from "./pages/ThankYou";
import Feed from "./pages/Feed";
import TheParty from "./pages/the-party";
import Splash from "./pages/splash";
import ParaLay from "./pages/para-lay";
import PostIt from "./pages/post-it";
import Info from "./pages/info";
import Days from "./pages/23-days";
import Cartitas from "./pages/cartitas";
import Reveal from "./pages/reveal";
import Gracias from "./pages/gracias";
import SobreLay from "./pages/sobre-lay";
import VipPass from "./pages/vip-pass";
import Pictures from "./pages/pictures";
import Quiz from "./pages/quiz";
import Quizzes from "./pages/QuizScreen";
import QuizCountdown from "./pages/countdown";
import TotalPoints from "./pages/total-points";
import ElegirMensaje from "./pages/ElegirMensaje";
import RevealPostIt from "./pages/RevealPostIt";
import Reveal23Day from "./pages/Reveal23Day";
import RevealCartitas from "./pages/RevealCartitas"

// Wrapper para ejecutar el hook dentro del Router
function SwipeWrapper({ children }) {
  useSwipeBack(); 
  return children;
}

export default function App() {
  return (
    <div
      style={{
        width: "375px",        // ancho fijo base de tu diseño
        height: "812px",       // alto base de tu diseño
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflowY: "auto",
        overflowY: "auto",     // permite scroll vertical si el contenido es más alto
        overflowX: "hidden",   // evita scroll horizontal
        background: "#FFDAE7", // fondo base (igual que tu app)
        minHeight: "100vh",    // asegura que cubra toda la pantalla
      }}
    >
    <BrowserRouter>
    <SwipeWrapper>
      <Routes>
        <Route path="/" element={<Invitation />} />
        <Route path="/guest-origin" element={<GuestOrigin />} />
        <Route path="/enter-name" element={<EnterName />} />
        <Route path="/guest-list" element={<GuestList />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/confirm" element={<ConfirmAttendance />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/the-party" element={<TheParty />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/para-lay" element={<ParaLay />} />
        <Route path="/post-it" element={<PostIt />} />
        <Route path="/info" element={<Info />} />
        <Route path="/days" element={<Days />} />
        <Route path="/cartitas" element={<Cartitas />} />
        <Route path="/reveal" element={<Reveal />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/sobre-lay" element={<SobreLay />} />
        <Route path="/vip-pass" element={<VipPass />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-start/:level" element={<QuizCountdown />} />
        <Route path="/quiz/:level" element={<Quizzes />} />
        <Route path="/total-points" element={<TotalPoints />} />
        <Route path="/elegir-mensaje" element={<ElegirMensaje />} />
        <Route path="/reveal-post-it" element={<RevealPostIt />} />
        <Route path="/reveal-23day" element={<Reveal23Day />} />
        <Route path="/reveal-cartitas" element={<RevealCartitas />} />
      </Routes>
      </SwipeWrapper>
    </BrowserRouter>
    </div>
  );
}

