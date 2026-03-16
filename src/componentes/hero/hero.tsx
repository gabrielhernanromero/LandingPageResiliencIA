"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5491112345678?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20ReciliencIA";

// Variantes de animación para el contenido del hero
const variantesContenedor: Variants = {
  oculto: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const variantesElemento: Variants = {
  oculto: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Efecto de partículas en canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Crear partículas
    const particulas: {
      x: number;
      y: number;
      radio: number;
      vx: number;
      vy: number;
      opacidad: number;
      color: string;
    }[] = [];

    const colores = [
      "rgba(0, 102, 255, ",   // azul primario
      "rgba(59, 130, 246, ",  // azul medio
      "rgba(0, 212, 255, ",   // cian acento
      "rgba(103, 232, 249, ", // cian suave
    ];

    for (let i = 0; i < 80; i++) {
      particulas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radio: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        opacidad: Math.random() * 0.6 + 0.1,
        color: colores[Math.floor(Math.random() * colores.length)],
      });
    }

    let animFrameId: number;

    const dibujar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar y mover partículas
      particulas.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Rebote en los bordes
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radio, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacidad})`;
        ctx.fill();
      });

      // Dibujar líneas entre partículas cercanas
      for (let i = 0; i < particulas.length; i++) {
        for (let j = i + 1; j < particulas.length; j++) {
          const dx = particulas[i].x - particulas[j].x;
          const dy = particulas[i].y - particulas[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particulas[i].x, particulas[i].y);
            ctx.lineTo(particulas[j].x, particulas[j].y);
            ctx.strokeStyle = `rgba(0, 102, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameId = requestAnimationFrame(dibujar);
    };

    dibujar();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-negro">
      {/* Canvas de partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradiente radial de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0, 85, 204, 0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(0, 212, 255, 0.1) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Contenido del hero */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div
          variants={variantesContenedor}
          initial="oculto"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge superior */}
          <motion.div variants={variantesElemento}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full borde-neon-morado bg-brand-morado-oscuro/10 text-brand-morado-neon text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-morado-neon animate-pulse" />
              Automatización con Inteligencia Artificial
            </span>
          </motion.div>

          {/* Headline principal */}
          <motion.h1
            variants={variantesElemento}
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight"
          >
            Tu atención al cliente,
            <br />
            <span className="texto-gradiente">en piloto automático</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={variantesElemento}
            className="text-lg sm:text-xl text-brand-gris-claro max-w-2xl leading-relaxed"
          >
            Automatizamos el soporte de tu empresa con IA para que{" "}
            <span className="text-brand-blanco font-medium">
              nunca pierdas un cliente
            </span>
            , a cualquier hora del día
          </motion.p>

          {/* Botón CTA */}
          <motion.div variants={variantesElemento} className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-morado-oscuro to-brand-morado text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-morado/40"
            >
              {/* Ícono WhatsApp SVG */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.11 1.522 5.836L0 24l6.337-1.497A11.924 11.924 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.81 9.81 0 01-5.003-1.371l-.359-.213-3.72.879.944-3.62-.234-.373A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Hablemos por WhatsApp
            </a>
          </motion.div>

          {/* Stats pequeños bajo el CTA */}
          <motion.div
            variants={variantesElemento}
            className="flex flex-wrap justify-center gap-8 mt-6 text-sm"
          >
            {[
              { valor: "-70%", label: "en costos de soporte" },
              { valor: "24/7", label: "disponibilidad garantizada" },
              { valor: "+90%", label: "clientes satisfechos" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-black texto-gradiente">
                  {stat.valor}
                </span>
                <span className="text-brand-gris">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Flecha scroll down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-brand-morado/40 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-brand-morado-neon" />
        </motion.div>
      </motion.div>
    </section>
  );
}
