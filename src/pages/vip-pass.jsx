import VipImg from "../assets/vip-pass.png";

export default function VipPass() {
    return (
        <div className="page-transition" style={{
                position: "relative",
                width: "375px",
                height: "812px",
                margin: "auto",
                backgroundImage: `url(${VipImg})`,
                overflow: "hidden",
                backgroundSize: "375px"
        }}>
            <a href="/vip-pass.png" download style={{
                margin: "645px 90px 0",
                color: "rgba(0, 0, 0, 0)",
                display: "flex",
                textAlign: "center",
                textDecoration: "none",
                position: "relative",
                fontSize: "30px"
            }}>DESCARGAR</a>
        </div>
    )
}