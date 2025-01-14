import s from "./home.module.scss"

import cn from "clsx"

import { Marquee } from "@/components/animations/marquee"
import { ScaleIn } from "@/components/animations/scale-in"
import { ScaleOut } from "@/components/animations/scale-out"
import { CardTestimonial } from "@/components/card-testimonial"
import { MainSlider } from "@/components/main-slider"
import { Teaser } from "@/components/teaser"
import { Button } from "@/components/ui/button"
import { EmblaCarousel } from "@/components/utility/embla-carousel"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { getMainSlider, getTestimonials } from "@/lib/api/queries"

import r1 from "@/public/img/r-1.png"
import r2 from "@/public/img/r-2.png"
import r3 from "@/public/img/r-3.png"
import r4 from "@/public/img/r-4.png"
import r5 from "@/public/img/r-5.png"
import r6 from "@/public/img/r-6.png"

import { HowItWorks } from "@/components/how-it-works"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import employee from "@/public/img/employee.jpg"

const companies = [
  {
    logo: <Img className="object-contain" src={r1} alt="r1" />,
  },
  {
    logo: <Img className="object-contain" src={r2} alt="r2" />,
  },
  {
    logo: <Img className="object-contain" src={r3} alt="r3" />,
  },
  {
    logo: <Img className="object-contain" src={r4} alt="r4" />,
  },
  {
    logo: <Img className="object-contain" src={r5} alt="r5" />,
  },
  {
    logo: <Img className="object-contain" src={r6} alt="r6" />,
  },
]

