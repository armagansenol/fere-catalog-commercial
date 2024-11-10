import s from "./home.module.scss"

import cn from "clsx"

import { Marquee } from "@/components/animations/marquee"
import { CardTestimonial } from "@/components/card-testimonial"
import { HowItWorks } from "@/components/how-it-works"
import Logo from "@/components/icons/logo"
import { MainSlider } from "@/components/main-slider"
import { Button } from "@/components/ui/button"
import { EmblaCarousel } from "@/components/utility/embla-carousel"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import ScaleOut from "@/components/scale-out"
import { Teaser } from "@/components/teaser"

import employee from "@/public/img/employee.jpg"

const companies = [
  {
    logo: <Logo />,
  },
  {
    logo: <Logo />,
  },
  {
    logo: <Logo />,
  },
  {
    logo: <Logo />,
  },
  {
    logo: <Logo />,
  },
]

const testimonials = [
  {
    text: "Fere, işimizi kolaylaştırmada gerçekten bir kurtarıcı oldu. Müşteri odaklı tasarımı ve kullanımıyla, ürünlerimizi sergilemek ve müşterilerimize sunduğumuz hizmetleri göstermek artık çok daha etkili ve çekici.",
    author: "Rene Schwab",
    company: "Şirket Adı",
  },
  {
    text: "Fere, işimizi kolaylaştırmada gerçekten bir kurtarıcı oldu. Müşteri odaklı tasarımı ve kullanımıyla, ürünlerimizi sergilemek ve müşterilerimize sunduğumuz hizmetleri göstermek artık çok daha etkili ve çekici.",
    author: "Rene Schwab",
    company: "Şirket Adı",
  },
  {
    text: "Fere, işimizi kolaylaştırmada gerçekten bir kurtarıcı oldu. Müşteri odaklı tasarımı ve kullanımıyla, ürünlerimizi sergilemek ve müşterilerimize sunduğumuz hizmetleri göstermek artık çok daha etkili ve çekici.",
    author: "Rene Schwab",
    company: "Şirket Adı",
  },
  {
    text: "Fere, işimizi kolaylaştırmada gerçekten bir kurtarıcı oldu. Müşteri odaklı tasarımı ve kullanımıyla, ürünlerimizi sergilemek ve müşterilerimize sunduğumuz hizmetleri göstermek artık çok daha etkili ve çekici.",
    author: "Rene Schwab",
    company: "Şirket Adı",
  },
]

export default function HomePage() {
  return (
    <>
      <div className="scale-out">
        <MainSlider />
      </div>
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
            <h3>2K</h3>
            <p>Ayda ortalama ürün satışı.</p>
          </div>
          <div>
            <h3>
              +40
              <span>%</span>
            </h3>
            <p>Fere Katalog kullanan müşterilerimizin satış oranı artışı.</p>
          </div>
          <div>
            <h3>
              +50
              <span>%</span>
            </h3>
            <p>İlk 6 ay içindeki yeni müşteri kazanma oranı.</p>
          </div>
        </div>
        <h2>
          Farklı sektör ve büyüklükte <strong>100+</strong> işletme, toptan satış süreçlerini dijitalleştirmek ve
          verimliliği artırmak için Fere Catalog’u tercih ediyor. Siz de sektörünüzde lider bir konuma yükselmek ve
          işletmenizin satış oranlarını artırmak için bize katılın.
        </h2>
        <div className={s.marqueeC}>
          <Marquee duration={40} repeat={2}>
            <>
              {companies.map((item, i) => {
                return (
                  <div className={s.item} key={i}>
                    {item.logo}
                  </div>
                )
              })}
            </>
          </Marquee>
        </div>
      </section>
      <HowItWorks />
      <section className={s.specs}>
        <div className={cn(s.cards, "flex flex-col items-center tablet:grid grid-cols-3 tablet:items-start")}>
          <div className={s.cardSpec}>
            <h4>Kolay Ürün Yönetimi</h4>
            <p>
              Tüm Catalog içi işlemleri! Ürünlerinizi hangi değişikliğinize hangisinde sergilemiş olun değişimin sağını
              solüklü verenlere etkileyebilir ve fireler kullanarak ürünlerinizi değişikli.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Online Sipariş Oluşturma</h4>
            <p>
              Müşterileriniz, mağazanızın linkine tıklayarak tüm ürünlerinize kolayca erişebilir ve hızlıca
              siparişlerini online olarak takip edebilir. Size özel mağaza linkiniz ile müşterileriniz katalog hem
              tanıtımı veya ürün güncel görüntülenmesi gerek kalması.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Ürün Gizliliği ve Koruma</h4>
            <p>
              Ürünlerinizin gizliliğini beraberynize. Ürünleriniz, yetkiniz sizin doğruluğunuz katalogta yer alır, aynı
              şekilde değer görünmesi in üstünde bir şey değiştirilmez.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Gelişmiş Yetki ve Erişim Kontrolü</h4>
            <p>
              Çalışanlarınız için detaylı erişim yönetimi belirlenebilirsiniz. Dilediğiniz gibi, istemiş ürün yönetimi
              gibi özel işlemlerin doğruluğunuz tüm alanlarla sadece yetki işlemleri işlem yapılmasını
              sağlayabilirsiniz.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Çoklu Dil Desteğiyle Global Müşteri Erişimi</h4>
            <p>
              Platformumuz, çoklu dil desteğiyle yurt dışındaki müşterilerinize de hitabet etme ve etkiletişim geçme
              seçeneklerini sağlar. Böylece kullanıcısı paranızı büyütmeniz farkına kalırsın.
            </p>
          </div>
          <div className={s.cardSpec}>
            <h4>Toplam Satış & Gelir Analizi</h4>
            <p>
              Satış ve satış raporları ile ürün bazında zamana bağlı gelişiminizi analizi yapabilir ve müşterilerinizin
              toplam sipariş takibi için sadece tek bir yerden görüntüleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className={s.discover}>
        <div className={cn(s.card, "flex flex-col items-center gap-10 tablet:grid grid-cols-2")}>
          <div className={cn(s.text, "flex flex-col items-center justify-center tablet:items-start")}>
            <h4>İşletmenize Özel Paketlerimizi Keşfedin!</h4>
            <p>
              Her işletmeye özel olarak hazırlanmış paketlerimiz/planlarımız arasından ihtiyacınıza en uygun olanı
              seçebilir ve 1 ay boyunca ücretsiz deneyebilirsiniz.
            </p>
            <Link href="/fiyatlandirma">
              <Button className="px-16" size="lg">
                Paketleri Gör
              </Button>
            </Link>
          </div>
          <div className={s.imgC}>
            <Img alt="Employee on phone" className="object-cover" src={employee} />
          </div>
        </div>
      </section>

      <section className={s.testimonials}>
        <h3>
          Müşterilerimizin <br /> Görüşleri
        </h3>
        <div className={s.sliderC}>
          <EmblaCarousel
            slideSpacing={30}
            nextButton={<div className={cn(s.btn, s.next)}>next</div>}
            prevButton={<div className={cn(s.btn, s.prev)}>prev</div>}
            btnsClassName={s.navigation}
          >
            {testimonials.map((item, i) => {
              return (
                <div className={s.cardC} key={i}>
                  <CardTestimonial {...item} />
                </div>
              )
            })}
          </EmblaCarousel>
        </div>
      </section>
      <ScaleOut />
    </>
  )
}
