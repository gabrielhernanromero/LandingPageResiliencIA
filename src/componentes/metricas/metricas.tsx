"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Metrica {
  valor: string;
  numerico: number;
  sufijo: string;
  prefijo: string;
  etiqueta: string;
  descripcion: string;
  color: string;
}

const metricas: Metrica[] = [
  {
    valor: "-70%",
    numerico: 70,
    sufijo: "%",
    prefijo: "-",
    etiqueta: "Reducción de costos",
    descripcion: "Las empresas que implementan IA reducen sus costos de atención al cliente en promedio un 70%.",
    color: "text-brand-morado-neon",
  },
  {
    valor: "+90%",
    numerico: 90,
    sufijo: "%",
    prefijo: "+",
    etiqueta: "Satisfacción del cliente",
    descripcion: "El 90% de los usuarios prefieren obtener respuesta inmediata por IA ante esperar a un humano.",
    color: "text-brand-azul-neon",
  },
  {
    valor: "24/7",
    numerico: 24,
    sufijo: "/7",
    prefijo: "",
    etiqueta: "Disponibilidad total",
    descripcion: "Sin días feriados, sin vacaciones, sin horarios. Tu soporte siempre activo.",
    color: "text-brand-morado-neon",
  },
  {
    valor: "<5s",
    numerico: 5,
    sufijo: "s",
    prefijo: "<",
    etiqueta: "Tiempo de respuesta",
    descripcion: "Cada consulta recibe respuesta en menos de 5 segundos, las 24 horas del día.",
    color: "text-brand-azul-neon",
  },
];

// Hook para animar un número desde 0 hasta el valor final
function useContadorAnimado(
  valorFinal: number,
  activo: boolean,
  duracion: number = 2
) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!activo) return;
    const start = 0;
    const end = valorFinal;
    const startTime = Date.now();
    const endTime = startTime + duracion * 1000;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      // Easing ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [activo, valorFinal, duracion]);

  return display;
}

function TarjetaMetrica({ metrica, delay }: { metrica: Metrica; delay: number }) {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-50px" });
  const contador = useContadorAnimado(metrica.numerico, estaEnVista, 2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={estaEnVista ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      className="group p-8 rounded-2xl fondo-card borde-neon-morado hover:shadow-2xl hover:shadow-brand-morado/20 transition-all duration-400 text-center hover:-translate-y-2"
    >
      {/* Valor animado */}
      <div className={`text-5xl lg:text-6xl font-black mb-4 ${metrica.color}`}>
        {metrica.prefijo}
        {metrica.numerico === 24 ? `${contador}/7` : `${contador}${metrica.sufijo}`}
      </div>

      {/* Etiqueta */}
      <h3 className="text-brand-blanco font-bold text-lg mb-3">{metrica.etiqueta}</h3>

      {/* Descripción */}
      <p className="text-brand-gris text-sm leading-relaxed">{metrica.descripcion}</p>
    </motion.div>
  );
}

export default function Metricas() {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metricas" className="py-20 lg:py-28 bg-brand-negro relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,85,204,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-morado-neon text-sm font-semibold uppercase tracking-widest">
            Resultados reales
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blanco leading-tight">
            Números que hablan
            <br />
            <span className="texto-gradiente">por sí solos</span>
          </h2>
          <p className="mt-6 text-brand-gris-claro text-lg max-w-2xl mx-auto">
            Estos son los resultados promedio que obtienen nuestros clientes en
            los primeros 90 días de implementación.
          </p>
        </motion.div>

        {/* Grid de métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricas.map((metrica, idx) => (
            <TarjetaMetrica key={metrica.etiqueta} metrica={metrica} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
