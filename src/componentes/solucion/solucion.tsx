"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const beneficios = [
  {
    icono: "⚡",
    titulo: "Respuesta instantánea",
    descripcion: "La IA responde en segundos, sin importar la hora o el volumen de consultas.",
  },
  {
    icono: "🧠",
    titulo: "Aprende de tu negocio",
    descripcion: "Entrenamos al sistema con tu información, productos y procesos específicos.",
  },
  {
    icono: "🔗",
    titulo: "Se integra con todo",
    descripcion: "WhatsApp, Instagram, tu web, CRM y sistemas existentes — todo conectado.",
  },
  {
    icono: "📊",
    titulo: "Métricas en tiempo real",
    descripcion: "Panel de control con datos de satisfacción, volumen y conversiones.",
  },
  {
    icono: "🛡️",
    titulo: "Sin errores humanos",
    descripcion: "Respuestas consistentes y precisas siempre, con escalado automático a humanos cuando es necesario.",
  },
  {
    icono: "💰",
    titulo: "ROI desde el día 1",
    descripcion: "Reducción inmediata de costos operativos con aumento de conversiones.",
  },
];

const variantesContenedor = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const variantesItem = {
  oculto: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Solucion() {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucion" className="py-20 lg:py-28 bg-brand-negro-suave relative overflow-hidden">
      {/* Glow de fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,85,204,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda: texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={estaEnVista ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-morado-neon text-sm font-semibold uppercase tracking-widest">
              La solución
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blanco leading-tight">
              ReciliencIA pone tu
              <br />
              soporte en{" "}
              <span className="texto-gradiente">modo automático</span>
            </h2>
            <p className="mt-6 text-brand-gris-claro text-lg leading-relaxed">
              Implementamos un sistema de IA entrenado específicamente para tu
              empresa que atiende, responde y convierte clientes — sin que
              necesites levantar un dedo.
            </p>

            {/* Comparación antes/después */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-red-500/20 bg-red-950/10">
                <p className="text-red-400 font-bold text-sm mb-2">❌ Sin IA</p>
                <ul className="text-brand-gris text-sm space-y-1">
                  <li>Respuesta en horas</li>
                  <li>Solo horario laboral</li>
                  <li>Costo alto por agente</li>
                  <li>Errores frecuentes</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl borde-neon-morado bg-brand-morado-oscuro/10">
                <p className="text-brand-morado-neon font-bold text-sm mb-2">
                  ✅ Con ReciliencIA
                </p>
                <ul className="text-brand-gris-claro text-sm space-y-1">
                  <li>Respuesta en segundos</li>
                  <li>Disponible 24/7/365</li>
                  <li>Costo fijo predecible</li>
                  <li>100% consistente</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: grilla de beneficios */}
          <motion.div
            variants={variantesContenedor}
            initial="oculto"
            animate={estaEnVista ? "visible" : "oculto"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {beneficios.map((b) => (
              <motion.div
                key={b.titulo}
                variants={variantesItem}
                className="group p-5 rounded-xl fondo-card borde-neon-morado hover:border-brand-morado/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-morado/10"
              >
                <span className="text-2xl mb-3 block">{b.icono}</span>
                <h3 className="text-brand-blanco font-bold text-sm mb-2">{b.titulo}</h3>
                <p className="text-brand-gris text-xs leading-relaxed">{b.descripcion}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
