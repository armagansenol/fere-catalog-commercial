"use client"

import s from "./header.module.scss"

import cx from "clsx"
import { useEffect, useState } from "react"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"

import Logo from "@/components/icons/logo"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/utility/link"
import { useLenisStore } from "@/lib/store/lenis"

export default function Header() {
  const { lenis } = useLenisStore()
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    return hamburgerOpen ? lenis?.stop() : lenis?.start()
  }, [hamburgerOpen, lenis])

  useEffect(() => {
    lenis?.on("scroll", () => {
      if (lenis.scroll < window.innerHeight - window.innerHeight / 4) return

      if (lenis.velocity > 0) {
        if (!hidden) {
          setHidden(true)
        }
      } else {
        if (hidden) {
          setHidden(false)
        }
      }
    })
  }, [hidden, lenis])

  return (
    <header
      className={cx(
        s.header,
        {
          [s.hidden]: hidden,
        },
        "w-full flex items-center justify-between"
      )}
    >
      <Link className={cx(s.navItem, s.logoC, "cursor-pointer")} href="/">
        <Logo />
      </Link>
      <div
        className={cx(s.trigger, "block tablet:hidden", { [s.active]: hamburgerOpen })}
        onClick={() => setHamburgerOpen((prev) => !prev)}
      >
        {hamburgerOpen ? <Cross1Icon className="w-full h-full" /> : <HamburgerMenuIcon className="w-full h-full" />}
      </div>

      <nav
        className={cx(
          s.nav,
          "flex flex-col gap-10 tablet:flex-row items-center justify-center tablet:justify-between tablet:gap-80",
          {
            [s.active]: hamburgerOpen,
          }
        )}
      >
        <div className={"flex flex-col tablet:flex-row items-center gap-8"}>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/hakkimizda">Hakkımızda</Link>
          </div>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/nasil-calisir">Nasıl Çalışır?</Link>
          </div>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/fiyatlandirma">Fiyatlandırma</Link>
          </div>
          {/* <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/blog">Blog</Link>
          </div> */}
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/destek">Destek</Link>
          </div>
          <div className={cx(s.navItem, "cursor-pointer")}>
            <Link href="/iletisim">İletişim</Link>
          </div>
        </div>
        <div className={"flex flex-col tablet:flex-row items-center gap-5"}>
          <Button className={cx(s.navItem, "cursor-pointer")} variant="outline" asChild>
            <Link href="/giris-yap">Giriş Yap</Link>
          </Button>
          <Button className={cx(s.navItem, "cursor-pointer")} asChild>
            <Link href="/fiyatlandirma">Hemen Üye Ol</Link>
          </Button>
          {/* <div className={cx(s.navItem, "cursor-pointer")}>
            <>EN</>
          </div> */}
        </div>
      </nav>
    </header>
  )
}
