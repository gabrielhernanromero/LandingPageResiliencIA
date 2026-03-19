"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const preguntas = [
  {
    pregunta: "¿Cuánto tiempo tarda la implementación?",
    respuesta:
      "El proceso completo, desde el diagnóstico hasta el lanzamiento, toma entre 10 y 14 días hábiles. Esto incluye el análisis de tu negocio, el diseño de flujos, el entrenamiento de la IA, las integraciones y las pruebas finales. Para casos más simples, podemos estar en vivo en menos de una semana.",
  },
  {
    pregunta: "¿La IA puede manejar conversaciones complejas?",
    respuesta:
      "Sí. La IA que implementamos está entrenada para manejar el 80-90% de las consultas habituales de tu negocio. Para los casos que requieren criterio humano o están fuera del alcance, el sistema escala automáticamente a un agente de tu equipo con todo el contexto de la conversación ya disponible.",
  },
  {
    pregunta: "¿Qué pasa si un cliente habla en lunfardo o con errores?",
    respuesta:
      "Los modelos de IA que utilizamos están entrenados con lenguaje natural, incluyendo variantes del español rioplatense, expresiones informales y errores de tipeo. El sistema entiende la intención detrás del mensaje, no solo las palabras exactas, lo que garantiza una experiencia fluida para el cliente.",
  },
  {
    pregunta: "¿Cuánto cuesta el servicio?",
    respuesta:
      "El costo depende del alcance del proyecto: canales a integrar, volumen de conversaciones esperado y complejidad de los flujos. Trabajamos con planes desde la implementación inicial hasta planes de soporte mensual. Hablanos por WhatsApp y te armamos una propuesta personalizada sin costo.",
  },
];

function ItemFaq({
  pregunta,
  respuesta,
  abierto,
  onClick,
  delay,
}: {
  pregunta: string;
  respuesta: string;
  abierto: boolean;
  onClick: () => void;
  delay: number;
}) {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        abierto
          ? "borde-neon-morado bg-brand-morado-oscuro/10"
          : "border border-white/10 bg-brand-negro-suave hover:border-brand-morado/30"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={abierto}
      >
        <span className="text-brand-blanco font-semibold text-base lg:text-lg">
          {pregunta}
        </span>

        {/* Ícono + / × */}
        <motion.span
          animate={{ rotate: abierto ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-brand-morado/40 flex items-center justify-center text-brand-morado-neon font-bold text-lg"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {abierto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" as const }}
          >
            <div className="px-6 pb-6 text-brand-gris-claro leading-relaxed text-sm lg:text-base border-t border-brand-morado/20 pt-4">
              {respuesta}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [abierto, setAbierto] = useState<number | null>(null);
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  const toggle = (idx: number) => setAbierto(abierto === idx ? null : idx);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-brand-negro-suave relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,102,255,0.4), transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-morado-neon text-sm font-semibold uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blanco leading-tight">
            Preguntas frecuentes
          </h2>
          <p className="mt-6 text-brand-gris-claro text-lg max-w-xl mx-auto">
            Todo lo que necesitás saber antes de dar el paso.
          </p>
        </motion.div>

        {/* Acordeón */}
        <div className="flex flex-col gap-4">
          {preguntas.map((item, idx) => (
            <ItemFaq
              key={item.pregunta}
              pregunta={item.pregunta}
              respuesta={item.respuesta}
              abierto={abierto === idx}
              onClick={() => toggle(idx)}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* ¿Más preguntas? */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={estaEnVista ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center text-brand-gris-claro"
        >
          ¿Tenés otra pregunta?{" "}
          <a
            href="https://wa.me/5491154661480?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20ResiliencIA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-morado-neon hover:text-brand-morado font-semibold transition-colors underline underline-offset-4"
          >
            Escribinos por WhatsApp →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
