import PostItImg from "../assets/posit-23.png";
import DiaryImg from "../assets/diary.png";
import CardsImg from "../assets/cards.png";
import BearImg from "../assets/bear.png";
import InfoImg from "../assets/info.png";
import { useNavigate } from "react-router-dom";

export default function ParaLay() {
    const navigate = useNavigate();
    return (
        <div className="page-transition">
            <div style={{
                position: "relative",
                width: "375px",
                height: "812px",
                margin: "auto",
                backgroundColor: "#FFDAE7",
                overflow: "hidden"
            }}>
                <button style={{
                    backgroundImage: `url(${InfoImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    blockSize: "30px",
                    border: "none",
                    color: "rgba(0, 0, 0, 0)",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    fontSize: "42px",
                    margin: "15px 330px 0",
                    cursor: "pointer"
                }}
                onClick={() => navigate("/info")}
                >A</button>

                <div style={{ display: "flex", margin: "0 0 25px"}}>
                    <button style={{
                        backgroundImage: `url(${PostItImg})`,
                        blockSize: "200px",
                        backgroundSize: "cover",
                        fontSize: "22px",
                        backgroundPosition: "center",
                        color: "rgba(0, 0, 0, 0)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        border: "none",
                        margin: "40px 0 0",
                        cursor: "pointer"
                    }}
                    onClick={() => navigate("/post-it")}
                    >
                        POST IT 23!!!!!!!!!!!!
                    </button>
                        <button style={{
                        backgroundImage: `url(${DiaryImg})`,
                        blockSize: "200px",
                        backgroundSize: "cover",
                        fontSize: "22px",
                        backgroundPosition: "center",
                        color: "rgba(0, 0, 0, 0)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        border: "none",
                        margin: "40px 0 0",
                        cursor: "pointer"
                    }}
                    onClick={() => navigate("/days")}
                    >
                        POST IT 23!!!!!!!!!!!!
                    </button>
                </div>

                <button style={{
                    backgroundImage: `url(${CardsImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    border: "none",
                    color: "rgba(0, 0, 0, 0)",
                    blockSize: "300px",
                    fontSize: "70px",
                    margin: "0px 15px 0",
                    cursor: "pointer"
                }}
                onClick={() => navigate("/cartitas")}
                >
                    CARTITAS
                </button>

                <button style={{
                    backgroundImage: `url(${BearImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "none",
                    color: "rgba(0, 0, 0, 0)",
                    fontSize: "70px",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    blockSize: "200px",
                    cursor: "pointer"
                }}
                onClick={() => navigate("/reveal")}
                //onClick={() => alert("Disponible el 23 de enero...")}
                >PARA LAY</button>
            </div>
        </div>
    )
}