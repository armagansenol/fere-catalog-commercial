import { SmoothLayout } from "@/layouts/smooth"
import type { Metadata } from "next"
import { Albert_Sans, Mukta } from "next/font/google"

import { Header } from "@/components/header"
import { Providers } from "@/components/providers"
import { Modal } from "@/components/utility/modal"
import { Footer } from "@/components/footer"

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
