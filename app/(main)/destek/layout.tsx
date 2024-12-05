import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fere Catalog | Sıkça Sorulan Sorular (SSS)",
  description:
    "Fere Catalog hakkında merak ettiğiniz tüm soruların yanıtlarına Destek sayfamızdan ulaşabilir, sorularınızı iletebilirsiniz.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
