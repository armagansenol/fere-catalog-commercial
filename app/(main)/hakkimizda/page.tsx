import { Img } from "@/components/utility/img"
import s from "./about.module.scss"

import cn from "clsx"

import { ContactForm } from "@/components/contact-form"

export default function Page() {
  return (
    <>
      <section className={cn(s.about, "flex flex-col items-center space-y-16 py-16 line leading-none")}>
        <h1 className="text-40 font-normal font-albert-sans text-center px-0 tablet:px-40 leading-tight max-w-screen-lg">
          Fere Catalog olarak, 2001 yılından bu yana toptan satış sektöründe faaliyet gösteren deneyimli bir ekibiz.
        </h1>
        <p className="text-30 font-light font-mukta text-center leading-tight max-w-screen-lg">
          Yıllar boyunca sektördeki eksiklikleri ve zorlukları yakından gözlemledik. Bu gözlemler doğrultusunda, toptan
          satış yapan işletmelerin sipariş ve katalog yönetimi süreçlerini daha sistematik ve verimli hale getirecek bir
          çözüm geliştirmeye karar verdik.
        </p>
        <div className="w-full rounded-md overflow-hidden">
          <Img src="/img/ipad.jpg" alt="Sample" height={2000} width={2000} />
        </div>
        <p className="text-30 font-normal font-mukta text-center leading-tight max-w-screen-lg">
          Başlangıçta sadece kendi işletmemiz için online katalog oluşturup, bu katalog üzerinden sipariş alabileceğimiz
          bir yapı kurduk.
        </p>
        <p className="text-24 font-light font-mukta text-center leading-tight max-w-screen-lg">
          Zamanla, sektör farketmeksizin diğer toptan satış yapan firmaların da benzer sorunlarla karşı karşıya olduğunu
          gördük. Bu ihtiyaçtan yola çıkarak, Fere Catalog’u toptan satış yapan tüm işletmelerin abone olup
          faydalanabileceği bir platforma dönüştürdük.
        </p>
        <h2 className="text-45 font-normal font-albert-sans text-center">Hizmetlerimiz ve Faydalarımız</h2>
        <p className="text-24 font-light font-mukta text-center leading-tight max-w-screen-lg">
          Fere Catalog ile, online ürün kataloglarını oluşturabilir, ürünlerini kendi belirledikleri kategoriler altında
          sergileyebilir ve çeşitli özellikler tanımlayabilirsiniz. Müşterilerinize sadece mağazanızın linkini ileterek,
          ürünlerinizi incelemelerini ve sipariş oluşturmalarını sağlayabilirsiniz. Ayrıca, gerçek zamanlı raporlar
          sayesinde ürün performansınızı ve sipariş trendlerinizi kolayca takip edebilirsiniz.
        </p>
        <h2 className="text-45 font-normal font-albert-sans text-center">Sizlere Neler Sunuyoruz?</h2>
        <div className="grid grid-cols-2 gap-x-48 gap-y-28 px-36">
          <div className="flex flex-col items-center space-y-5">
            <h5 className="text-24 font-normal font-albert-sans text-center text-quarterdeck">Düzen ve Verimlilik</h5>
            <p className="text-20 font-light font-albert-sans text-center leading-tight max-w-screen-lg">
              Sipariş süreçlerinizi ve ürün yönetimini sistematik ve kolay takip edilebilir hale getirerek, zamandan ve
              iş gücünden tasarruf etmenizi sağlıyoruz.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h5 className="text-24 font-normal font-albert-sans text-center text-quarterdeck">Erişilebilirlik</h5>
            <p className="text-20 font-light font-albert-sans text-center leading-tight max-w-screen-lg">
              Ürünlerinizin müşterilerinize ve potansiyel müşterilerinize en güncel haliyle en hızlı şekilde
              ulaşılabilir olma imkanı sunuyoruz. 
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h5 className="text-24 font-normal font-albert-sans text-center text-quarterdeck">Güvenilirlik</h5>
            <p className="text-20 font-light font-albert-sans text-center leading-tight max-w-screen-lg">
              Sipariş yönetiminizi dijital ortamda, güvenilir bir şekilde gerçekleştirmenize yardımcı oluyoruz.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h5 className="text-24 font-normal font-albert-sans text-center text-quarterdeck">Esneklik</h5>
            <p className="text-20 font-light font-albert-sans text-center leading-tight max-w-screen-lg">
              Her sektörden ve her ölçekteki işletmenin ihtiyaçlarına uygun çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-12 gap-20 py-16">
        <div className="col-span-6 flex flex-col space-y-8">
          <p className="indent-16 font-albert-sans text-20 font-normal leading-tight">
            Sürekli olarak kendimizi yeniliyor ve sizlere daha iyi hizmet verebilmek için çalışıyoruz. Fere Catalog’un
            sizin ihtiyaçlarınıza en iyi şekilde hizmet etmesi için önerilerinizi ve yorumlarınızı bekliyoruz.
          </p>
          <div className="max-w-lg">
            <ContactForm />
          </div>
        </div>
        <div className="col-span-6">
          <div className={cn(s.imgC)}>
            <Img src="/img/employee.jpg" alt="Sample" height={1000} width={1000} />
          </div>
        </div>
      </section>
    </>
  )
}
