"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const servicios = [
  {
    icono: "🤖",
    titulo: "Chatbot 24/7",
    descripcion:
      "Agente de IA que atiende consultas, resuelve dudas y guía al cliente hacia la compra en cualquier canal digital, a cualquier hora del día.",
    caracteristicas: [
      "WhatsApp, Instagram, Web",
      "Respuesta en < 5 segundos",
      "Múltiples idiomas",
      "Aprendizaje continuo",
    ],
    color: "morado",
    gradiente: "from-brand-morado-oscuro/20 to-transparent",
    borde: "borde-neon-morado",
  },
  {
    icono: "⚙️",
    titulo: "Automatización de respuestas",
    descripcion:
      "Flujos inteligentes que gestionan tickets, resoluciones frecuentes, seguimientos y escalado automático a tu equipo humano cuando se necesita.",
    caracteristicas: [
      "Flujos personalizados",
      "Escalado inteligente",
      "Gestión de tickets",
      "Reportes automáticos",
    ],
    color: "azul",
    gradiente: "from-brand-azul-oscuro/20 to-transparent",
    borde: "borde-neon-azul",
  },
  {
    icono: "🔌",
    titulo: "Integración con sistemas",
    descripcion:
      "Conectamos la IA con tu CRM, ERP, base de datos y herramientas existentes para que todo funcione en sintonía sin duplicar trabajo.",
    caracteristicas: [
      "CRM y ERP",
      "APIs personalizadas",
      "Base de datos propia",
      "Sin fricción técnica",
    ],
    color: "morado",
    gradiente: "from-brand-morado-oscuro/20 to-transparent",
    borde: "borde-neon-morado",
  },
];

const variantesContenedor = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const variantesCard = {
  oculto: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Servicios() {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-brand-negro relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
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
            Nuestros servicios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blanco leading-tight">
            Todo lo que necesitás para
            <br />
            <span className="texto-gradiente">automatizar tu soporte</span>
          </h2>
          <p className="mt-6 text-brand-gris-claro text-lg max-w-2xl mx-auto">
            Tres soluciones diseñadas para trabajar juntas o por separado,
            adaptadas exactamente a tu negocio.
          </p>
        </motion.div>

        {/* Cards de servicios */}
        <motion.div
          variants={variantesContenedor}
          initial="oculto"
          animate={estaEnVista ? "visible" : "oculto"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {servicios.map((servicio, idx) => (
            <motion.div
              key={servicio.titulo}
              variants={variantesCard}
              className={`group relative p-8 rounded-2xl fondo-card ${servicio.borde} hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Gradiente interno */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${servicio.gradiente} opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`}
              />

              {/* Número decorativo */}
              <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] select-none">
                {idx + 1}
              </span>

              <div className="relative z-10">
                {/* Ícono */}
                <div className="text-5xl mb-6">{servicio.icono}</div>

                {/* Título */}
                <h3 className="text-brand-blanco font-black text-2xl mb-4">
                  {servicio.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-brand-gris-claro leading-relaxed mb-6">
                  {servicio.descripcion}
                </p>

                {/* Lista de características */}
                <ul className="space-y-2">
                  {servicio.caracteristicas.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-brand-gris-claro">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-morado-neon flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
