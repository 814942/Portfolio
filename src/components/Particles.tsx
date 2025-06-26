export default function SimpleParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(500)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary opacity-20 animate-pulse"
          style={{
            width: `${4 + Math.random() * 4}px`,
            height: `${4 + Math.random() * 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  )
}