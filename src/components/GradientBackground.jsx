import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Animated floating hearts background with a soft romantic gradient
export default function GradientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const DPR = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.offsetWidth * DPR;
      canvas.height = canvas.offsetHeight * DPR;
    };
    resize();
    window.addEventListener('resize', resize);

    // Heart particles
    const count = 24;
    const hearts = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 6 + Math.random() * 10,
      alpha: 0.35 + Math.random() * 0.4,
      speed: 0.3 + Math.random() * 0.7,
      drift: -0.3 + Math.random() * 0.6,
    }));

    const drawHeart = (x, y, size, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size, size);
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      // Simple heart path
      ctx.moveTo(0, -0.5);
      ctx.bezierCurveTo(0.5, -1.1, 1.6, -0.2, 0, 0.9);
      ctx.bezierCurveTo(-1.6, -0.2, -0.5, -1.1, 0, -0.5);
      ctx.fillStyle = '#ff6b9e';
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((h) => {
        h.y -= h.speed;
        h.x += h.drift;
        if (h.y < -20 * DPR) {
          h.y = canvas.height + 20 * DPR;
          h.x = Math.random() * canvas.width;
        }
        drawHeart(h.x, h.y, h.size / 24, h.alpha);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Romantic gradient backdrop */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-br from-[#ff9a9e] via-[#fad0c4] to-[#fbc2eb]"
      />
      {/* Soft radial lights */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-32 opacity-70"
        style={{
          background:
            'radial-gradient(600px circle at 70% 20%, rgba(255,255,255,.55), transparent 60%), radial-gradient(500px circle at 20% 80%, rgba(255,192,203,.45), transparent 60%)',
        }}
      />
      {/* Floating hearts canvas */}
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 w-full h-full" />
    </div>
  );
}
