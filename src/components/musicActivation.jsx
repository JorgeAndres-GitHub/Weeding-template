import { useRef, useState } from "react";

export function MusicActivation() {
    const audioRef = useRef(null);

    const [activeIcon, setActiveIcon] = useState('');

    const animateIcon = (id) => {
        setActiveIcon(id);
        setTimeout(() => setActiveIcon(''), 300); // duración de la animación
    };

    const playMusic = () => {
        animateIcon('play');
        audioRef.current?.play();
    };

    const restartMusic = () => {
        animateIcon('restart');
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const stopMusic = () => {
        animateIcon('stop');
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <>
            <div className="row mt-5">
                <div className="col-6 offset-3">
                    <p className="text-muted">
                        Presiona el <i className="bi bi-balloon-heart-fill"></i> para escuchar nuestra canción
                    </p>
                    <span className="line"></span>
                </div>
            </div>

            <div className="row">
                <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
                    <div className="col-1" onClick={restartMusic} style={{ cursor: 'pointer' }}>
                        <i className={`bi bi-skip-start-fill control-icon ${activeIcon === 'restart' ? 'icon-clicked' : ''}`}></i>
                    </div>
                    <div className="col-1 icon-circle m-4" onClick={playMusic} style={{ cursor: 'pointer' }}>
                        <i className={`bi bi-balloon-heart control-icon ${activeIcon === 'play' ? 'icon-clicked' : ''}`}></i>
                    </div>
                    <div className="col-1" onClick={stopMusic} style={{ cursor: 'pointer' }}>
                        <i className={`bi bi-skip-end-fill control-icon ${activeIcon === 'stop' ? 'icon-clicked' : ''}`}></i>
                    </div>
                </div>
            </div>

            <audio ref={audioRef} src="/weddingMusic.mp3"></audio>

            <style>{`
                .line {
                    display: inline-block;
                    width: 100%;
                    height: 1px;
                    background-color: #7aa190;
                    margin: 0 10px;
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
