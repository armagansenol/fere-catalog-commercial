"use client"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { useWindowSize } from "usehooks-ts"

export default function ScaleOut() {
  const windowSize = useWindowSize()

  useGSAP(
    () => {
      if (ScrollTrigger.isTouch) {
        return
      }

      const scaleOut: HTMLDivElement | null = document.querySelector(".scale-out")

      if (!scaleOut) return

      const tl = gsap.timeline({
        paused: true,
      })

      tl.to(scaleOut, {
        scale: 0.8,
        opacity: 0.5,
        marginBottom: -20,
      })

      ScrollTrigger.create({
        animation: tl,
        id: `scale-out`,
        trigger: document.querySelector(".scale-out"),
        start: `bottom top+=${scaleOut.getBoundingClientRect().height + scaleOut.getBoundingClientRect().top}px`,
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        //   markers: true,
        scrub: true,
      })
    },
    {
      dependencies: [windowSize.width],
      revertOnUpdate: true,
    }
  )

  return null
}
