import CosasImg from "../assets/cosas.png";
import TimeLine from "../assets/TimeLine.png";

export default function SobreLay() {
    return (
        <div className="page-transition" style={{
        margin: "0",
        padding: "0",
        width: "375px",
        height: "812px",
        overflow: "hidden",
        position: "relative",
        background: "radial-gradient( ellipse 50% 50% at 50% 50%, #FBAFCA 0%, #FFDAE7 100%)"
    }}>
        <button style={{
            backgroundImage: `url(${CosasImg})`,
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "rgba(0, 0, 0, 0)",
            blockSize: "370px",
            margin: "50px 0 0",
            cursor: "pointer"
        }}
        onClick={() => window.location.href="https://www.canva.com/design/DAG9gsRogeQ/8YqVEUYvUb9SApjDGveoUg/view?utm_content=DAG9gsRogeQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h12028af6e9"}
        >
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </button>

        <button style={{
            backgroundImage: `url(${TimeLine})`,
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "rgba(0, 0, 0, 0)",
            blockSize: "370px",
            cursor: "pointer"
        }}
        onClick={() => window.location.href="https://heyzine.com/flip-book/58c0c7f78f.html"}
        >
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </button>
    </div>
    )
}