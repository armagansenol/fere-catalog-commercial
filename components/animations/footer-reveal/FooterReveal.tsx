"use client"

import React, { useCallback, useRef, useState } from "react"
import { gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { usePathname } from "next/navigation"

interface FooterRevealProps {
  children: React.ReactNode
}

export default function FooterReveal({ children }: FooterRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number>(0)
  const pathname = usePathname()

  const refCallback = useCallback((node: HTMLDivElement | null) => {
    if (node === null) return
    setHeight(node.getBoundingClientRect().height)
    ref.current = node
  }, [])

  useGSAP(
    () => {
      if (!ref.current) return

      gsap.set(ref.current, {
        yPercent: -50,
      })

      gsap.set(".overlay", {
        opacity: 1,
      })

      gsap.to(ref.current, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "center bottom",
          end: () => `center bottom-=${height}`,
          scrub: true,
        },
      })

      gsap.to(".overlay", {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "center bottom",
          end: () => `center bottom-=${height}`,
          scrub: true,
        },
      })
    },
    { scope: ref, dependencies: [height, pathname], revertOnUpdate: true }
  )

  return (
    <div ref={refCallback} className="relative">
      {children}
      <div className="overlay absolute inset-0 bg-black pointer-events-none"></div>
    </div>
  )
}
