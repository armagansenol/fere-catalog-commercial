import { Metadata } from "next"

import { CardHowItWorks } from "@/components/card-how-it-works"
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
            <Button
              className="mt-4 tablet:mt-8 cursor-pointer py-3 px-16 border-[1px] border-black bg-white text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
              asChild
            >
              <Link href="https://catalog.ferecatalog.com/logoipsum">Demo Mağazayı İncele</Link>
            </Button>
          </div>
          <div className="relative h-img-md">
            <Img src={howItWorks} alt="Sample" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-stretch gap-16 bg-lynx-white rounded-2xl py-16 tablet:py-40 px-4 tablet:px-[var(--spacing-xl)]">
        {howToData.map((item, i) => {
          return (
            <CardHowItWorks
              key={i}
              item={{
                title: item.title,
                description: item.description,
                image: item.image,
              }}
              index={i}
            />
          )
        })}
      </section>
    </>
  )
}
