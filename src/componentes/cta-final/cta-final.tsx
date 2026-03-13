"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_URL =
  "https://wa.me/5491112345678?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20ResiliencIA";

export default function CtaFinal() {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-brand-negro relative overflow-hidden">
      {/* Gradiente de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Líneas decorativas */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full borde-neon-morado bg-brand-morado-oscuro/10 text-brand-morado-neon text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-morado-neon animate-pulse" />
            Sin costo de consulta inicial
          </span>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-blanco leading-tight">
            ¿Listo para dejar de
            <br />
            <span className="texto-gradiente">perder clientes?</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-brand-gris-claro text-lg lg:text-xl max-w-2xl leading-relaxed">
            Hablemos hoy. En 15 minutos te mostramos exactamente cómo ResiliencIA
            puede transformar la atención al cliente de tu empresa — sin compromiso.
          </p>

          {/* Botón WhatsApp */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-brand-morado-oscuro via-brand-morado to-brand-azul-oscuro text-white font-bold text-xl shadow-2xl shadow-brand-morado/30 transition-shadow duration-300 hover:shadow-brand-morado/50"
          >
            {/* Ícono WhatsApp */}
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.11 1.522 5.836L0 24l6.337-1.497A11.924 11.924 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.81 9.81 0 01-5.003-1.371l-.359-.213-3.72.879.944-3.62-.234-.373A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Hablemos por WhatsApp
          </motion.a>

          {/* Puntos de confianza */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-gris">
            {[
              "Sin contrato a largo plazo",
              "Respuesta en menos de 1 hora",
              "Consulta inicial sin cargo",
            ].map((punto) => (
              <span key={punto} className="flex items-center gap-2">
                <span className="text-brand-morado-neon">✓</span>
                {punto}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
