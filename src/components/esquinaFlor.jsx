import React, { useEffect, useState } from 'react';
import florIzquierda from '../assets/florIzquierda.png';

export function EsquinaFLor() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Detectar cambios en el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calcular el número de flores necesarias para cubrir el ancho
  const flowerWidth = 170; // Ancho aproximado de cada flor rotada
  const numFlowers = Math.ceil(windowWidth / flowerWidth) + 1; // +1 para asegurar cobertura
  
  // Crear array de flores para la parte superior
  const topFlowers = [];
  for (let i = 0; i < numFlowers; i++) {
    topFlowers.push(
      <img
        key={`top-flower-${i}`}
        src={florIzquierda}
        alt="Flor decorativa"
        className="top-flower"
        style={{
          left: `${i * flowerWidth - 10}px`,
          transform: i % 2 === 0 ? 'rotate(90deg)' : 'rotate(90deg) scaleY(-1)'
        }}
      />
    );
  }

  return (
    <>
      {/* Esquinas originales */}
      <img
        src={florIzquierda}
        alt="Flor decorativa"
        className="img-fluid flor-esquina position-fixed"
      />
      <img
        src={florIzquierda}
        alt="Flor decorativa"
        className="img-fluid flor-esquina-derecha position-fixed"
      />
      
      {/* Nueva barra superior con flores generadas dinámicamente */}
      <div className="top-flower-container">
        {topFlowers}
      </div>
      
      <style jsx>{`
        /* Contenedor de flores superiores */
        .top-flower-container {
          position: fixed;
          top: -70px;
          left: 0;
          width: 100%;
          height: 100px;
          overflow: hidden;
          z-index: 9998;
          pointer-events: none;
        }
        
        /* Flores individuales en la parte superior */
        .top-flower {
          position: absolute;
          width: ${windowWidth < 768 ? 150 : 170}px;
          height: auto;
          top: 0;
        }
        
        /* Estilos esquinas */
        .flor-esquina {
          top: -50px;
          left: -120px;
          width: 350px;
          height: auto;
          z-index: 9999;
          margin: 0;
          padding: 0;
          pointer-events: none;
          transform: rotate(30deg);
        }

        @media (max-width: 768px) {
          .flor-esquina {
            width: 300px;
            top: -50px;
            left: -100px;
          }
        }

        @media (max-width: 480px) {
          .flor-esquina {
            width: 250px;
            top: -35px;
            left: -90px;
          }
        }

        .flor-esquina-derecha {
          top: -50px;
          right: -120px;
          width: 350px;
          height: auto;
          z-index: 9999;
          margin: 0;
          padding: 0;
          pointer-events: none;
          transform: rotate(-30deg) scaleX(-1);
        }

        @media (max-width: 768px) {
          .flor-esquina-derecha {
            width: 300px;
            top: -50px;
            right: -100px;
          }
        }

        @media (max-width: 480px) {
          .flor-esquina-derecha {
            width: 250px;
            top: -35px;
            right: -90px;
          }
        }
      `}</style>
    </>
  );
}