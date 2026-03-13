import Navbar from "@/componentes/navbar/navbar";
import Hero from "@/componentes/hero/hero";
import Problema from "@/componentes/problema/problema";
import Solucion from "@/componentes/solucion/solucion";
import Servicios from "@/componentes/servicios/servicios";
import ComoFunciona from "@/componentes/como-funciona/como-funciona";
import Metricas from "@/componentes/metricas/metricas";
import Faq from "@/componentes/faq/faq";
import CtaFinal from "@/componentes/cta-final/cta-final";
import Footer from "@/componentes/footer/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problema />
      <Solucion />
      <Servicios />
      <ComoFunciona />
      <Metricas />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}
