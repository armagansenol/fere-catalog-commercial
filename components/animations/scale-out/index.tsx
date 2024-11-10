"use client"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import React, { useRef } from "react"
import { useWindowSize } from "usehooks-ts"

interface ScaleOutProps {
  children: React.ReactNode
}

export default function ScaleOut({ children }: ScaleOutProps) {
  const windowSize = useWindowSize()
  const scaleOutRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (ScrollTrigger.isTouch || !scaleOutRef.current) {
        return
      }

      const scaleOut = scaleOutRef.current

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
        trigger: scaleOut,
        start: () => `bottom top+=${scaleOut.getBoundingClientRect().height + scaleOut.getBoundingClientRect().top}px`,
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      })
    },
    {
      dependencies: [windowSize.width],
      revertOnUpdate: true,
    }
  )

  return (
    <div ref={scaleOutRef} className="scale-out">
      {children}
    </div>
  )
}
