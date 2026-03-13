"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Puntos de dolor del cliente
const puntosDeDolor = [
  {
    icono: "⏳",
    titulo: "Tiempos de respuesta lentos",
    descripcion:
      "Tus clientes esperan horas o días para obtener una respuesta. En ese tiempo, ya fueron a la competencia.",
  },
  {
    icono: "💸",
    titulo: "Soporte caro e ineficiente",
    descripcion:
      "Pagar un equipo humano 24/7 es inviable. Y en horario reducido, perdés ventas y clientes fuera de hora.",
  },
  {
    icono: "❌",
    titulo: "Errores humanos constantes",
    descripcion:
      "Respuestas inconsistentes, información desactualizada y agentes cansados arruinan la experiencia del cliente.",
  },
  {
    icono: "📉",
    titulo: "Clientes que no vuelven",
    descripcion:
      "El 67% de los clientes que tuvieron mala experiencia de soporte no vuelven a comprar. Cada error cuesta.",
  },
];

const variantesContenedor = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const variantesCard = {
  oculto: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Problema() {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" className="py-20 lg:py-28 bg-brand-negro relative overflow-hidden">
      {/* Fondo decorativo */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)",
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
            El problema
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blanco leading-tight">
            Tu atención al cliente{" "}
            <span className="text-red-400">te está costando</span>
            <br />
            clientes y dinero
          </h2>
          <p className="mt-6 text-brand-gris-claro text-lg max-w-2xl mx-auto">
            Mientras tu empresa duerme, tus competidores con IA están
            respondiendo. Cada hora sin respuesta es una oportunidad perdida.
          </p>
        </motion.div>

        {/* Grid de puntos de dolor */}
        <motion.div
          variants={variantesContenedor}
          initial="oculto"
          animate={estaEnVista ? "visible" : "oculto"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {puntosDeDolor.map((punto) => (
            <motion.div
              key={punto.titulo}
              variants={variantesCard}
              className="group p-6 rounded-2xl fondo-card border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{punto.icono}</div>
              <h3 className="text-brand-blanco font-bold text-lg mb-3">
                {punto.titulo}
              </h3>
              <p className="text-brand-gris-claro text-sm leading-relaxed">
                {punto.descripcion}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stat destacado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={estaEnVista ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 p-8 rounded-2xl border border-red-500/20 bg-red-950/10 text-center"
        >
          <p className="text-brand-gris-claro text-lg">
            El{" "}
            <span className="text-red-400 font-black text-3xl">89%</span>{" "}
            de las empresas compiten principalmente en base a la experiencia del
            cliente — y la mayoría está fallando en el primer contacto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
