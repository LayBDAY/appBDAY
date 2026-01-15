import GraciasImg from "../assets/muchas-gracias.png";
import BackImg from "../assets/BACK.png";
import { useNavigate } from "react-router-dom";

export default function Cartitas() {
    const navigate = useNavigate();
    return (
        <div className="page-transition">
            <div style={{
                position: "relative",
                width: "375px",
                height: "812px",
                margin: "auto",
                backgroundImage: `url(${GraciasImg})`,
                overflow: "hidden",
                backgroundSize: "375px"
            }}>
                <button style={{
                    backgroundImage: `url(${BackImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    border: "none",
                    color: "rgba(0, 0, 0, 0)",
                    blockSize: "70px",
                    margin: "700px 120px 0",
                    cursor: "pointer"
                    
                }}
                onClick={() => navigate("/para-lay")}
                >
                    AAAAAAAAAAAAA
                </button>
            </div>
        </div>
    )
}