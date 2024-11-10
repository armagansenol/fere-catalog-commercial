"use client"

import s from "./main-slider.module.scss"

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import cx from "clsx"
import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { MediaComponent } from "@/components/utility/media-component"
import { MediaType } from "@/types"

import { default as sample, default as sample4 } from "@/public/img/sample.jpg"
import { default as sample2, default as sample5 } from "@/public/img/sample2.jpg"
import sample3 from "@/public/img/sample3.jpg"

const items = [
  {
    title: <>Lorem ipsum dolor sit amet consectetur. - 1</>,
    description: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis?</>,
    media: {
      type: MediaType.image,
      src: sample,
    },
    duration: 2,
    button: { ui: <>Lorem, ipsum</>, link: "/" },
  },
  {
    title: <>Lorem ipsum dolor sit amet. - 2</>,
    description: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis?</>,
    media: {
      type: MediaType.image,
      src: sample2,
    },
    duration: 6,
    button: { ui: <>Lorem, ipsum</>, link: "/" },
  },
  {
    title: <>Lorem ipsum dolor sit amet consectetur. - 3</>,
    description: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis?</>,
    media: {
      type: MediaType.image,
      src: sample3,
    },
    duration: 1,
    button: { ui: <>Lorem, ipsum</>, link: "/" },
  },
  {
    title: <>Lorem ipsum dolor sit amet consectetur. - 4</>,
    description: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis?</>,
    media: {
      type: MediaType.image,
      src: sample4,
    },
    duration: 5,
    button: { ui: <>Lorem, ipsum</>, link: "/" },
  },
  {
    title: <>Lorem ipsum dolor sit amet consectetur. - 5</>,
    description: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis?</>,
    media: {
      type: MediaType.image,
      src: sample5,
    },
    duration: 8,
    button: { ui: <>Lorem, ipsum</>, link: "/" },
  },
]

export default function MainSlider() {
  const ref = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const tl = useRef(gsap.timeline())

  function timelineSection(index: number) {
    return `part-${index}`
  }

  useGSAP(
    () => {
      items.forEach((item, i) => {
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
              setCurrentSlide((prev) => (prev + 1) % items.length)
            },
          },
          timelineSection(i)
        )
      })
    },
    {
      dependencies: [],
      scope: ref,
    }
  )

  useGSAP(
    () => {
      console.table([
        ["currentSlide", currentSlide],
        ["duration", items[currentSlide].duration],
      ])

      tl.current.play(timelineSection(currentSlide))
    },
    {
      dependencies: [currentSlide],
      scope: ref,
    }
  )

  function mouseEnter() {
    // setHovered(true)
    tl.current.pause()
  }

  function mouseLeave() {
    // setHovered(false)
    tl.current.resume()
  }

  // stop when not intersecting
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      markers: false,
      onUpdate: (self) => {
        if (!self.isActive) {
          // tl.current.revert()
          tl.current.pause()
          return
        }
        tl.current.play()
      },
    })
  })

  return (
    <div className={cx(s.mainSlider, "flex flex-col-reverse tablet:flex-row items-stretch justify-between")} ref={ref}>
      <div className={cx(s.textC, "text-c")}>
        {items.map((item, i) => {
          return (
            <div
              className={cx(s.text, "flex flex-col items-center tablet:items-start", {
                [s.visible]: currentSlide === i,
              })}
              key={i}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Button>{item.button.ui}</Button>
            </div>
          )
        })}
      </div>

      <div className={s.visuals}>
        <div className={s.mediaC} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          {items.map((item, i) => {
            return (
              <div className={cx(s.media, { [s.visible]: currentSlide === i || currentSlide === i + 1 })} key={i}>
                <MediaComponent media={item.media} priority={true} />
              </div>
            )
          })}
        </div>
        <div className={cx(s.miniMapC, "flex flex-col")}>
          <div className={cx(s.miniMap, "flex items-center")}>
            {items.map((item, i) => {
              return (
                <div
                  className={cx(s.media, { [s.visible]: currentSlide === i })}
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                >
                  <MediaComponent media={item.media} priority={true} />
                </div>
              )
            })}
          </div>

          <div className={s.progressBar}>
            <div className={cx(s.bar, "bar")}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
