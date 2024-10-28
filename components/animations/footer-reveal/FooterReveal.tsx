"use client"

import s from "./footer-reveal.module.scss"
import { gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import cx from "clsx"
import { ReactNode, useCallback, useRef, useState } from "react"

type Props = {
  children: ReactNode
}

const FooterReveal = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number>(0)

  const refElement = useCallback((node: HTMLDivElement | null) => {
    if (node === null) return
    setHeight(node.getBoundingClientRect().height)
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
    {
      scope: ref,
      dependencies: [height],
      revertOnUpdate: true,
    }
  )

  return (
    <div
      className={s.revealC}
      ref={(node) => {
        ref.current = node
        refElement(node)
      }}
    >
      {children}
      <div className={cx(s.overlay, "overlay")}></div>
    </div>
  )
}

export default FooterReveal
