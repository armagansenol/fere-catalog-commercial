import s from "./home.module.scss"

import MainSlider from "@/components/main-slider/MainSlider"
import { Marquee } from "@/components/animations/marquee"

import CardTestimonial from "@/components/card-testimonial/CardTestimonial"
import { EmblaCarousel } from "@/components/utility/embla-carousel"
import { Img } from "@/components/utility/img"
import cx from "clsx"

import Logo from "@/components/icons/logo"
import sample from "@/public/img/sample.jpg"

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
    text: (
      <>
        Fere, işimizi kolaylaştırmada gerçekten bir kurtarıcı oldu. Müşteri odaklı tasarımı ve kullanımıyla,
        ürünlerimizi sergilemek ve müşterilerimize sunduğumuz hizmetleri göstermek artık çok daha etkili ve çekici.
      </>
    ),
    author: {
      name: <>Rene Schwab</>,
      company: <>Şirket Adı</>,
    },
  },
  {
    text: (
      <>
        Fere, işimizi kolaylaştırmada gerçekten bir kurtarıcı oldu. Müşteri odaklı tasarımı ve kullanımıyla,
        ürünlerimizi sergilemek ve müşterilerimize sunduğumuz hizmetleri göstermek artık çok daha etkili ve çekici.
      </>
    ),
    author: {
      name: <>Rene Schwab</>,
      company: <>Şirket Adı</>,
    },
  },
  {
    text: (
      <>
        Fere, işimizi kolaylaştırmada gerçekten bir kurtarıcı oldu. Müşteri odaklı tasarımı ve kullanımıyla,
        ürünlerimizi sergilemek ve müşterilerimize sunduğumuz hizmetleri göstermek artık çok daha etkili ve çekici.
      </>
    ),
    author: {
      name: <>Rene Schwab</>,
      company: <>Şirket Adı</>,
    },
  },
  {
    text: (
      <>
        Fere, işimizi kolaylaştırmada gerçekten bir kurtarıcı oldu. Müşteri odaklı tasarımı ve kullanımıyla,
        ürünlerimizi sergilemek ve müşterilerimize sunduğumuz hizmetleri göstermek artık çok daha etkili ve çekici.
      </>
    ),
    author: {
      name: <>Rene Schwab</>,
      company: <>Şirket Adı</>,
    },
  },
  {
    text: (
      <>
        Fere, işimizi kolaylaştırmada gerçekten bir kurtarıcı oldu. Müşteri odaklı tasarımı ve kullanımıyla,
        ürünlerimizi sergilemek ve müşterilerimize sunduğumuz hizmetleri göstermek artık çok daha etkili ve çekici.
      </>
    ),
    author: {
      name: <>Rene Schwab</>,
      company: <>Şirket Adı</>,
    },
  },
]

