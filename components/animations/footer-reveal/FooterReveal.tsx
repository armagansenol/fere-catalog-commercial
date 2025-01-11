"use client"

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { useMeasure } from "@uidotdev/usehooks"
import { usePathname } from "next/navigation"
import React, { useEffect, useRef } from "react"

interface FooterRevealProps {
  children: React.ReactNode
}

export default function FooterReveal({ children }: FooterRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [measureRef, { height }] = useMeasure<HTMLDivElement>()
  const pathname = usePathname()

  useEffect(() => {
    if (ref.current) {
      measureRef(ref.current)
    }
  }, [measureRef])

  useGSAP(
    () => {
      const footer = ref.current

      if (!footer) return

      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline().to(".overlay", {
        opacity: 0,
      })

      const getOverlap = () => Math.min(window.innerHeight, height as number)
      const adjustFooterOverlap = () => {
        footer.style.marginTop = -getOverlap() + "px"
      }

      adjustFooterOverlap()

      ScrollTrigger.addEventListener("refresh", adjustFooterOverlap)

      ScrollTrigger.create({
        animation: tl,
        trigger: footer,
        start: () => "top " + (window.innerHeight - getOverlap()),
        end: () => "+=" + getOverlap(),
        pin: true,
        scrub: true,
      })

      return () => {
        ScrollTrigger.removeEventListener("refresh", adjustFooterOverlap)
      }
    },
    { dependencies: [height, pathname], revertOnUpdate: true }
  )

  return (
    <div>
      <div ref={ref} className="relative flex">
        {children}
        <div className="overlay absolute inset-0 bg-black pointer-events-none opacity-100"></div>
      </div>
    </div>
  )
}
