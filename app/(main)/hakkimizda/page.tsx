import s from "./about.module.scss"

import cn from "clsx"

import { ContactForm } from "@/components/contact-form"
import { Img } from "@/components/utility/img"

import employee from "@/public/img/employee.jpg"
import ipad from "@/public/img/ipad.jpg"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fere Catalog | Yılların Deneyimiyle Kaliteli Hizmet",
  description:
    "Biz Fere Catalog olarak, kaliteli hizmet ve yenilikçi çözümler sunmayı hedefliyoruz. Hakkımızda daha fazla bilgi için hemen tıklayın.",
}

export default function AboutPage() {
  return (
    <>
      <section className={cn(s.about, "flex flex-col items-center py-8 tablet:py-16 line leading-none")}>
        <h1 className="text-30 tablet:text-40 font-normal font-albert-sans text-center leading-snug max-w-prose mb-7 tablet:mb-14 px-4 tablet:px-40">
          Fere Catalog olarak, 2001 yılından bu yana toptan satış sektöründe faaliyet gösteren deneyimli bir ekibiz.
        </h1>
        <p className="text-20 tablet:text-30 font-light font-mukta text-center leading-snug max-w-prose mb-14 tablet:mb-24 px-4">
          Yıllar boyunca sektördeki eksiklikleri ve zorlukları yakından gözlemledik. Bu gözlemler doğrultusunda, toptan
          satış yapan işletmelerin sipariş ve katalog yönetimi süreçlerini daha sistematik ve verimli hale getirecek bir
          çözüm geliştirmeye karar verdik.
        </p>
        <div className="px-[var(--spacing-lg)] w-full h-80 tablet:h-auto mb-14 tablet:mb-24">
          <div className="rounded-none tablet:rounded-md overflow-hidden">
            <Img className="object-cover" src={ipad} alt="Sample" />
          </div>
        </div>
        <p className="text-24 tablet:text-30 font-normal font-mukta text-center leading-snug max-w-prose mb-7 tablet:mb-10 px-4">
          Başlangıçta sadece kendi işletmemiz için online katalog oluşturup, bu katalog üzerinden sipariş alabileceğimiz
          bir yapı kurduk.
        </p>
        <p className="text-20 tablet:text-24 font-light font-mukta text-center leading-snug max-w-prose mb-14 tablet:mb-16 px-4">
          Zamanla, sektör farketmeksizin diğer toptan satış yapan firmaların da benzer sorunlarla karşı karşıya olduğunu
          gördük. Bu ihtiyaçtan yola çıkarak, Fere Catalog’u toptan satış yapan tüm işletmelerin abone olup
          faydalanabileceği bir platforma dönüştürdük.
        </p>
        <h2 className="text-40 tablet:text-45 font-normal font-albert-sans text-center mb-8 tablet:mb-10 px-4">
          Hizmetlerimiz ve Faydalarımız
        </h2>
        <p className="text-20 tablet:text-24 font-light font-mukta text-center leading-snug max-w-prose mb-14 tablet:mb-20 px-4">
          Fere Catalog ile, online ürün kataloglarını oluşturabilir, ürünlerini kendi belirledikleri kategoriler altında
          sergileyebilir ve çeşitli özellikler tanımlayabilirsiniz. Müşterilerinize sadece mağazanızın linkini ileterek,
          ürünlerinizi incelemelerini ve sipariş oluşturmalarını sağlayabilirsiniz. Ayrıca, gerçek zamanlı raporlar
          sayesinde ürün performansınızı ve sipariş trendlerinizi kolayca takip edebilirsiniz.
        </p>
        <h2 className="text-40 tablet:text-45 font-normal font-albert-sans text-center leading-snug mb-4 tablet:mb-16 px-4">
          Sizlere Neler Sunuyoruz?
        </h2>
        <div className="flex flex-col items-center tablet:grid grid-cols-2 tablet:items-start justify-items-stretch gap-x-16 tablet:gap-x-24 gap-y-14 tablet:gap-y-28 max-w-screen-lg px-4">
          <div className="flex flex-col items-center space-y-5">
            <h5 className="text-24 font-normal font-albert-sans text-center text-quarterdeck px-4">
              Düzen ve Verimlilik
            </h5>
            <p className="text-20 font-light font-albert-sans text-center leading-normal max-w-prose">
              Sipariş süreçlerinizi ve ürün yönetimini sistematik ve kolay takip edilebilir hale getirerek, zamandan ve
              iş gücünden tasarruf etmenizi sağlıyoruz.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h5 className="text-24 font-normal font-albert-sans text-center text-quarterdeck px-4">Erişilebilirlik</h5>
            <p className="text-20 font-light font-albert-sans text-center leading-normal max-w-prose">
              Ürünlerinizin müşterilerinize ve potansiyel müşterilerinize en güncel haliyle en hızlı şekilde
              ulaşılabilir olma imkanı sunuyoruz. 
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h5 className="text-24 font-normal font-albert-sans text-center text-quarterdeck px-4">Güvenilirlik</h5>
            <p className="text-20 font-light font-albert-sans text-center leading-normal max-w-prose">
              Sipariş yönetiminizi dijital ortamda, güvenilir bir şekilde gerçekleştirmenize yardımcı oluyoruz.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h5 className="text-24 font-normal font-albert-sans text-center text-quarterdeck">Esneklik</h5>
            <p className="text-20 font-light font-albert-sans text-center leading-normal max-w-prose">
              Her sektörden ve her ölçekteki işletmenin ihtiyaçlarına uygun çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col tablet:grid grid-cols-12 gap-10 tablet:gap-20 py-8 tablet:py-16 tablet:pb-32 px-4 tablet:px-[var(--spacing-xl)]">
        <div className="col-span-6 flex flex-col space-y-8">
          <p className="tablet:indent-16 font-albert-sans text-20 font-normal leading-snug text-center tablet:text-left">
            Sürekli olarak kendimizi yeniliyor ve sizlere daha iyi hizmet verebilmek için çalışıyoruz. Fere Catalog’un
            sizin ihtiyaçlarınıza en iyi şekilde hizmet etmesi için önerilerinizi ve yorumlarınızı bekliyoruz.
          </p>
          <div className="max-w-lg">
            <ContactForm />
          </div>
        </div>
        <div className="col-span-6">
          <div className="rounded-md overflow-hidden">
            <Img className="object-cover" src={employee} alt="Sample" />
          </div>
        </div>
      </section>
    </>
  )
}
