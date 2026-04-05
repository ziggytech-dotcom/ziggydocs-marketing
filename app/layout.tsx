import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/app/components/CookieBanner"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: { default: "ZiggyDocs — E-signatures without the enterprise price", template: "%s | ZiggyDocs" },
  description: "E-signatures without the enterprise price. Part of the ZiggyTech Business Suite.",
  openGraph: { title: "ZiggyDocs — E-signatures without the enterprise price", description: "E-signatures without the enterprise price.", siteName: "ZiggyDocs", url: "https://ziggydocs.com" },
  icons: { icon: '/favicon.ico' },
  metadataBase: new URL("https://ziggydocs.com"),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
