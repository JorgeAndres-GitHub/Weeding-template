import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function MusicActivation() {
  const audioRef = useRef(null);
  const [activeIcon, setActiveIcon] = useState("");

  const animateIcon = (id) => {
    setActiveIcon(id);
    setTimeout(() => setActiveIcon(""), 300);
  };

  const playMusic = () => {
    animateIcon("play");
    audioRef.current?.play();
    toast(
      (t) => (
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "8px" }}>
            Estas escuchando: <strong>Kany García - Para Siempre</strong>
          </p>
          <button
            role="button"
            style={{
              background: "#713200",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "2px 10px",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
            onClick={() => toast.dismiss(t.id)}
          >
            Cerrar
          </button>
        </div>
      ),
      {
        style: {
          border: "1px solid #713200",
          padding: "8px 12px",
          color: "#713200",
          fontSize: "0.9rem",
          minWidth: "180px",
          maxWidth: "220px",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
        duration: 3000, // Se cerrará automáticamente después de 3 segundos
      }
    );
  };

  const restartMusic = () => {
    animateIcon("restart");
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const stopMusic = () => {
    animateIcon("stop");
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-6 offset-3">
          <p className="text-muted text-center">
            Presiona el <i className="bi bi-balloon-heart-fill"></i> para
            escuchar nuestra canción
          </p>
          <span className="line"></span>
        </div>
      </div>

      <div className="row">
        <div className="d-flex justify-content-between align-items-center gap-4 mt-3 w-100 px-5">
          <div
            className="d-flex justify-content-center align-items-center"
            onClick={restartMusic}
            style={{ cursor: "pointer", marginLeft: "auto" }}
          >
            <i
              className={`bi bi-skip-start-fill control-icon ${
                activeIcon === "restart" ? "icon-clicked" : ""
              }`}
            ></i>
          </div>
          <div
            className="d-flex justify-content-center align-items-center icon-circle"
            onClick={playMusic}
            style={{ cursor: "pointer" }}
          >
            <i
              className={`bi bi-balloon-heart control-icon ${
                activeIcon === "play" ? "icon-clicked" : ""
              }`}
            ></i>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            onClick={stopMusic}
            style={{ cursor: "pointer", marginRight: "auto" }}
          >
            <i
              className={`bi bi-skip-end-fill control-icon ${
                activeIcon === "stop" ? "icon-clicked" : ""
              }`}
            ></i>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src="/weddingMusic.mp3"></audio>

      <Toaster position="bottom-center" reverseOrder={false} />

      <style>{`
                .line {
                    display: inline-block;
                    width: 100%;
                    height: 1px;
                    background-color: #7aa190;
                    margin: 0 0px;
                    vertical-align: middle;
                }

                .control-icon {
                    font-size: 2rem;
                    color: #7aa190;
                    transition: transform 0.3s;
                }

                .icon-circle {
                    width: 60px;
                    height: 60px;
                    background-color: #7aa19022;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .icon-clicked {
                    animation: pop 0.3s ease;
                }

                @keyframes pop {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.3); }
                    100% { transform: scale(1); }
                }
            `}</style>
    </>
  );
}
