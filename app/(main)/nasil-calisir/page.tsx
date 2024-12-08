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
          <div className="flex flex-col gap-4 items-center tablet:items-start">
            <h1 className="font-albert-sans font-normal text-30 leading-snug text-center tablet:text-left tracking-tighter">
              Adım Adım Kullanım Kılavuzu
            </h1>
            <p className="font-mukta font-extralight text-20 max-w-xl text-center tablet:text-left">
              Platformumuzu nasıl kullanacağınızı adım adım keşfedin. Aşağıda yer alan yönergeleri takip ederek
              mağazanızı oluşturabilir, demo mağazamızı inceleyebilirsiniz.
            </p>
            <Button className="mt-4 tablet:mt-8" variant="bw" asChild>
              <Link href="https://catalog.ferecatalog.com/logoipsum">Demo Mağazayı İncele</Link>
            </Button>
          </div>
          <div className="relative h-60 tablet:h-[400px]">
            <Img src={howItWorks} alt="Sample" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-stretch py-16 tablet:py-40 px-4 tablet:px-[var(--spacing-xl)] bg-lynxWhite rounded-2xl mx-0 tablet:mx-6 mb-0 tablet:mb-20">
        <div className="space-y-20">
          {howToData.map((item, i) => (
            <div className="flex items-center tablet:items-start justify-center gap-8" key={i}>
              <div className="flex flex-col items-center">
                <div className="h-12 tablet:h-16 w-12 tablet:w-16 -mt-2 flex items-center justify-center rounded-full bg-quarterdeck text-24 font-albert-sans font-medium text-white">
                  {i + 1}
                </div>
                {/* {index < length - 1 && <div className="hidden tablet:block w-px h-32 bg-blue-600/20" />} */}
              </div>
              <div className="flex flex-col-reverse tablet:flex-row justify-center tablet:grid grid-cols-12 gap-5 tablet:gap-20">
                <div className="col-span-6">
                  <h3 className="font-albert-sans font-normal text-24 tablet:text-30 mb-4 text-center tablet:text-left tracking-tighter leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-mukta font-thin text-18 tablet:text-20 max-w-lg text-center tablet:text-left">
                    {item.description}
                  </p>
                </div>
                <div className="col-span-6 rounded-lg overflow-hidden">
                  <Img src={item.image.src} alt={item.image.alt} className="object-cover" height={1000} width={1000} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-8 mx-auto tablet:mt-24" size="lg" padding="wide" asChild>
          <Link href="/fiyatlandirma">Ücretsiz Denemeye Başla</Link>
        </Button>
      </section>
    </>
  )
}
