import PoolTitle from "../assets/PoolTitle.png";
import DateImg from "../assets/date.png";
import IntinerarioImg from "../assets/intinerario.png";
import TransImg from "../assets/transporte.png";
import TipsImg from "../assets/tips.png";
import Puntos from "../assets/puntos-de-reunion.png";
import BtnUni from "../assets/btn-uni.png";
import BtnCasa from "../assets/btn-casa.png";
import BtnMaps from "../assets/btn-maps.png";
import UbiTerreno from "../assets/ubi-terreno.png";
import CarImg from "../assets/car.png";
import NewsImg from "../assets/news.png";
import AskImg from "../assets/asks.png";
import EmailImg from "../assets/email.png";
import newsasks from "../assets/news-asks.png";
import PhoneImg from "../assets/phone.png";
import PartyBg from "../assets/party-bg.png";

export default function TheParty() {
    return (
        <div className="page-transition"
        style={{
            backgroundColor: "#FFDAE7",
            margin: "0",
            paddingBottom: "0",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* CAPA 2 — PNG */}
            <img
        src={PartyBg}
        alt="Decoración"
        style={{
        position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "auto",
            zIndex: "1",
            pointerEvents: "none",
        }}
        />

         {/* CAPA 3 — CONTENIDO */}
        <div
        style={{
        position: "relative",
        zIndex: "2",
        }}
        >


            <div className="feed-party">
                <img src={PoolTitle} style={{
                    blockSize: "190px",
                    margin: "15px 15px 15px"
                }}/>
                <div style={{ display: "flex"}}>
                    <img src={DateImg} style={{
                    blockSize: "90px",
                    margin: "0 30px 0",
                    position: "relative",
                    top: "-15px",
                }}/>
                <p className="paleta"
                style={{
                    position: "relative",
                    top: "-15px"
                }}
                >Pink | Golden | Dreamy <br></br>| Sunset | Pool | Night | <br></br>Neon | Warm | Cozy
                </p>
                </div>

                <p style={{
                    fontSize: "10px",
                    lineHeight: "11.2px",
                    textAlign: "center",
                    margin: "15px 0 15px",
                    position: "relative",
                    top: "-10px"
                }}>
                    Estos tips son solo sugerencias para que te sientas super cómodo durante el día <br></br>nada es obligatorio, todo es bienvenido. Lo único verdaderamente importante <br></br>para mí es tu comodidad y que estés presente conmigo este día tan especial
                </p>

                <div style={{ display: "flex"}}>
                    <a href="https://www.canva.com/design/DAG9jOAXCjI/AIf1LdievRzjiUeTSlwATA/view?utm_content=DAG9jOAXCjI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2b3ceec609" className="intinerario" style={{
                        textDecoration: "none",
                        width: "120px",
                        height: "120px",
                        backgroundImage: `url(${IntinerarioImg})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        blockSize: "111px",
                        fontSize: "8px",
                        marginLeft: "70px",
                        gap: "8px",
                        color: "rgba(0, 0, 0, 0)",
                        position: "relative",
                        top: "-10px",
                    }}>INTINERARIOOOOOOOOO</a>

                        <a href="https://www.canva.com/design/DAG9n6DpdP8/20qe_JOthas6HkYnDik2Kg/view?utm_content=DAG9n6DpdP8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha3b39216dc" className="intinerario" style={{
                        textDecoration: "none",
                        width: "120px",
                        height: "120px",
                        backgroundImage: `url(${TipsImg})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        blockSize: "111px",
                        fontSize: "8px",
                        color: "rgba(0, 0, 0, 0)",
                        position: "relative",
                        top: "-10px",
                    }}>INTINERARIOOOOOOOOO</a>
                </div>

                <p style={{
                    fontSize: "9px",
                    lineHeight: "11.2px",
                    textAlign: "center",
                    margin: "30px 0 15px",
                    position: "relative",
                        top: "-25px",
                }}>
                    También encontrarás el intinerario del plan que imaginé para<br></br>este día.
                    Si decides sumarte a alguna actividad o prefieres solo <br></br>acompañarme,
                    platicar o simplemente fluir, está increíble, <br></br> mientras elijas
                    siempre lo que te haga sentir tú.
                </p>

                <img src={TransImg} style={{
                    blockSize: "190px",
                    margin: "15px 15px 0px",
                    position: "relative",
                        top: "-40px",
                }}/>

                <img src={Puntos} style={{
                    blockSize: "160px",
                    margin: "15px 45px 0px",
                    position: "relative",
                        top: "-90px",
                }}/>

                <div style={{ display: "flex",
                    justifyContent: "center",
                    gap: "12px",
                    marginTop: "-120px",
                }}>
                    
                    <a href="https://maps.app.goo.gl/yNrgpfrwv5QcTrYTA" style={{
                        textDecoration: "none",
                        backgroundImage: `url(${BtnUni})`,
                        backgroundSize: "cover",
                        width: "139px",
                        height: "110px",
                        blockSize: "111px",
                        fontSize: "22px",
                        color: "rgba(0, 0, 0, 0)",
                    }}
                    >UNITEEEEC</a>

                    <a href="https://maps.app.goo.gl/FDy7F9KkgVTWyS7E6" style={{
                        textDecoration: "none",
                        backgroundImage: `url(${BtnCasa})`,
                        backgroundSize: "cover",
                        width: "139px",
                        height: "110px",
                        blockSize: "111px",
                        fontSize: "22px",
                        color: "rgba(0, 0, 0, 0)",
                    }}>UNITEEEEC</a>
                </div>

                <div style={{ display: "flex", 
                    justifyContent: "center",
                    gap: "4px",
                    marginTop: "10px",
                    marginLeft: "-10px",
                    }}>
                    <img src={UbiTerreno} style={{
                        blockSize: "135px",
                        margin: "0 20px 0",
                    }}/>

                    <a href="https://maps.app.goo.gl/yznLidPnsqfV5Upf7" style={{
                        backgroundImage: `url(${BtnMaps})`,
                        textDecoration: "none",
                        backgroundSize: "cover",
                        blockSize: "105px",
                        color: "rgba(0, 0, 0, 0)",
                        margin: "10px 0 0"
                    }}>MAPSSSSSSSS</a>
                </div>
                <link href="https://fonts.googleapis.com/css2?family=Gayathri:wght@100;400;700&display=swap" rel="stylesheet"></link>
                <p  className="voluntarios" style={{
                    color: "#e573a3",
                    fontFamily: "Gayathri",
                    fontWeight: "100",
                    fontStyle: "normal",
                    margin: "50px 0 15px",
                    fontSize: "45px",
                    textAlign: "center"
                }}>(VOLUNTARIOS)</p>

                <div style={{
                    position: "relative",
                    width: "100%",
                    height: "420px",
                    }}
                    >
                    <img src={CarImg} style={{
                        position: "absolute",
                        left: "20px",
                        top: "5px",
                        width: "140px",
                    }}/>

                
                    <p style={{
                        position: "absolute",
                        left: "100px",
                        top: "-10px",
                        width: "250px",
                        fontSize: "10px",
                        textAlign: "right",
                        color: "#710829",
                        fontFamily: "Gilda Display",
                        lineHeight: "11.20px",
                    }}>
                    La idea es reunirnos en cualquiera de ambos<br></br>
                    puntos de reunión (el que te quede más cercano) <br></br>
                    y de ahí irnos juntos a la fiesta para que el <br />
                    trayecto sea mucho más fácil y nadie tenga que <br />
                    preocuparse por cómo llegar o regresar. <br />
                    <br />
                    Si tienes coche y te gustaría apoyarme, todo <br />
                    suma desde ofrecer un lugarcito en tu coche <br />
                    hasta irnos en grupitos. No es obligatorio, solo <br />
                    es para coordinar con el tema de transporte.
                    </p>

                <a href="https://wa.link/zb3hr9"
                className="btn-apoyo"
                style={{ position: "absolute",
                    left: "190px",
                    top: "120px",
                }}
                >
                YO APOYO
                </a>
            </div>
            </div>
            

            <div style={{ 
                paddingBottom: "0",
                position: "relative",
                top: "-300px" 
            }}>
            <img src={newsasks} style={{
                blockSize: "170px",
                margin: "0px 35px 0"
            }}/>
            <p style={{
                color: "#710829",
                fontSize: "10px",
                fontFamily: "Gilda Display",
                lineHeight: "11.20px",
                wordWrap: "break-word",
                textAlign: "center",
                margin: "0px 0 20px"
            }}>
                Para mantenernos actualizados, decidí hacerlo de una forma más cómoda y <br />
                privada para todos. Les dejo un canal de whats donde compartiré avisos <br />
                importantes, sin necesidad de meter a todos a un grupo. La idea es sentirnos <br />
                libres, cómodos y sin notificaciones innecesarias ni mensajes que no van <br />
                contigo. Todo pensado para que sea fácil, claro y sin estrés <br />
                <br />
                Si tienes alguna duda, pregunta o necesitas decirme algo, te dejo mi <br />
                contacto directo para que puedas escribirme con toda confianza
            </p>

            <div style={{
                display: "flex",
                margin: "0 0 10px",
                position: "relative",
                top: "-30px",
                left: "-10px"
            }}>
                <div
                style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 20px",
                }}
            >
                <link href="https://fonts.googleapis.com/css2?family=GFS+Neohellenic:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
                <a href="https://whatsapp.com/channel/0029VbCJ6hcAjPXRnkY0vn3y"
                style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0)",
                    fontSize: "16px",
                    fontFamily: "GFS Neohellenic",
                    fontWeight: "400",
                    lineHeight: "16.80px",
                    wordWrap: "break-word",
                    backgroundImage: `url(${NewsImg})`,
                    backgroundSize: "cover",
                    blockSize: "125px",
                    margin: "0 10px 0",
                }}>Canal de whatsappsssssssss</a>
                <span style={{
                marginTop: "6px",
                color: "#EF6E97",
                fontSize: "12px",
                fontFamily: "GFS Neohellenic",
                fontWeight: "400",
                lineHeight: "16.8px",
                textAlign: "center",
                marginTop: "-5px"
                }}
                >
                Canal de whatsapp
                </span>
                </div>


                <div
                style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                }}
                >
                <a href="https://wa.me/+524777604411"
                style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0)",
                    fontSize: "16px",
                    fontFamily: "GFS Neohellenic",
                    fontWeight: "400",
                    lineHeight: "16.80px",
                    wordWrap: "break-word",
                    backgroundImage: `url(${AskImg})`,
                    backgroundSize: "cover",
                    blockSize: "125px",
                    margin: "0 10px 0",
                }}>Canal de whatsappsssssssss</a>
                <span
                style={{
                marginTop: "6px",
                color: "#EF6E97",
                fontSize: "12px",
                fontFamily: "GFS Neohellenic",
                fontWeight: "400",
                lineHeight: "16.8px",
                textAlign: "center",
                marginTop: "-5px"
                }}
                >
                Mensaje privado
                </span>
                </div>
            </div>




            <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet"></link>
            <p style={{
                color: "#CE285C",
                fontSize: "16px",
                fontFamily: "Ephesis",
                fontWeight: "400",
                lineHeight: "22.40px",
                wordWrap: "break-word",
                textAlign: "center",
                margin: "50px 0 0",
                position: "relative",
                        top: "-50px",
            }}>Deseo poder contar con tu presencia &lt;3</p>

            <div style={{ display: "flex",
                justifyContent: "center",
                paddingBottom: "0",
                position: "relative",
                        top: "-40px",
            }}>
                <a href="https://whatsapp.com/channel/0029VbCJ6hcAjPXRnkY0vn3y" style={{
                    backgroundImage: `url(${EmailImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    blockSize: "20px",
                    fontSize: "12px",
                    color: "rgba(0, 0, 0, 0)",
                    margin: "0 10px 20px",
                    paddingBottom: "0",
                }}>
                aaaa
            </a>


                    <a href="https://wa.me/+524777604411" style={{
                    backgroundImage: `url(${PhoneImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    blockSize: "20px",
                    fontSize: "10px",
                    color: "rgba(0, 0, 0, 0)",
                    paddingBottom: "0",
                }}>
                aaaa
            </a>
            </div>
            </div>
        </div>
        </div>
    )
}