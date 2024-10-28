import s from "./header.module.scss"

import cx from "clsx"

import Logo from "@/components/icons/logo"
import { Link } from "@/components/utility/link"

export default function Header() {
  return (
    <header className={cx(s.header, "flex items-center")}>
      <nav className={cx(s.nav, "flex items-center justify-between flex-1")}>
        <div className={cx(s.navItem, s.logoC, "cursor-pointer")}>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className={cx(s.part, "flex items-center")}>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/about">Hakkımızda</Link>
          </div>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/how-to">Nasıl Çalışır?</Link>
          </div>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/pricing">Fiyatlandırma</Link>
          </div>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/blog">Blog</Link>
          </div>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/support">Destek</Link>
          </div>
        </div>

        <div className={cx(s.part, "flex items-center")}>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/login">Giriş Yap</Link>
          </div>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/pricing">Hemen Üye Ol</Link>
          </div>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <>EN</>
          </div>
        </div>
      </nav>
    </header>
  )
}
