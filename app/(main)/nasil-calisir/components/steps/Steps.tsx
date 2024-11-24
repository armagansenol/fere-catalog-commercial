import s from "./steps.module.scss"

import cn from "clsx"

import { Img } from "@/components/utility/img"

interface StepsProps {
  index: number
  length: number
  title: string
  description: string
  imageUrl: string
}

export default function Steps({ index, length, title, description, imageUrl }: StepsProps) {
  console.log(length)

  return (
    <div className="flex flex-col items-center gap-8 tablet:gap-14 tablet:flex-row tablet:items-start justify-center">
      <div className="flex flex-col items-center">
        <div className="h-12 tablet:h-16 w-12 tablet:w-16 -mt-2 flex items-center justify-center rounded-full bg-quarterdeck text-24 font-albert-sans font-medium text-white">
          {index + 1}
        </div>
        {/* {index < length - 1 && <div className="hidden tablet:block w-px h-32 bg-blue-600/20" />} */}
      </div>
      <div className="flex flex-col-reverse tablet:flex-row justify-center gap-5 tablet:gap-20">
        <div>
          <h3 className="font-albert-sans font-normal text-24 tablet:text-30 mb-2 text-center tablet:text-left tracking-tighter">
            {title}
          </h3>
          <p className="font-mukta font-thin text-18 tablet:text-20 max-w-lg text-center tablet:text-left">
            {description}
          </p>
        </div>
        <div className={cn(s.imgC, "h-60 tablet:h-96 rounded-lg overflow-hidden")}>
          <Img src={imageUrl} alt={title} fill className="object-cover" height={1000} width={1000} />
        </div>
      </div>
    </div>
  )
}
