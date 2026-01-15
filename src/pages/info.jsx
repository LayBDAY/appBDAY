import InfoImg from "../assets/InfoPage.png";
import { useNavigate } from "react-router-dom";

export default function Days() {
    const navigate = useNavigate();
    return (
        <div className="page-transition">
            <div style={{
                position: "relative",
                width: "375px",
                height: "812px",
                margin: "auto",
                backgroundImage: `url(${InfoImg})`,
                overflow: "hidden",
                backgroundSize: "375px"
            }}>
                <button style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    border: "none",
                    color: "#710829",
                    fontSize: "20px",
                    blockSize: "50px",
                    margin: "5px 15px 0",
                    cursor: "pointer"
                }}
                onClick={() => navigate(-1)}
                >
                    &lt;
                </button>
            </div>
        </div>
    )
}