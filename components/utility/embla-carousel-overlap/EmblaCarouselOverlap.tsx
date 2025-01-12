"use client"
import s from "./embla.module.scss"

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import React, { ReactNode, useCallback, useEffect, useState } from "react"

import { NextButton, PrevButton } from "./buttons"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  children: ReactNode[]
  nextButton?: React.ReactNode
  options?: EmblaOptionsType
  scrollTo?: number | null
  prevButton?: React.ReactNode
  slideSpacing?: number
  btnsClassName?: string
}

const EmblaCarouselOverlap = (props: Props) => {
  const { children, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  // const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (props.scrollTo === null || props.scrollTo === undefined) return

    scrollTo(props.scrollTo)
  }, [props.scrollTo, scrollTo])

  // const onInit = useCallback((emblaApi: EmblaCarouselType) => {
  //   setScrollSnaps(emblaApi.scrollSnapList())
  // }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    // onInit(emblaApi)
    onSelect(emblaApi)
    // emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [
    emblaApi,
    //  onInit,
    onSelect,
  ])

  return (
    <div
      className={s.embla}
      style={
        {
          "--slide-spacing": `${props.slideSpacing}px`,
        } as React.CSSProperties
      }
    >
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          {children?.map((item, i) => (
            <div className={s.emblaSlide} key={i}>
              <div className={s.emblaSlideContent}>{item}</div>
            </div>
          ))}
        </div>
      </div>

      {props.prevButton && props.nextButton && (
        <div className={props.btnsClassName}>
          <div className={cn(s.emblaButtons, "gsap-slider-btn")}>
            <PrevButton className={s.prev} onClick={scrollPrev} disabled={prevBtnDisabled}>
              <ArrowLeft className="w-full h-full" />
            </PrevButton>
          </div>
          <div className={cn(s.emblaButtons, "gsap-slider-btn")}>
            <NextButton className={s.next} onClick={scrollNext} disabled={nextBtnDisabled}>
              <ArrowRight className="w-full h-full" />
            </NextButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmblaCarouselOverlap
