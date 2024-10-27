"use client"
import s from "./footer.module.scss"

import cx from "clsx"

import { Link } from "@/components/utility/link"
import { IconLinkedin } from "@/components/icons/icon-linkedin"
import { IconX } from "@/components/icons/icon-x"
import { IconInstagram } from "@/components/icons/icon-instagram"
import { IconFacebook } from "@/components/icons/icon-facebook"

export default function Footer() {
  console.log("RENDER")

  return (
    <footer className={cx(s.footer, "flex flex-col")}>
      <div className={cx(s.punchC, "flex items-center justify-between")}>
        <div className={s.punch}>
          <h5>Hazırsanız Başlayalım.</h5>
        </div>
        <div>Hemen Üye Ol</div>
      </div>
      <nav className={cx(s.links, "flex")}>
        <div className={s.col}>
          <div className={s.title}>
            <h6>Fere Katalog</h6>
          </div>
          <div className={s.items}>
            <div className={s.navItem}>
              <Link href="/hakkimizda">Hakkımızda</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/nasil-calisir">Nasıl Çalışır?</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/fiyatlandırma">Fiyatlandırma</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/blog">Blog</Link>
            </div>
            <div className={s.navItem}>
              <Link href="/iletisim">İletişim</Link>
            </div>
          </div>
        </div>
        <div className={s.col}>
          <div className={s.title}>
            <h6>Legal</h6>
          </div>
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
          <div className={s.title}>
            <h6>Bizi Takip Edin</h6>
          </div>
          <div className={cx(s.items, s.social)}>
            <div className={s.iconC}>
              <IconFacebook fill={"var(--black)"} />
            </div>
            <div className={s.iconC}>
              <IconInstagram fill={"var(--black)"} />
            </div>
            <div className={s.iconC}>
              <IconLinkedin fill={"var(--black)"} />
            </div>
            <div className={s.iconC}>
              <IconX fill={"var(--black)"} />
            </div>
          </div>
        </div>
      </nav>
      <div className={cx(s.bottom, "flex items-center justify-between")}>
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
