"use client"

import { gsap } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { useCallback, useRef, useState } from "react"

export function useFooterReveal() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number>(0)

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
    { scope: ref, dependencies: [height], revertOnUpdate: true }
  )

  return { refCallback }
}
