import { useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  id: number;
}

export default function CursorEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 2,
        life: 1,
        id: nextId,
      };
      setNextId((prev) => prev + 1);
      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    const animate = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, life: p.life - 0.02 }))
          .filter((p) => p.life > 0)
      );
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [nextId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full mix-blend-screen"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(200, 165, 90, ${particle.life}), rgba(217, 119, 66, ${particle.life * 0.5}))`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.1s',
            opacity: particle.life,
          }}
        />
      ))}
    </div>
  );
}
