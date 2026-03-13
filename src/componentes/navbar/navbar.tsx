"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5491112345678?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20ResiliencIA";

const enlaces = [
  { nombre: "Servicios", href: "#servicios" },
  { nombre: "Cómo funciona", href: "#como-funciona" },
  { nombre: "Métricas", href: "#metricas" },
  { nombre: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Detecta scroll para cambiar fondo del navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-negro/90 backdrop-blur-md border-b border-brand-morado/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl lg:text-2xl font-black tracking-tight text-brand-blanco">
              Resilien
              <span className="texto-gradiente">CIA</span>
            </span>
          </a>

          {/* Links de navegación — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {enlaces.map((enlace) => (
              <a
                key={enlace.href}
                href={enlace.href}
                className="text-brand-gris-claro hover:text-brand-morado-neon transition-colors duration-200 text-sm font-medium"
              >
                {enlace.nombre}
              </a>
            ))}
          </nav>

          {/* Botón CTA — desktop */}
          <div className="hidden md:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-brand-morado-oscuro hover:bg-brand-morado text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-brand-morado/40"
            >
              Hablemos por WhatsApp
            </a>
          </div>

          {/* Botón hamburguesa — mobile */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden p-2 text-brand-gris-claro hover:text-brand-morado-neon transition-colors"
            aria-label="Abrir menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuAbierto ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuAbierto ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-negro-suave border-t border-brand-morado/20"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {enlaces.map((enlace) => (
                <a
                  key={enlace.href}
                  href={enlace.href}
                  onClick={() => setMenuAbierto(false)}
                  className="text-brand-gris-claro hover:text-brand-morado-neon transition-colors py-2 text-base font-medium"
                >
                  {enlace.nombre}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 rounded-lg bg-brand-morado-oscuro hover:bg-brand-morado text-white text-sm font-semibold text-center transition-all duration-200"
              >
                Hablemos por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
