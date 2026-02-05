import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// 👉 IMPORTA O BOTÃO
import { WhatsAppFloat } from "@/components/landing/whatsapp-float"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NFS-e Hub - Automatize o Download de NFS-e do Portal Nacional",
  description:
    "Robô desktop para Windows que automatiza o download de XML e PDF de NFS-e diretamente do Portal Nacional. Economize horas no seu fechamento mensal.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}

        {/* 👉 BOTÃO WHATSAPP FLUTUANTE */}
        <WhatsAppFloat />

        <Analytics />
      </body>
    </html>
  )
}
