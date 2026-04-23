import type { Metadata } from "next";
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "NextTech — Infraestrutura, Web e IA";
const description =
  "Infraestrutura de TI, desenvolvimento web e inteligência artificial para automatizar, escalar e fortalecer sua empresa. Fale conosco pelo WhatsApp.";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "infraestrutura de TI",
    "desenvolvimento web",
    "inteligência artificial",
    "automação",
    "cloud",
    "suporte técnico",
  ],
  openGraph: {
    title: siteName,
    description,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${display.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-[#020617] font-sans text-slate-100 antialiased font-normal">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
