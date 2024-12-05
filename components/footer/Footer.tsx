import s from "./footer.module.scss"

import cx from "clsx"

import { IconYoutube } from "@/components/icons"
import { IconFacebook } from "@/components/icons/icon-facebook"
import { IconInstagram } from "@/components/icons/icon-instagram"
import { IconLinkedin } from "@/components/icons/icon-linkedin"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/utility/link"

export default function Footer() {
  return (
    <footer className={cx(s.footer, "flex flex-col")}>
      <div className={cx(s.punchC, "flex flex-col tablet:flex-row items-center justify-between")}>
        <h5 className={s.punch}>Hazırsanız Başlayalım.</h5>
        <Button size="lg" padding="wide" asChild>
          <Link href="/fiyatlandirma">Ücretsiz Denemeye Başla</Link>
        </Button>
      </div>
      <nav className={cx(s.links, "flex flex-col items-center tablet:flex-row tablet:items-start")}>
        <div className={s.col}>
          <h6 className={s.title}>Fere Katalog</h6>
          <div className={s.items}>
            <div className={s.navItem}>
              <Link href="/hakkimizda">Hakkımızda</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/nasil-calisir">Nasıl Çalışır?</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/fiyatlandirma">Fiyatlandırma</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/destek">Destek</Link>
            </div>
            {/* <div className={s.navItem}>
              <Link href="/blog">Blog</Link>
            </div> */}
            <div className={s.navItem}>
              <Link href="/iletisim">İletişim</Link>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <h6 className={s.title}>Legal</h6>
          <div className={s.items}>
            <div className={s.navItem}>
              <Link href="/kvkk">KVKK</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/gizlilik-politikası">Gizlilik Politikası</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/cerez-politikası">Çerez Politikası</Link>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <h6 className={s.title}>Bizi Takip Edin</h6>
          <div className={cx(s.items, s.social)}>
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
      <div className={cx(s.bottom, "flex flex-col gap-5 tablet:flex-row items-center justify-between")}>
        <small>© 2024 FERE CATALOG</small>
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
