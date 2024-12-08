"use client"

import s from "./header.module.scss"

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import cx from "clsx"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import Logo from "@/components/icons/logo"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/utility/link"
import { useLenisStore } from "@/lib/store/lenis"
import Lenis from "lenis"

export default function Header() {
  const { lenis } = useLenisStore()
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    return hamburgerOpen ? lenis?.stop() : lenis?.start()
  }, [hamburgerOpen, lenis])

  useEffect(() => {
    const handleEvents = (e: Lenis) => {
      if (lenis?.direction === 1 && e.actualScroll > window.innerHeight / 2) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }

    lenis?.on("scroll", handleEvents)

    return () => lenis?.off("scroll", handleEvents)
  }, [lenis])

  useEffect(() => {
    setHamburgerOpen(false)
  }, [pathname])

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
      <nav
        className={cx(
          s.nav,
          "flex flex-col gap-10 tablet:flex-row items-center justify-center tablet:justify-center tablet:gap-40",
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
          <Button className={cx(s.navItem, "cursor-pointer")} variant="inverted" size="sm" asChild>
            <Link href="https://panel.ferecatalog.com">Giriş Yap</Link>
          </Button>
          <Button className={cx(s.navItem, "cursor-pointer")} size="sm" asChild>
            <Link href="/fiyatlandirma">Ücretsiz Denemeye Başla</Link>
          </Button>
          {/* <div className={cx(s.navItem, "cursor-pointer")}>
            <>EN</>
          </div> */}
        </div>
      </nav>
      <div
        className={cx(s.trigger, "block tablet:hidden", { [s.active]: hamburgerOpen })}
        onClick={() => setHamburgerOpen((prev) => !prev)}
      >
        {hamburgerOpen ? <Cross1Icon className="w-full h-full" /> : <HamburgerMenuIcon className="w-full h-full" />}
      </div>
    </header>
  )
}
