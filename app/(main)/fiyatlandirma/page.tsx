import { Metadata } from "next"

import { getPlans } from "@/services/pricing"
import { PricingToggle } from "./components/pricing-toggle"

export const metadata: Metadata = {
  title: "Fere Catalog | Fiyatlandırma ve Paketler - Ücretsiz Dene",
  description:
    "İlk ay ücretsiz deneyin. Fiyatlandırmamız hakkında detaylı bilgi alın. Fere Catalog olarak işletmenizin ihtiyacına uygun paket seçenekleri sunuyoruz.",
}

export default async function Page() {
  const plans = await getPlans()

  return (
    <div className="flex flex-col items-center mx-auto px-4 tablet:px-10 py-8 pb-8 tablet:pb-32">
      <h1 className="text-30 font-normal font-albert-sans leading-tight text-center max-w-lg mb-8 tracking-tighter">
        Üyelik oluşturmak için öncelikle size en uygun paketi seçin.
      </h1>
      <PricingToggle plans={plans} />
    </div>
  )
}
