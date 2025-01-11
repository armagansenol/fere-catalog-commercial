import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { getHowTo } from "@/services/how-to"

import howItWorks from "@/public/img/how-it-works.jpg"

export const metadata: Metadata = {
  title: "Fere Catalog Nasıl Çalışır | Nasıl Mağaza Oluşturulur",
  description:
    "Üye olun, mağazanızı açın, ürünlerinizi ekleyin, hızlıca online kataloğunuzu hazırlayın. Detaylı anlatım için hemen inceleyin.",
}

export default async function HowItWorksPage() {
  const howToData = await getHowTo()

  return (
    <>
      <section className="py-6 md:py-12 px-4 pb-12 tablet:px-[var(--spacing-lg)]">
        <div className="flex flex-col-reverse tablet:grid grid-cols-2 gap-4 tablet:gap-8 items-center">
          <div className="flex flex-col gap-4 items-center tablet:items-start text-center tablet:text-left">
            <h1 className="font-albert-sans font-normal text-30 leading-snug tracking-tighter">
              Adım Adım Kullanım Kılavuzu
            </h1>
            <p className="font-mukta font-extralight text-18 tablet:text-20 tablet:max-w-xl">
              Platformumuzu nasıl kullanacağınızı adım adım keşfedin. Aşağıda yer alan yönergeleri takip ederek
              mağazanızı oluşturabilir, demo mağazamızı inceleyebilirsiniz.
            </p>
            <Button className="mt-4 tablet:mt-8" variant="bw" asChild>
              <Link href="https://catalog.ferecatalog.com/logoipsum">Demo Mağazayı İncele</Link>
            </Button>
          </div>
          <div className="relative h-img-md">
            <Img src={howItWorks} alt="Sample" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-stretch gap-16 bg-lynx-white rounded-2xl py-16 tablet:py-40 px-4 tablet:px-[var(--spacing-xl)]">
        {howToData.map((item, i) => (
          <div
            className="flex flex-col tablet:flex-row items-center tablet:items-start justify-center gap-5 tablet:gap-10"
            key={i}
          >
            <div className="h-12 w-12 tablet:h-14 tablet:w-14 -mt-2 flex items-center justify-center rounded-full bg-quarterdeck text-24 font-albert-sans font-medium text-white flex-shrink-0">
              {i + 1}
            </div>
            <div className="flex flex-col-reverse items-center tablet:flex-row tablet:items-start justify-center tablet:grid grid-cols-12 gap-5 tablet:gap-12">
              <div className="col-span-6 text-center tablet:text-left tablet:max-w-lg">
                <h3 className="font-albert-sans font-normal text-24 tablet:text-30 mb-4 tracking-tighter leading-tight">
                  {item.title}
                </h3>
                <p className="font-mukta font-thin text-18 tablet:text-20 tablet:max-w-lg">{item.description}</p>
              </div>
              <div className="col-span-6 rounded-lg overflow-hidden h-img-md">
                <Img src={item.image.src} alt={item.image.alt} className="object-cover" height={1000} width={1000} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
