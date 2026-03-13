import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ResiliencIA — Automatización de atención al cliente con IA",
  description:
    "Automatizamos el soporte de tu empresa con IA para que nunca pierdas un cliente, a cualquier hora del día.",
  keywords: "IA, inteligencia artificial, chatbot, automatización, atención al cliente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-brand-negro text-brand-blanco antialiased">
        {children}
      </body>
    </html>
  );
}
