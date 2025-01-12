"use client"

import s from "./main-slider.module.scss"

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { MainSliderProps } from "@/types"

interface Props {
  items: MainSliderProps[]
}

export default function MainSlider(props: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const tl = useRef(gsap.timeline())
  const ref = useRef(null)
  const [paused, setPaused] = useState(false)

  function timelineSection(index: number) {
    return `part-${index}`
  }

  useGSAP(
    () => {
      if (paused) {
        tl.current.revert()
        return
      }

      props.items.forEach((item, i) => {
        tl.current.fromTo(
          ".bar",
          {
            scaleX: 0,
          },
          {
            duration: item.duration,
            ease: "none",
            scaleX: 1,
            onComplete: () => {
              setCurrentSlide((prev) => (prev + 1) % props.items.length)
            },
          },
          timelineSection(i)
        )
      })
    },
    {
      dependencies: [paused],
      scope: ref,
    }
  )

  useGSAP(
    () => {
      if (paused) {
        tl.current.revert()
        return
      }

      tl.current.play(timelineSection(currentSlide))
    },
    {
      dependencies: [currentSlide, paused],
      scope: ref,
    }
  )

  function mouseEnter() {
    tl.current.pause()
  }

  function mouseLeave() {
    tl.current.resume()
  }

  // stop when not intersecting
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      markers: false,
      onUpdate: (self) => {
        if (!self.isActive) {
          tl.current.pause()
          return
        }
        tl.current.play()
      },
    })
  })

  function handleClick(i: number) {
    setCurrentSlide(i)
    setPaused(true)
  }

  return (
    <div
      className={cn(
        s.mainSlider,
        "flex flex-col tablet:flex-row items-center tablet:items-stretch justify-between gap-2"
      )}
      ref={ref}
    >
      <div className={cn(s.textC, "text-c")}>
        {props.items.map((item, i) => {
          return (
            <div
              className={cn(s.text, "flex flex-col items-center tablet:items-start justify-between", {
                [s.visible]: currentSlide === i,
              })}
              key={item.id}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {item.button && (
                <Button
                  className="cursor-pointer py-3 px-10 border-[1px] border-black bg-white text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link href={item.button?.url}>{item.button?.ui}</Link>
                </Button>
              )}
            </div>
          )
        })}
      </div>
      <div className={s.visuals}>
        <div className={s.mediaC} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          {props.items.map((item, i) => {
            return (
              <div className={cn(s.media, { [s.visible]: currentSlide === i || currentSlide === i + 1 })} key={i}>
                <Img
                  className="object-cover"
                  src={item.image.src}
                  alt={item.image.alt}
                  priority={true}
                  width={1000}
                  height={1000}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className={cn(s.miniMapC, "flex flex-col")}>
        <div className={cn(s.miniMap, "flex items-center")}>
          {props.items.map((item, i) => {
            return (
              <div
                className={cn(s.media, "cursor-pointer", { [s.visible]: currentSlide === i })}
                key={i}
                onClick={() => handleClick(i)}
              >
                <Img
                  className="object-cover"
                  src={item.image.src}
                  alt={item.image.alt}
                  priority={true}
                  width={100}
                  height={100}
                  onClick={() => setPaused(true)}
                />
              </div>
            )
          })}
        </div>
        <div className={s.progressBar}>
          <div className={cn(s.bar, "bar")}></div>
        </div>
      </div>
    </div>
  )
}
