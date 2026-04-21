import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Andres Oliveira — Desenvolvedor Full Stack",
  description:
    "Portfólio de Andres Oliveira, estudante de Análise e Desenvolvimento de Sistemas. Desenvolvedor Full Stack com experiência em React, Next.js, Node.js e TypeScript.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
    "ADS",
    "Análise e Desenvolvimento de Sistemas",
  ],
  authors: [{ name: "Andres Oliveira" }],
  openGraph: {
    title: "Andres Oliveira — Desenvolvedor Full Stack",
    description:
      "Portfólio de Andres Oliveira, estudante de Análise e Desenvolvimento de Sistemas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-gray-950 text-gray-100 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
