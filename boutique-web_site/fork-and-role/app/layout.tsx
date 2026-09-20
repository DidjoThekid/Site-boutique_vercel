import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fork&Rôle — Rôles Discord et accès GitHub",
  description:
    "Débloquez des rôles Discord et des accès à des dépôts GitHub privés, réglés directement sur TikTok Shop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${mono.variable} ${sans.variable} font-sans bg-bg text-ink`}>
        {children}
      </body>
    </html>
  );
}
