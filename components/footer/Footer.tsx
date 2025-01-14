import s from "./footer.module.scss"

import { cn } from "@/lib/utils"

import { IconFacebook, IconInstagram, IconLinkedin, IconYoutube } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/utility/link"

export default function Footer() {
  return (
    <footer className={cn(s.footer, "flex flex-col")}>
      <div className={cn(s.punchC, "flex flex-col tablet:flex-row items-center justify-between")}>
        <h5 className={s.punch}>Hazırsanız Başlayalım.</h5>
        <Button
          className="cursor-pointer py-4 px-10 lg:px-20 border-[1px] border-quarterdeck bg-quarterdeck text-white rounded-full hover:bg-white hover:text-quarterdeck transition-all duration-300"
          asChild
          size="lg"
        >
          <Link href="/fiyatlandirma">Ücretsiz Denemeye Başla</Link>
        </Button>
      </div>
      <nav className={cn(s.links, "flex flex-col items-center tablet:flex-row tablet:items-start")}>
        <div className={s.col}>
          <h6 className={s.title}>Fere Catalog</h6>
          <div className={s.items}>
            <div className={s.navItem}>
              <Link className="animated-underline-single" href="/hakkimizda">
                Hakkımızda
              </Link>
            </div>
            <div className={s.navItem}>
              <Link className="animated-underline-single" href="/nasil-calisir">
                Nasıl Çalışır?
              </Link>
            </div>
            <div className={s.navItem}>
              <Link className="animated-underline-single" href="/fiyatlandirma">
                Fiyatlandırma
              </Link>
            </div>
            <div className={s.navItem}>
              <Link className="animated-underline-single" href="/destek">
                Destek
              </Link>
            </div>
            {/* <div className={s.navItem}>
              <Link href="/blog">Blog</Link>
            </div> */}
            <div className={s.navItem}>
              <Link className="animated-underline-single" href="/iletisim">
                İletişim
              </Link>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <h6 className={s.title}>Legal</h6>
          <div className={s.items}>
            <div className={s.navItem}>
              <Link className="animated-underline-single" href="/kvkk">
                KVKK
              </Link>
            </div>
            <div className={s.navItem}>
              <Link className="animated-underline-single" href="/gizlilik-politikası">
                Gizlilik Politikası
              </Link>
            </div>
            <div className={s.navItem}>
              <Link className="animated-underline-single" href="/cerez-politikası">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <h6 className={s.title}>Bizi Takip Edin</h6>
          <div className={cn(s.items, s.social)}>
            <Link href="https://www.facebook.com/share/1AQUXPjcfS/?mibextid=LQQJ4d" className={s.iconC}>
              <IconFacebook fill="var(--black)" />
            </Link>
            <Link href="https://www.instagram.com/ferecatalog?igsh=MXUwMGRhYWtueXM2cQ==" className={s.iconC}>
              <IconInstagram fill="var(--black)" />
            </Link>
            <Link href="https://www.linkedin.com/company/fere-catalog/" className={s.iconC}>
              <IconLinkedin fill="var(--black)" />
            </Link>
            <Link href="https://youtube.com/@ferecatalog" className={s.iconC}>
              <IconYoutube fill="var(--black)" />
            </Link>
          </div>
        </div>
      </nav>
      <div className={cn(s.bottom, "flex flex-col gap-5 tablet:flex-row items-center justify-between")}>
        <small>© 2025 FERE CATALOG</small>
        <small>
          Made by{" "}
          <Link className="underline" href="https://bytemywork.com">
            byte my work
          </Link>
        </small>
      </div>
    </footer>
  )
}
