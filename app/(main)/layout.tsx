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
  title: "Mightyfull",
  description: "This might be the best cookie ever!",
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
        </SmoothLayout>
        <Footer />
        <Modal />
      </div>
    </Providers>
  )
}
