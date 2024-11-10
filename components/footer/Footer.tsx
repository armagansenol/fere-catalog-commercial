"use client"

import s from "./footer.module.scss"

import cx from "clsx"

import { IconFacebook } from "@/components/icons/icon-facebook"
import { IconInstagram } from "@/components/icons/icon-instagram"
import { IconLinkedin } from "@/components/icons/icon-linkedin"
import { IconX } from "@/components/icons/icon-x"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/utility/link"
import { useFooterReveal } from "@/hooks/use-footer-reveal"

export default function Footer() {
  const { refCallback } = useFooterReveal()

  return (
    <div className={s.revealC} ref={refCallback}>
      <footer className={cx(s.footer, "flex flex-col")}>
        <div className={cx(s.punchC, "flex flex-col tablet:flex-row items-center justify-between")}>
          <h5 className={s.punch}>Hazırsanız Başlayalım.</h5>
          <Link href="/fiyatlandirma">
            <Button className="px-20" variant="default" size="lg">
              Hemen Üye Ol
            </Button>
          </Link>
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
              <div className={s.iconC}>
                <IconFacebook fill="var(--black)" />
              </div>
              <div className={s.iconC}>
                <IconInstagram fill="var(--black)" />
              </div>
              <div className={s.iconC}>
                <IconLinkedin fill="var(--black)" />
              </div>
              <div className={s.iconC}>
                <IconX fill="var(--black)" />
              </div>
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
      <div className={cx(s.overlay, "overlay")}></div>
    </div>
  )
}
