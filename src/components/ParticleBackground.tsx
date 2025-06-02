
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      type: 'circle' | 'binary' | 'tech';
      char?: string;
    }> = [];

    // Tech symbols and binary characters
    const techChars = ['💻', '⚙️', '🚀', '🧠', '📡', '💡'];
    const binaryChars = ['0', '1'];

    // Create particles
    for (let i = 0; i < 60; i++) {
      const type = Math.random() < 0.7 ? 'circle' : Math.random() < 0.8 ? 'binary' : 'tech';
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: type === 'circle' ? Math.random() * 3 + 1 : Math.random() * 12 + 8,
        opacity: Math.random() * 0.6 + 0.2,
        type,
        char: type === 'binary' ? binaryChars[Math.floor(Math.random() * binaryChars.length)] : 
              type === 'tech' ? techChars[Math.floor(Math.random() * techChars.length)] : undefined
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;

        // Draw particle based on type
        if (particle.type === 'circle') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
          ctx.fill();
        } else if (particle.type === 'binary') {
          ctx.font = `${particle.size}px monospace`;
          ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
          ctx.fillText(particle.char!, particle.x, particle.y);
        } else if (particle.type === 'tech') {
          ctx.font = `${particle.size}px sans-serif`;
          ctx.fillText(particle.char!, particle.x, particle.y);
        }

        // Draw connections only for circle particles
        if (particle.type === 'circle') {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && otherParticle.type === 'circle') {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
