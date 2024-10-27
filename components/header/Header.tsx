import s from "./header.module.scss"

import cx from "clsx"

import Logo from "@/components/icons/logo"
import { Link } from "@/components/utility/link"

export default function Header() {
  return (
    <header className={cx(s.header, "flex items-center")}>
      <nav className={cx(s.nav, "flex items-center justify-between flex-1")}>
        <div className={cx(s.navItem, s.logoC)}>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className={cx(s.part, "flex items-center")}>
          <div className={s.navItem}>
            <Link href="/about">Hakkımızda</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/about">Nasıl Çalışır?</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/about">Fiyatlandırma</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/about">Blog</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/about">Destek</Link>
          </div>
        </div>

        <div className={cx(s.part, "flex items-center")}>
          <div className={s.navItem}>
            <Link href="/about">Giriş Yap</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/subscribe">Hemen Üye Ol</Link>
          </div>
          <div className={s.navItem}>
            <Link href="/about">EN</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
