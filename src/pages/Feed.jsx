import CountImgBg from "../assets/count.png";
import SaveTD from "../assets/save-the-date.png";
import Party from "../assets/party.png";
import HeartFeed from "../assets/corazon-feed.png";
import ParaLaysita from "../assets/para-lay.png";
import Quizz from "../assets/quizz.png";
import Pics from "../assets/pics.png";
import WishImg from "../assets/wishlist.png";
import ButterImg from "../assets/corazon-mariposa.png";
import MoreInfo from "../assets/learn-more.png";
import ScoreImg from "../assets/btn-scoreboard.png";
import HeartScore from "../assets/heart-score.png"
import ButterFlyImg from "../assets/butter.png";
import { useNavigate, useLocation } from "react-router-dom";
import ForU from "../assets/PARA-UDS.png";
import Tks from "../assets/THANKS.png";
import Regalos from "../assets/separacion-regalos.png";
import { useState, useEffect } from "react";
import BackImg from "../assets/BACK.png";
import FeedBgImg from "../assets/feed-background.png";


export default function Feed() {
  const targetDate = new Date("2026-01-24T00:00:00").getTime();
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || null;
  const userScore = location.state?.userScore || null;

  const [allScores, setAllScores] = useState(() => {
    // Recuperar puntajes guardados si existen
    const saved = localStorage.getItem("allScores");
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar/actualizar puntaje del usuario
  useEffect(() => {
    if (userName && userScore !== null) {
      const index = allScores.findIndex((entry) => entry.name === userName);
      let newScores = [...allScores];
      if (index >= 0) {
        newScores[index].score = userScore; // actualizar
      } else {
        newScores.push({ name: userName, score: userScore }); // agregar nuevo
      }
      setAllScores(newScores);
      localStorage.setItem("allScores", JSON.stringify(newScores));
    }
  }, [userName, userScore]);

  // Ordenar de mayor a menor
  const sortedScores = [...allScores].sort((a, b) => b.score - a.score);
  const top10 = sortedScores.slice(0, 3);
  
  
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  // Solo actualizar si los elementos existen
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");

  if (daysEl) daysEl.innerText = days.toString().padStart(2, "0");
  if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, "0");
  if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, "0");
}, 1000);


  return (
    <div
    style={{
      position: "relative",
      width: "100%",
      backgroundColor: "#FFDAE7", // color base
    }}
  >
    {/* CAPA 2 – Imagen de fondo */}
    <img
      src={FeedBgImg}
      alt="Fondo del feed"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "375px",
        height: "auto",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />

    {/* CAPA 3 – Contenido */}
    <div
      className="feed"
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >

    <section className="save-date" style={{
  position: "relative", // necesario para que los elementos internos con absolute se posicionen respecto a este
  width: "100%",
  height: "400px", // ajusta según tu diseño
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start", // inicia desde arriba
  marginTop: "0px"
}}>
  {/* Imagen SaveTD */}
  <img 
    className="savetd" 
    src={SaveTD} 
    alt="Save the Date" 
    style={{
      position: "absolute",
      top: "0px", // distancia desde el top, ajusta si quieres
      left: "50%",
      transform: "translateX(-50%)",
      width: "375px",
      height: "375px",
      zIndex: 1
    }}
  />
    
      <div className="countdown" style={{
  position: "absolute",
  top: "157px",
  left: "33px",
  width: "309px",
  height: "309px",
  backgroundImage: `url(${CountImgBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 2,
  fontFamily: "Francois One",
  color: "#fff",
  fontSize: "48px",
}}>
  {/* Days */}
  <span id="days" style={{
    position: "absolute",
    top: "103px",  // ajustar según Figma
    left: "7px",  // ajustar según Figma
    width: "60px",
    textAlign: "center",
    lineHeight: "67.2px",
    letterSpacing: "12.96px",
  }}>00</span>

  {/* Hours */}
  <span id="hours" style={{
    position: "absolute",
    top: "103px",  // mismo top que days
    left: "120px", // ajustar según Figma
    width: "60px",
    textAlign: "center",
    lineHeight: "67.2px",
    letterSpacing: "12.96px",
  }}>00</span>

  {/* Minutes */}
  <span id="minutes" style={{
    position: "absolute",
    top: "103px",  // mismo top que days
    left: "240px", // ajustar según Figma
    width: "60px",
    textAlign: "center",
    lineHeight: "67.2px",
    letterSpacing: "12.96px",
  }}>00</span>
</div>


</section>




    {/** PARTE 2 THE PARTY */}
    <section className="party"
      style={{ 
        position: "relative", 
        textAlign: "center", 
        marginTop: "-80px"
}}>

    <p className="intro" style={{
  margin: "0 auto 20px",   // margen inferior
  color: "#710829",        // tu color
  fontSize: "14px",        // tamaño de fuente
  fontFamily: "Gilda Display", // tipografía
  fontWeight: 400,
  lineHeight: "16.8px",
  wordWrap: "break-word",
  width: "80%",            // opcional, para que no sea tan ancho
  textAlign: "center",
  position: "relative",
  top: "30px"
}}>
  Aquí encontrarás todos los detalles de la fiesta, pensados para que solo disfrutes el plan, click.
</p>

  {/* Botón bajado */}
  <button style={{ 
    display: "block",
    color: "rgba(0, 0, 0, 0)",
    borderRadius: "15px",
    fontFamily: "IM Fell French Canon SC",
    backgroundImage: `url(${Party})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontSize: "120px",
    margin: "0 auto 20px",
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0)",
    cursor: "pointer",
    width: "300px",   // ajusta tamaño si quieres
    height: "140px",  // ajusta altura
    position: "relative",
    top: "20px"       // baja un poco el botón
  }} 
  className="btn-fade"
  onClick={() => navigate("/the-party")}
  >
    THE PARTY
  </button>

        <img src={HeartFeed} style={{
          position: "relative",
          blockSize: "170px",
          marginTop: "20px"
        }}/>
    </section>
      


      {/**  PARTE 3 POST ITS    */}
      <section className="post-it"
      style={{ margin: "0px",
        padding: "0",
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        marginTop: "-40px" 
        }}>
          <h2
            style={{ 
              margin: "0 0 8px",
              padding: "0",
              fontSize: "36px", 
              textShadow: "-2px 1px 4px rgba(233, 125, 159, 0.25)"
              }}>
            <span className="us">U</span>NETE A <span className="ds">D</span>EJAR
          </h2>


          <p className="post-text" style={{
            margin: "0 0 8px",
            padding: "0",
              maxWidth: "280px",
              textAlign: "center"
            }}>
            UN MENSAJITO ESPECIAL A LAY QUE RECIBIRÁ EN SU DÍA ESPECIAL!
          </p>
          <button style={{
            display: "inline-block",
            color: "rgba(0, 0, 0, 0)",
            borderRadius: "15px",
            textDecoration: "none",
            backgroundImage: `url(${ParaLaysita})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            blockSize: "100px",
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "none",
            cursor: "pointer"
          }}
          onClick={() => navigate("/para-lay")}
          >DEJAR MENSAJE</button>
          <p style={{
            fontSize: "11px",
            margin: "0 0 60px"
          }}>Serán anónimos y revelados el 23 de <br></br>enero a las 00:00 como regalo para ella</p>
      </section>

{/**  PARTE 4 DINAMICAS    */}
      <section className="dinamicas">
          <h1 style={{
            margin: "0px 0px 5px",
            fontSize: "80px",
            textShadow: "0px 0px 4px rgba(0, 0, 0, 0.09)"
            }}>Dinamicas</h1>

          <div className="dinamicas-boxes"style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>

          <a href="#" className="btn-fade"
          style={{
            display: "inline-block",
            color: "rgba(0, 0, 0, 0)",
            fontFamily: "Gilda Display",
            borderRadius: "15px",
            textDecoration: "none",
            backgroundImage: `url(${Quizz})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "170px",
            height: "170px",
            fontSize: "9.5px",
            padding: "10px", 
            textAlign: "center"
          }}
          onClick={() => navigate("/quiz")}
          >Únete a los quizz y posiciónate en el 1° del
          </a>

            <p style={{
            fontSize: "15px",
            maxWidth: "200px",
            margin: "0 0 15px",
            textAlign: "center"
          }}>
            Únete a los quizz y posiciónate en el 1° del Scoreboard
          </p>

          <a href="#" className="btn-fade"
          style={{
            display: "inline-block",
            color: "rgba(0, 0, 0, 0)",
            borderRadius: "15px",
            textDecoration: "none",
            backgroundImage: `url(${Pics})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "170px",
            height: "170px",
            fontSize: "9.5px",
            padding: "10px", 
            textAlign: "center"
          }}
          onClick={() => navigate("/pictures")}
          >Únete a los quizz y posiciónate en el 1° del
          </a>

          <p style={{
            fontSize: "15px",
            maxWidth: "220px",
            textAlign: "center"
          }}>
            Tómate las fotos que quieras en el gran día y guardalas como recuerdo
          </p>
          </div>
      </section>



      
      <section className="wishlist" style={{ 
        position: "relative", 
        top: "-90px",
        lineHeight: "0"
        }}>
          <img src={Regalos} style={{
            display: "block",
            width: "100%",
            maxWidth: "1000px",
            height: "auto", 
            margin: "0 auto",
            padding: "0",
          }}/>


          <a href="https://www.canva.com/design/DAG6NsdzjeQ/m8Fm6P_2Smqw-MLNNgXq1w/view?utm_content=DAG6NsdzjeQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h827509d76d" style={{
            display: "block",
            color: "rgba(0, 0, 0, 0)",
            borderRadius: "15px",
            textDecoration: "none",
            backgroundImage: `url(${WishImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            blockSize: "100px",
            width: "220px",
            fontSize: "13px",
            margin: "0px auto 20px",

          }}>VER WISHLIST AAAAAAAAAAAAAA</a>
      </section>


      <section className="about" style={{ 
        marginTop: "-40px" }}>
          <h2 className="yacasi"
          style={{
            fontSize: "48px",
            color: "#710829",
            marginBottom: "10px",
            fontWeight: "570"
          }}
          >Ya casi...
          </h2>
          <img className="corazon-mariposa"
          src={ButterImg}
          style={{
            display: "block",
            margin: "0 auto",
            padding: "0",
            blockSize: "250px"
            }}/>

          <p style={{
            fontSize: "12px"
          }}>
            "Todo lo que soy nace de cada versión que fuí, la <br /> que soñó, la que dudó, la que sintió demasiado y <br></br>siempre decidió seguir creyendo. Este espacio es un <br></br>abrazo a todas esas Laysitas que me han acompañado <br></br>durante 23 años de mi vida, amor y transformación"
          </p>
          <a href="#" style={{
            display: "inline-block",
            color: "rgba(0, 0, 0, 0)",
            borderRadius: "15px",
            textDecoration: "none",
            backgroundImage: `url(${MoreInfo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            blockSize: "200px",
            fontSize: "13px",
            margin: "0 0 20px",
            wordWrap: "break-word"
          }}
          onClick={() => navigate("/sobre-lay")}
          >MÁS SOBRE LAAAAAAAaaaaaaaaaaaaY</a>

          <h3 style={{
            color: "white",
            fontFamily: "Francois One",
            fontSize: "60px",
            boxShadow: "0 4px 6px rgba(255, 218, 231, 0.81)"
          }}>¿Listos?</h3>
      </section>

          {/**  SCOREBOARD */}
      <section className="scoreboard">
        <p style={{ margin: "0 0 20px",
          textAlign: "center" 
        }}
        >Descubre quiénes han logrado entrar a la tabla <br></br>de posiciones participando en algún quizz</p>



<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "0",
  }}>
        <button style={{
            display: "block",
            color: "rgba(0, 0, 0, 0)",
            width: "150%",
            maxWidth: "375px",
            blockSize: "360px",
            textDecoration: "none",
            aspectRatio: "1 / 1",  
            backgroundImage: `url(${ScoreImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            fontSize: "0",
            border: "none",
            padding: "0",   
            backgroundColor: "rgba(0, 0, 0, 0)",
            cursor: "pointer",
            margin: "0",
            lineHeight: "0",
            position: "relative",
          top: "-20px",
        }}
        onClick={() => navigate("/scoreboard")}
        >
          SCOREBOARDDDDDD
        </button>

        <img src={ForU} style={{
          blockSize: "210px",
          textAlign: "center",
          position: "relative",
          top: "-40px",
          margin: "0 auto",
          display: "block",
          transform: "translateX(-20px)"
        }}/>
        </div>

        <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    marginTop: "-50px"
  }}
>
  {/* 🥇 Primer lugar - grande y centrado */}
  <div style={{ position: "relative", width: "200px", height: "200px" }}>
    <img src={HeartScore} style={{ width: "100%", height: "100%" }} />
    <span style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-70%, -85%)",
      fontFamily:  '"Bayon", sans-serif',
      fontWeight: "bold",
      fontSize: "14px",
      color: top10[0] ? "#f57bdf" : "#ffffff",
      textAlign: "center",
      pointerEvents: "none"
    }}>
      {top10[0]?.name || "1° LUGAR"}
    </span>
  </div>

  {/* 🥈 Segundo y 🥉 Tercer lugar - más pequeños debajo */}
  <div style={{ display: "flex", gap: "16px" }}>
    {[1, 2].map((i) => (
      <div key={i} style={{ position: "relative", width: "160px", height: "160px",
      top: i === 2 ? "-45px" : "0" }}>
        <img src={HeartScore} style={{ width: "100%", height: "100%" }} />
        <span style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-60%, -85%)",
          fontFamily:  '"Bayon", sans-serif',
          fontWeight: "bold",
          fontSize: "12px",
          color: top10[i] ? "#f57bdf" : "#ffffff", 
          textAlign: "center",
          pointerEvents: "none"
        }}>
          {top10[i]?.name || (i === 1 ? "2° LUGAR" : "3° LUGAR")}
        </span>
      </div>
    ))}
  </div>
</div>


<div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  gap: "16px",          
  marginTop: "-110px"   
}}></div>
        <img src={Tks} style={{
          blockSize: "380px",
          transform: "translateX(-20px)"
        }}/>

        <a href="#" style={{
        fontFamily: "Gilda Display",
        color: "#710829",
        textDecoration: "none",
        fontSize: "14px",
        position: "relative",
        top: "-15px",
        }}
        onClick={() => navigate("/vip-pass")}
        >
        Ver mi VIP PASS</a>

        <button className="btn"
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "flex-end",
          margin: "40px 95px 0",
          position: "relative",
        top: "-20px",
        }}
        onClick={() => navigate("/confirm")}
        >CONFIRMAR ASISTENCIA</button>
      </section>

      <button style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        backgroundImage: `url(${BackImg})`,
        color: "rgba(0, 0, 0, 0)",
        border: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        blockSize: "55px",
        margin: "0 130px 0",
        cursor: "pointer",
        position: "relative",
        top: "-30px",
      }}
      onClick={() => navigate("/")}
      >
        AAAAAAAAAAA
      </button>
      </div>
  </div>
  )
}
