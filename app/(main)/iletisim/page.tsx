import { Metadata } from "next"

import { ContactForm } from "@/components/contact-form"
import { Img } from "@/components/utility/img"

import employee from "@/public/img/employee.jpg"

export const metadata: Metadata = {
  title: "Fere Catalog | İletişim",
  description:
    "Biz Fere Catalog olarak, kaliteli hizmet ve yenilikçi çözümler sunmayı hedefliyoruz. Hakkımızda daha fazla bilgi için hemen tıklayın.",
}

export default function Page() {
  return (
    <>
      <section className="py-6 md:py-12 px-4 tablet:px-[var(--spacing-lg)]">
        <div className="flex flex-col-reverse tablet:grid grid-cols-2 gap-4 tablet:gap-8 items-center">
          <div className="space-y-4">
            <h1 className="font-albert-sans font-normal text-30 leading-snug text-center tablet:text-left tracking-tighter">
              Bizimle İletişime Geçin
            </h1>
            <p className="font-mukta font-extralight text-20 max-w-xl text-center tablet:text-left">
              Sürekli olarak kendimizi yeniliyor ve sizlere daha iyi hizmet verebilmek için çalışıyoruz. Fere Catalog’un
              sizin ihtiyaçlarınıza en iyi şekilde hizmet etmesi için önerilerinizi ve yorumlarınızı bekliyoruz.
            </p>
          </div>
          <div className="relative h-60 tablet:h-[400px]">
            <Img src={employee} alt="Sample" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </section>
      <section className="flex flex-col tablet:grid grid-cols-12 items-center tablet:items-start gap-10 tablet:gap-18 py-8 tablet:py-16 tablet:pb-32 px-4 tablet:px-[var(--spacing-xl)]">
        <div className="col-span-6 space-y-8">
          <div>
            <h2 className="font-albert-sans font-medium text-18 leading-snug text-center tablet:text-left tracking-tighter">
              Telefon
            </h2>
            <p className="font-mukta font-extralight text-18 max-w-xl text-center tablet:text-left">00000000000</p>
          </div>
          <div>
            <h2 className="font-albert-sans font-medium text-18 leading-snug text-center tablet:text-left tracking-tighter">
              Email
            </h2>
            <p className="font-mukta font-extralight text-18 max-w-xl text-center tablet:text-left">
              ferecatalog@fere.com
            </p>
          </div>
          <div>
            <h2 className="font-albert-sans font-medium text-18 leading-snug text-center tablet:text-left tracking-tighter">
              Adres
            </h2>
            <p className="font-mukta font-extralight text-18 text-center tablet:text-left max-w-sm">
              Contoso Ltd 215 E Tasman Dr Po Box 65502 CA 95134 San Jose
            </p>
          </div>
        </div>
        <div className="col-span-6 flex flex-col space-y-8">
          <div className="max-w-lg">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
