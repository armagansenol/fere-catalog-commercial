"use client"

import { Img } from "@/components/utility/img"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export interface CardHowItWorksProps {
  item: {
    title: string
    description: string
    image: {
      src: string
      alt: string
    }
  }
  index: number
}

export default function CardHowItWorks({ item, index }: CardHowItWorksProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (index === 0) {
        return
      }

      const tl = gsap.timeline({ paused: true })

      tl.to(".gsap-index", {
        backgroundColor: "#166EA2",
        color: "white",
        duration: 0.5,
      }).from(".gsap-content", {
        opacity: 0,
        duration: 0.5,
        delay: -0.5,
      })

      ScrollTrigger.create({
        animation: tl,
        trigger: ref.current,
        markers: true,
        start: "top bottom-=10%",
        toggleActions: "play reverse play reverse",
      })
    },
    {
      scope: ref,
    }
  )

  return (
    <div
      className="flex flex-col tablet:flex-row items-center tablet:items-start justify-center gap-5 tablet:gap-10"
      ref={ref}
    >
      <div
        className={cn(
          `h-12 w-12 tablet:h-14 tablet:w-14 -mt-2 flex items-center justify-center rounded-full text-24 font-albert-sans font-medium flex-shrink-0 border-2 bg-transparent border-quarterdeck
          ${index !== 0 ? "gsap-index bg-quarterdeck" : ""}
          `
        )}
      >
        {index + 1}
      </div>
      <div className="gsap-content flex flex-col-reverse items-center tablet:flex-row tablet:items-start justify-center tablet:grid grid-cols-12 gap-5 tablet:gap-12">
        <div className="col-span-6 text-center tablet:text-left tablet:max-w-lg">
          <h3 className="font-albert-sans font-normal text-24 tablet:text-30 mb-4 tracking-tighter leading-tight">
            {item.title}
          </h3>
          <p className="font-mukta font-thin text-18 tablet:text-20 tablet:max-w-lg">{item.description}</p>
        </div>
        <div className="col-span-6 rounded-lg overflow-hidden h-img-md">
          <Img src={item.image.src} alt={item.image.alt} className="object-cover" height={1000} width={1000} />
        </div>
      </div>
    </div>
  )
}
