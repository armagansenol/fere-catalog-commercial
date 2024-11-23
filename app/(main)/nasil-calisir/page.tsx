import { Img } from "@/components/utility/img"
import { Steps } from "./components/steps"

import howItWorks from "@/public/img/how-it-works.jpg"

const steps = [
  {
    title: "Mağaza Bilgilerinizi Girin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/img/sample.jpg",
  },
  {
    title: "Kategorilerinizi Girin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/img/sample.jpg",
  },
  {
    title: "Ürün Bilgilerini Girin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/img/sample.jpg",
  },
  {
    title: "Mağazanızın Hikayesi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/img/sample.jpg",
  },
  {
    title: "Online Siparişleri Kontrol Edin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/img/sample.jpg",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="py-6 md:py-12 px-4 tablet:px-[var(--spacing-lg)]">
        <div className="flex flex-col-reverse tablet:grid grid-cols-2 gap-4 tablet:gap-8 items-center">
          <div className="space-y-4">
            <h1 className="font-albert-sans font-normal text-30 leading-snug text-center tablet:text-left tracking-tighter">
              Adım Adım Kullanım Kılavuzu
            </h1>
            <p className="font-mukta font-extralight text-20 max-w-xl text-center tablet:text-left">
              Bu rehber, Fere’yi en etkili şekilde kullanabilmeniz için adım adım açıklamalar ve görsellerle
              hazırlanmıştır. Bu kılavuzu takip ederek hem zamandan tasarruf edebilir hem de yapının tüm potansiyelinden
              faydalanabilirsiniz.
            </p>
          </div>
          <div className="relative h-60 tablet:h-[400px]">
            <Img src={howItWorks} alt="Sample" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </section>
      <section className="py-16 tablet:py-40 px-4 tablet:px-[var(--spacing-lg)] bg-lynxWhite rounded-2xl mx-0 tablet:mx-6">
        <div className="space-y-20">
          {steps.map((step, i) => (
            <Steps key={i} index={i} length={steps.length} {...step} />
          ))}
        </div>
      </section>
    </>
  )
}
