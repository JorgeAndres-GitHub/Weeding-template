// Layout.jsx
export function Layout({ children }) {
  return (
    <div className="animated-background">
      {children}

      <style>{`
        .animated-background {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background-color: #fffaf5;
        }

        .animated-background::before,
        .animated-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background-image:
            radial-gradient(circle, #ffa07a 1px, transparent 1px),
            radial-gradient(circle, #98fb98 1px, transparent 1px);
          background-size: 60px 60px;
          animation: floatDots 10s linear infinite alternate;
          opacity: 0.3;
          pointer-events: none;
        }

        .animated-background::after {
          background-size: 80px 80px;
          animation-delay: 5s;
          opacity: 0.2;
        }

        @keyframes floatDots {
          0% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(-2%, -2%);
            opacity: 0.5;
          }
          100% {
            transform: translate(2%, 2%);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
