import { Img } from "@/components/utility/img"
import s from "./about.module.scss"

import cx from "clsx"

import sample from "@/public/img/sample.jpg"

export default function Page() {
  return (
    <section className={cx(s.about, "flex flex-col items-center space-y-16 px-16 py-16 line leading-none")}>
      <h1 className="text-40 font-normal font-albert-sans text-center px-0 tablet:px-40">
        Fere Catalog olarak, 2001 yılından bu yana toptan satış sektöründe faaliyet gösteren deneyimli bir ekibiz.
      </h1>
      <p className="text-30 font-light font-mukta text-center">
        Yıllar boyunca sektördeki eksiklikleri ve zorlukları yakından gözlemledik. Bu gözlemler doğrultusunda, toptan
        satış yapan işletmelerin sipariş ve katalog yönetimi süreçlerini daha sistematik ve verimli hale getirecek bir
        çözüm geliştirmeye karar verdik.
      </p>
      <div className={cx(s.imgC, "w-full")}>
        <Img src={sample} alt="Sample" />
      </div>
      <p className="text-30 font-normal font-mukta text-center">
        Yıllar boyunca sektördeki eksiklikleri ve zorlukları yakından gözlemledik. Bu gözlemler doğrultusunda, toptan
        satış yapan işletmelerin sipariş ve katalog yönetimi süreçlerini daha sistematik ve verimli hale getirecek bir
        çözüm geliştirmeye karar verdik.
      </p>
      <p className="text-24 font-normal font-mukta text-center">
        Zamanla, sektör farketmeksizin diğer toptan satış yapan firmaların da benzer sorunlarla karşı karşıya olduğunu
        gördük. Bu ihtiyaçtan yola çıkarak, Fere Catalog’u toptan satış yapan tüm işletmelerin abone olup
        faydalanabileceği bir platforma dönüştürdük.
      </p>
      <h2 className="text-45 font-normal font-albert-sans text-center">Hizmetlerimiz ve Faydalarımız</h2>
      <p className="text-24 font-normal font-mukta text-center">
        Fere Catalog ile, online ürün kataloglarını oluşturabilir, ürünlerini kendi belirledikleri kategoriler altında
        sergileyebilir ve çeşitli özellikler tanımlayabilirsiniz. Müşterilerinize sadece mağazanızın linkini ileterek,
        ürünlerinizi incelemelerini ve sipariş oluşturmalarını sağlayabilirsiniz. Ayrıca, gerçek zamanlı raporlar
        sayesinde ürün performansınızı ve sipariş trendlerinizi kolayca takip edebilirsiniz.
      </p>
      <h2 className="text-45 font-normal font-albert-sans text-center">Sizlere Neler Sunuyoruz?</h2>
      <div className="grid grid-cols-2 gap-x-48 gap-y-28 px-36">
        <div className="flex flex-col items-center space-y-5">
          <h5 className="text-24 font-normal font-albert-sans text-center">Düzen ve Verimlilik</h5>
          <p className="text-20 font-light font-albert-sans text-center leading-tight">
            Sipariş süreçlerinizi ve ürün yönetimini sistematik ve kolay takip edilebilir hale getirerek, zamandan ve iş
            gücünden tasarruf etmenizi sağlıyoruz.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h5 className="text-24 font-normal font-albert-sans text-center">Düzen ve Verimlilik</h5>
          <p className="text-20 font-light font-albert-sans text-center leading-tight">
            Sipariş süreçlerinizi ve ürün yönetimini sistematik ve kolay takip edilebilir hale getirerek, zamandan ve iş
            gücünden tasarruf etmenizi sağlıyoruz.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h5 className="text-24 font-normal font-albert-sans text-center">Düzen ve Verimlilik</h5>
          <p className="text-20 font-light font-albert-sans text-center leading-tight">
            Sipariş süreçlerinizi ve ürün yönetimini sistematik ve kolay takip edilebilir hale getirerek, zamandan ve iş
            gücünden tasarruf etmenizi sağlıyoruz.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h5 className="text-24 font-normal font-albert-sans text-center">Düzen ve Verimlilik</h5>
          <p className="text-20 font-light font-albert-sans text-center leading-tight">
            Sipariş süreçlerinizi ve ürün yönetimini sistematik ve kolay takip edilebilir hale getirerek, zamandan ve iş
            gücünden tasarruf etmenizi sağlıyoruz.
          </p>
        </div>
      </div>
    </section>
  )
}
