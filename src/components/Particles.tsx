export default function SimpleParticles() {
  // Genera partículas con posiciones y animaciones aleatorias
  const particles = Array.from({ length: 180 }).map((_, i) => {
    const size = 4 + Math.random() * 6;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 3 + Math.random() * 5;
    const deltaX = (Math.random() - 0.5) * 40; // movimiento horizontal aleatorio
    const deltaY = (Math.random() - 0.5) * 40; // movimiento vertical aleatorio

    // Animación única por partícula
    const keyframes = `
      @keyframes move-particle-${i} {
        0% { transform: translate(0,0) scale(1);}
        50% { transform: translate(${deltaX}px,${deltaY}px) scale(1.2);}
        100% { transform: translate(0,0) scale(1);}
      }
    `;

    return (
      <span
        key={i}
        className="absolute rounded-full bg-primary opacity-20 pointer-events-none"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          boxShadow: `0 0 12px 2px rgba(0,0,0,0.18), 0 0 24px 4px var(--tw-shadow-color,rgb(101, 102, 103))`,
          animation: `move-particle-${i} ${duration}s ease-in-out infinite`,
        }}
      >
        <style>{keyframes}</style>
      </span>
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles}
    </div>
  );
}