export default function Home() {
  // const howItWorksRef = useRef(null)

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline()

  //     tl.to(".phases", {
  //       yPercent: -25,
  //     })

  //     ScrollTrigger.create({
  //       animation: tl,
  //       trigger: ".sticky-c",
  //       markers: true,
  //       pin: true,
  //       scrub: true,
  //     })
  //   },
  //   {
  //     scope: howItWorksRef,
  //   }
  // )

  return (
    <>
      <section>
        <MainSlider />
      </section>
      <section className={cx(s.description)}>
        <h1>
          Dijital
          <button className={cx("inline-flex items-center justify-center")}></button> kataloğunuzu oluşturun,
          ürünlerinizi hızla ve etkili bir şekilde sergileyin.
        </h1>
        <div className={cx(s.stats, "grid grid-cols-3")}>
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
          Hem tüketici hem de işletme odaklı kullanıcılar için tasarlanmış olan platformumuz, kesintisiz bir alışveriş
          deneyimi sunar ve işinizin büyümesine katkı sağlar.
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

      <section className={s.howItWorks}>
        <div className={s.intro}>
          <h2>Nasıl Çalışır?</h2>
          <p>
            Adım adım rehberimizle, ürünlerinizi online katalogda nasıl sergileyebileceğinizi ve satışlarınızı nasıl
            artırabileceğinizi öğreneceksiniz.
          </p>
        </div>

        <div className={cx(s.stickyC, "sticky-c", "grid grid-cols-2")}>
          <div className={cx(s.phases, "phases")}>
            <div>
              <h3>Nasıl Çalışır?</h3>
              <p>
                Adım adım rehberimizle, ürünlerinizi online katalogda nasıl sergileyebileceğinizi ve satışlarınızı nasıl
                artırabileceğinizi öğreneceksiniz.
              </p>
            </div>
            <div>
              <h3>Nasıl Çalışır?</h3>
              <p>
                Adım adım rehberimizle, ürünlerinizi online katalogda nasıl sergileyebileceğinizi ve satışlarınızı nasıl
                artırabileceğinizi öğreneceksiniz.
              </p>
            </div>
            <div>
              <h3>Nasıl Çalışır?</h3>
              <p>
                Adım adım rehberimizle, ürünlerinizi online katalogda nasıl sergileyebileceğinizi ve satışlarınızı nasıl
                artırabileceğinizi öğreneceksiniz.
              </p>
            </div>
          </div>
          <div>
            <Img alt="sample" src={sample} className="object-cover" />
          </div>
        </div>
      </section>

      <section className={s.specs}>
        <div className={s.intro}>
          <h2>Lorem ipsum dolor sit amet</h2>
        </div>
        <div className={cx(s.cards, "flex flex-wrap")}>
          <div className={s.cardSpec}>
            <h4>İşletmenize Özel Paketlerimizi Keşfedin!</h4>
            <p>
              Dijital katalog sistemimiz, teknik bilgi gerektirmeden hızlı ve sorunsuz bir şekilde kurulabilir.
              Kullanıcı dostu arayüzü sayesinde, katalog oluşturma ve yönetme işlemleri dakikalar içinde tamamlanır. Bu
              özellik, işletmelerin zaman ve kaynak tasarrufu yapmasını sağlar.
            </p>
            <button>Hemen Üye Ol</button>
          </div>
          <div className={s.cardSpec}>
            <h4>İşletmenize Özel Paketlerimizi Keşfedin!</h4>
            <p>
              Dijital katalog sistemimiz, teknik bilgi gerektirmeden hızlı ve sorunsuz bir şekilde kurulabilir.
              Kullanıcı dostu arayüzü sayesinde, katalog oluşturma ve yönetme işlemleri dakikalar içinde tamamlanır. Bu
              özellik, işletmelerin zaman ve kaynak tasarrufu yapmasını sağlar.
            </p>
            <button>Hemen Üye Ol</button>
          </div>
          <div className={s.cardSpec}>
            <h4>İşletmenize Özel Paketlerimizi Keşfedin!</h4>
            <p>
              Dijital katalog sistemimiz, teknik bilgi gerektirmeden hızlı ve sorunsuz bir şekilde kurulabilir.
              Kullanıcı dostu arayüzü sayesinde, katalog oluşturma ve yönetme işlemleri dakikalar içinde tamamlanır. Bu
              özellik, işletmelerin zaman ve kaynak tasarrufu yapmasını sağlar.
            </p>
            <button>Hemen Üye Ol</button>
          </div>
          <div className={s.cardSpec}>
            <h4>İşletmenize Özel Paketlerimizi Keşfedin!</h4>
            <p>
              Dijital katalog sistemimiz, teknik bilgi gerektirmeden hızlı ve sorunsuz bir şekilde kurulabilir.
              Kullanıcı dostu arayüzü sayesinde, katalog oluşturma ve yönetme işlemleri dakikalar içinde tamamlanır. Bu
              özellik, işletmelerin zaman ve kaynak tasarrufu yapmasını sağlar.
            </p>
            <button>Hemen Üye Ol</button>
          </div>
        </div>
      </section>

      <section className={s.discover}>
        <div className={cx(s.card, "grid grid-cols-2")}>
          <div className={s.text}>
            <h4>İşletmenize Özel Paketlerimizi Keşfedin!</h4>
            <p>İşletmenizi en iyi şekilde desteklemek için özel olarak tasarlanmış çeşitli paketlerimizi keşfedin!</p>
            <button>Hemen Üye Ol</button>
          </div>
          <div className={s.imgC}>
            <Img alt="Sample" className="object-cover" src={sample} />
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
            nextButton={<div className={cx(s.btn, s.next)}>next</div>}
            prevButton={<div className={cx(s.btn, s.prev)}>prev</div>}
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
    </>
  )
}
