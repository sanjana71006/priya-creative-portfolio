
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
      type: 'circle' | 'binary' | 'tech' | 'code';
      char?: string;
      rotation?: number;
      rotationSpeed?: number;
    }> = [];

    // Enhanced symbols including code symbols
    const techChars = ['💻', '⚙️', '🚀', '🧠', '📡', '💡', '🔧', '⭐'];
    const binaryChars = ['0', '1'];
    const codeChars = ['{', '}', '<', '>', '(', ')', '[', ']', '/', '*', '+', '-', '='];

    // Create particles with enhanced distribution
    for (let i = 0; i < 80; i++) {
      const rand = Math.random();
      const type = rand < 0.5 ? 'circle' : 
                   rand < 0.7 ? 'binary' : 
                   rand < 0.85 ? 'tech' : 'code';
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: type === 'circle' ? Math.random() * 3 + 1 : 
              type === 'code' ? Math.random() * 16 + 12 :
              Math.random() * 14 + 10,
        opacity: Math.random() * 0.7 + 0.3,
        type,
        char: type === 'binary' ? binaryChars[Math.floor(Math.random() * binaryChars.length)] : 
              type === 'tech' ? techChars[Math.floor(Math.random() * techChars.length)] :
              type === 'code' ? codeChars[Math.floor(Math.random() * codeChars.length)] : undefined,
        rotation: type === 'code' ? Math.random() * Math.PI * 2 : 0,
        rotationSpeed: type === 'code' ? (Math.random() - 0.5) * 0.02 : 0
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update rotation for code symbols
        if (particle.rotation !== undefined && particle.rotationSpeed) {
          particle.rotation += particle.rotationSpeed;
        }

        // Wrap around edges with buffer
        if (particle.x < -30) particle.x = canvas.width + 30;
        if (particle.x > canvas.width + 30) particle.x = -30;
        if (particle.y < -30) particle.y = canvas.height + 30;
        if (particle.y > canvas.height + 30) particle.y = -30;

        // Save context for rotation
        ctx.save();
        
        // Apply rotation for code symbols
        if (particle.rotation !== undefined) {
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation);
          ctx.translate(-particle.x, -particle.y);
        }

        // Draw particle based on type
        if (particle.type === 'circle') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.8})`;
          ctx.fill();
          
          // Add soft glow for circles
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(255, 255, 255, ${particle.opacity * 0.5})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (particle.type === 'binary') {
          ctx.font = `${particle.size}px 'Courier New', monospace`;
          ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
          ctx.textAlign = 'center';
          ctx.fillText(particle.char!, particle.x, particle.y);
        } else if (particle.type === 'tech') {
          ctx.font = `${particle.size}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillText(particle.char!, particle.x, particle.y);
        } else if (particle.type === 'code') {
          ctx.font = `${particle.size}px 'Fira Code', 'Courier New', monospace`;
          ctx.fillStyle = `rgba(255, 182, 193, ${particle.opacity})`;
          ctx.textAlign = 'center';
          ctx.fillText(particle.char!, particle.x, particle.y);
        }

        ctx.restore();

        // Draw connections only for circle particles
        if (particle.type === 'circle') {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && otherParticle.type === 'circle') {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 150)})`;
                ctx.lineWidth = 1;
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
