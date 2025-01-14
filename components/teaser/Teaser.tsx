"use client"

import s from "./teaser.module.scss"

import cn from "clsx"
import { useEffect, useRef } from "react"

import { IconPlay } from "@/components/icons"
import { Video } from "@/components/utility/video"
import { useModalStore } from "@/lib/store/modal"

export default function Teaser() {
  const teaserRef = useRef<HTMLVideoElement>(null)
  const modalStore = useModalStore()

  function handleShowcase() {
    modalStore.setContent(
      <div className={cn(s.modalContent, "w-full h-full flex items-center justify-center")}>
        <div className={s.videoC}>
          <Video primaryVideoUrl="https://cms.ferecatalog.com/assets/video/ferecatalog.mp4#t=0.01" controls autoPlay />
        </div>
      </div>
    )
    modalStore.setIsOpen(true)
  }

  useEffect(() => {
    if (modalStore.isOpen) {
      teaserRef.current?.pause()
    } else {
      teaserRef.current?.play()
    }
  }, [modalStore])

  return (
    <div className={s.teaser}>
      <Video
        primaryVideoUrl="https://cms.ferecatalog.com/assets/video/teaser.mp4"
        autoPlay
        loop
        playsInline
        muted
        ref={teaserRef}
      />
      <div className={cn(s.play, "flex items-center justify-center cursor-pointer")} onClick={handleShowcase}>
        <div className={s.iconC}>
          <IconPlay />
        </div>
      </div>
    </div>
  )
}
