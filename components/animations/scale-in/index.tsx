"use client"

import React, { useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { useWindowSize } from "usehooks-ts"

interface ScaleInProps {
  children: React.ReactNode
}

export function ScaleIn({ children }: ScaleInProps) {
  const windowSize = useWindowSize()
  const scaleInRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (ScrollTrigger.isTouch || !scaleInRef.current) {
        return
      }

      const scaleIn = scaleInRef.current

      const tl = gsap.timeline({
        paused: true,
      })

      tl.from(scaleIn, {
        scale: 0.9,
        marginTop: -20,
      })

      ScrollTrigger.create({
        animation: tl,
        id: `scale-in`,
        trigger: scaleIn,
        start: "top bottom",
        end: "top top",
        scrub: true,
      })
    },
    {
      dependencies: [windowSize.width],
      revertOnUpdate: true,
    }
  )

  return (
    <div ref={scaleInRef} className="scale-in">
      {children}
    </div>
  )
}