export default async function HomePage() {
  const sliderData = await getMainSlider()
  const testimonials = await getTestimonials()

  return (
    <>
      {sliderData && sliderData.length > 0 && (
        <ScaleOut>
          <section className="px-4 tablet:px-[var(--spacing-lg)] py-4">
            <MainSlider items={sliderData} />
          </section>
        </ScaleOut>
      )}
      <ScaleIn>
        <section className={cn(s.island, "flex flex-col items-center")}>
          <h1>Yeni Nesil Toptan Satış Online Katalog ve Sipariş Yönetimi</h1>
          <p>
            Müşterilerinizin online sipariş verebileceği dijital kataloğunuzu oluşturun, ürünlerinizi özelleştirilebilir
            detaylarla sergileyin ve istediğinizde düzenleyin.
          </p>
          <div className={s.teaserC}>
            <Teaser />
          </div>
          <div className={cn(s.stats, "flex flex-col w-full gap-5 tablet:grid grid-cols-3 tablet:gap-0")}>
            <div>
              <h3>2M</h3>
              <p>Ayda ortalama ürün satışı.</p>
            </div>
            <div>
              <h3>
                +40
                <span>%</span>
              </h3>
              <p>Fere Catalog kullanan müşterilerimizin ortalama satış oranı artışı.</p>
            </div>
            <div>
              <h3>
                +50
                <span>%</span>
              </h3>
              <p>İlk 6 ay içindeki ortalama yeni müşteri kazanma oranı.</p>
            </div>
          </div>
          <h2>
            Farklı sektör ve büyüklükte <strong>100+</strong> işletme, toptan satış süreçlerini dijitalleştirmek ve
            verimliliği artırmak için Fere Catalog’u tercih ediyor. Siz de sektörünüzde lider bir konuma yükselmek ve
            işletmenizin satış oranlarını artırmak için bize katılın.
          </h2>
          <div className={s.marqueeC}>
            <Marquee duration={40} repeat={4}>
              <>
                {companies.map((item, i) => {
                  return (
                    <div className={cn(s.item)} key={i}>
                      {item.logo}
                    </div>
                  )
                })}
              </>
            </Marquee>
          </div>
        </section>
      </ScaleIn>
      <HowItWorks />
      <section className={s.specs}>
        <div className="grid-cols-3 tablet:items-start gap-16 tablet:gap-32 hidden tablet:grid">
          <div className={s.cardSpec}>
            <h4>Kolay Ürün Yönetimi</h4>
            <p>
              Fere Catalog sizi sınırlamaz! Ürünlerinizi kendi oluşturduğunuz kategorilerde sergileyip ürün çeşidinize
              uygun özellikler, varyantlar ekleyebilir ve düzenleyebilirsiniz. Müşterileriniz ihtiyacına göre filtreler
              kullanarak ürünlerinize ulaşabilir.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Online Sipariş Oluşturma</h4>
            <p>
              Müşterileriniz, mağazanızın linkine tıklayarak tüm ürünlerinize kolayca erişebilir ve toptan siparişlerini
              online olarak oluşturabilir. Sipariş vermek isteyen müşterileriniz için manuel katalog hazırlamanıza veya
              ürün görseli göndermenize gerek kalmaz.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Ürün Gizliliği ve Koruma</h4>
            <p>
              Ürünlerinizin gizliliğini önemsiyoruz. Ürünleriniz, yalnızca sizin oluşturduğunuz katalogta yer alır, aynı
              sektördeki diğer işletmelerin ürünleriyle bir arada satışa sunulmaz.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Gelişmiş Yetki ve Erişim Kontrolü</h4>
            <p>
              Çalışanlarınız için detaylı erişim seviyeleri belirleyebilirsiniz. Dilerseniz gelir, sipariş, ürün
              yönetimi gibi özel olduğunu düşündüğünüz tüm alanlarda sadece yetkili kişilerin işlem yapabilmesini
              sağlayabilirsiniz.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Çoklu Dil Desteğiyle Global Müşteri Erişimi</h4>
            <p>
              Platformumuz, çoklu dil desteğiyle yurt dışındaki müşterilerinize de hizmet verir ve rahatlıkla sipariş
              verebilmelerini sağlar, böylece uluslararası pazarda büyümenize katkıda bulunur.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Toplam Satış & Gelir Analizi</h4>
            <p>
              Gelir ve satış raporları ile, ürün bazında zamana dayalı performans analizi yapabilir ve müşterilerinizin
              toptan sipariş sıklığını takip ederek satış stratejisi geliştirebilirsiniz.
            </p>
          </div>
        </div>
        <div>
          <Accordion type="multiple" className="block tablet:hidden">
            <AccordionItem className="border-b border-text-foreground" value="item-1">
              <AccordionTrigger className="text-[var(--quarterdeck)] ">
                <h4>Kolay Ürün Yönetimi</h4>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Fere Catalog sizi sınırlamaz! Ürünlerinizi kendi oluşturduğunuz kategorilerde sergileyip ürün
                  çeşidinize uygun özellikler, varyantlar ekleyebilir ve düzenleyebilirsiniz. Müşterileriniz ihtiyacına
                  göre filtreler kullanarak ürünlerinize ulaşabilir.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-text-foreground" value="item-2">
              <AccordionTrigger className="text-[var(--quarterdeck)]">
                <h4>Online Sipariş Oluşturma</h4>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Müşterileriniz, mağazanızın linkine tıklayarak tüm ürünlerinize kolayca erişebilir ve toptan
                  siparişlerini online olarak oluşturabilir. Sipariş vermek isteyen müşterileriniz için manuel katalog
                  hazırlamanıza veya ürün görseli göndermenize gerek kalmaz.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-text-foreground" value="item-3">
              <AccordionTrigger className="text-[var(--quarterdeck)]">
                <h4>Ürün Gizliliği ve Koruma</h4>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Ürünlerinizin gizliliğini önemsiyoruz. Ürünleriniz, yalnızca sizin oluşturduğunuz katalogta yer alır,
                  aynı sektördeki diğer işletmelerin ürünleriyle bir arada satışa sunulmaz.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-text-foreground" value="item-4">
              <AccordionTrigger className="text-[var(--quarterdeck)]">
                <h4>Gelişmiş Yetki ve Erişim Kontrolü</h4>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Çalışanlarınız için detaylı erişim seviyeleri belirleyebilirsiniz. Dilerseniz gelir, sipariş, ürün
                  yönetimi gibi özel olduğunu düşündüğünüz tüm alanlarda sadece yetkili kişilerin işlem yapabilmesini
                  sağlayabilirsiniz.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-text-foreground" value="item-5">
              <AccordionTrigger className="text-[var(--quarterdeck)]">
                <h4>Çoklu Dil Desteğiyle Global Müşteri Erişimi</h4>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Platformumuz, çoklu dil desteğiyle yurt dışındaki müşterilerinize de hizmet verir ve rahatlıkla
                  sipariş verebilmelerini sağlar, böylece uluslararası pazarda büyümenize katkıda bulunur.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-text-foreground" value="item-6">
              <AccordionTrigger className="text-[var(--quarterdeck)]">
                <h4>Toplam Satış & Gelir Analizi</h4>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Gelir ve satış raporları ile, ürün bazında zamana dayalı performans analizi yapabilir ve
                  müşterilerinizin toptan sipariş sıklığını takip ederek satış stratejisi geliştirebilirsiniz.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <ScaleIn>
        <section className={s.discover}>
          <div className={cn(s.card, "flex flex-col items-center gap-10 tablet:grid grid-cols-2")}>
            <div className={cn(s.text, "flex flex-col items-center justify-center tablet:items-start")}>
              <h4>İşletmenize Özel Paketlerimizi Keşfedin!</h4>
              <p>
                Her işletmeye özel olarak hazırlanmış paketlerimiz arasından ihtiyacınıza en uygun olanı seçebilir ve 1
                ay boyunca ücretsiz deneyebilirsiniz.
              </p>
              <Button
                className="cursor-pointer py-3 px-16 border-[1px] border-quarterdeck bg-quarterdeck text-white rounded-full hover:bg-white hover:text-quarterdeck transition-all duration-300"
                asChild
              >
                <Link href="/fiyatlandirma">Paketleri İncele</Link>
              </Button>
            </div>
            <div className={s.imgC}>
              <Img alt="Employee on phone" className="object-cover" src={employee} />
            </div>
          </div>
        </section>
      </ScaleIn>
      <section className={s.testimonials}>
        <h3>
          Müşterilerimizin <br /> Görüşleri
        </h3>
        <div className={cn(s.sliderC, "flex flex-col items-center")}>
          <EmblaCarousel
            slideSpacing={30}
            nextButton={<div className={cn(s.btn, s.next)}>next</div>}
            prevButton={<div className={cn(s.btn, s.prev)}>prev</div>}
            btnsClassName={s.navigation}
          >
            {testimonials.map((item) => {
              return (
                <div className={s.cardC} key={item.id}>
                  <CardTestimonial name={item.name} company={item.company} comment={item.comment} />
                </div>
              )
            })}
          </EmblaCarousel>
        </div>
      </section>
    </>
  )
}
