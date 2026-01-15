import AnimLogoGif from "../assets/anim-logo.gif";
import { useNavigate } from "react-router-dom";

export default function AnimLogo() {
    const navigate = useNavigate();
    const TransitionScript = setTimeout(() => {
        navigate("/feed")
    }, 1500);
    return (
        <div>
            <div id="splash" style={{
                backgroundColor: "#FFDAE7",

            }}  >
            <img style={{
                blockSize: "100vh",
                backgroundColor: "#FFDAE7"
            }} src={AnimLogoGif} alt="Logo animado"/>
        </div>
        </div>
        
    )
}