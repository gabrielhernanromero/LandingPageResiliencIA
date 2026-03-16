"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pasos = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descripcion:
      "Analizamos tu negocio, flujos de atención, canales de comunicación y puntos de dolor específicos. Mapeamos cada caso de uso.",
    duracion: "1-2 días",
    icono: "🔍",
  },
  {
    numero: "02",
    titulo: "Diseño",
    descripcion:
      "Diseñamos los flujos de conversación, la personalidad del bot y la arquitectura de integración. Te presentamos el prototipo para aprobación.",
    duracion: "3-5 días",
    icono: "✏️",
  },
  {
    numero: "03",
    titulo: "Implementación",
    descripcion:
      "Entrenamos la IA con tu información, conectamos los sistemas, realizamos pruebas exhaustivas y hacemos el lanzamiento controlado.",
    duracion: "5-7 días",
    icono: "🚀",
  },
  {
    numero: "04",
    titulo: "Soporte continuo",
    descripcion:
      "Monitoreamos el rendimiento, optimizamos los flujos según los datos reales y actualizamos la IA a medida que tu negocio crece.",
    duracion: "Ongoing",
    icono: "🛡️",
  },
];

export default function ComoFunciona() {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-brand-negro-suave relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,102,255,0.4), transparent)",
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
            El proceso
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blanco leading-tight">
            De cero a IA funcionando
            <br />
            <span className="texto-gradiente">en menos de 2 semanas</span>
          </h2>
          <p className="mt-6 text-brand-gris-claro text-lg max-w-2xl mx-auto">
            Un proceso claro, sin sorpresas y con resultados garantizados desde
            el primer día de operación.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea conectora — desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-morado/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {pasos.map((paso, idx) => (
              <motion.div
                key={paso.numero}
                initial={{ opacity: 0, y: 40 }}
                animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col items-center lg:items-center text-center"
              >
                {/* Círculo del número */}
                <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl bg-brand-negro borde-neon-morado">
                  {paso.icono}
                </div>

                {/* Número decorativo */}
                <span className="text-brand-morado-neon font-black text-xs tracking-widest mb-2">
                  PASO {paso.numero}
                </span>

                {/* Título */}
                <h3 className="text-brand-blanco font-black text-xl mb-3">
                  {paso.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-brand-gris-claro text-sm leading-relaxed mb-4">
                  {paso.descripcion}
                </p>

                {/* Badge de duración */}
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-morado-oscuro/30 border border-brand-morado/30 text-brand-morado-neon text-xs font-medium">
                  {paso.duracion}
                </span>

                {/* Flecha conectora mobile */}
                {idx < pasos.length - 1 && (
                  <div className="lg:hidden mt-6 text-brand-morado/40 text-2xl">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA debajo del timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-brand-gris-claro text-lg">
            ¿Querés saber cómo aplica esto a tu empresa?{" "}
            <a
              href="https://wa.me/5491112345678?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20ReciliencIA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-morado-neon hover:text-brand-morado font-semibold underline underline-offset-4 transition-colors"
            >
              Hablemos y te explicamos paso a paso →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
