import { SmoothLayout } from "@/layouts/smooth"
import type { Metadata } from "next"
import { Albert_Sans, Mukta } from "next/font/google"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Providers } from "@/components/providers"
import { Modal } from "@/components/utility/modal"

const albertSans = Albert_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-albert-sans",
})

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mukta",
})

export const metadata: Metadata = {
  title: "Fere Catalog | Online Katalog ve Sipariş Platformu",
  description:
    "Fere ile online mağazanızı kolayca oluşturun, ürünlerinizi kategorize edin ve siparişlerinizi tek bir platformdan yönetin. Hemen ücretsiz denemeye başlayın!",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div
        className={`flex min-h-screen flex-col items-stretch justify-between ${albertSans.variable} ${mukta.variable} overflow-hidden`}
      >
        <Header />
        <SmoothLayout>
          <main className="mt-[var(--header-height)] overflow-hidden">{children}</main>
          <Footer />
        </SmoothLayout>
        <Modal />
      </div>
    </Providers>
  )
}
