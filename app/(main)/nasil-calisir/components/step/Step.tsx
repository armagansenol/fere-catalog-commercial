import s from "./step.module.scss"

import cn from "clsx"

import { Img } from "@/components/utility/img"
import { HowToItem } from "@/types"

interface StepProps extends HowToItem {
  length: number
  index: number
}

export default function Step(props: StepProps) {
  return (
    <div className="flex flex-col items-center tablet:items-start justify-center tablet:grid grid-cols-12 gap-4 tablet:gap-8">
      <div className="col-span-1 flex flex-col items-center">
        <div className="h-12 tablet:h-16 w-12 tablet:w-16 -mt-2 flex items-center justify-center rounded-full bg-quarterdeck text-24 font-albert-sans font-medium text-white">
          {props.index + 1}
        </div>
        {/* {index < length - 1 && <div className="hidden tablet:block w-px h-32 bg-blue-600/20" />} */}
      </div>
      <div className="col-span-11 flex flex-col-reverse tablet:flex-row justify-center tablet:grid grid-cols-12 gap-5 tablet:gap-28">
        <div className="col-span-5">
          <h3 className="font-albert-sans font-normal text-24 tablet:text-30 mb-4 text-center tablet:text-left tracking-tighter leading-tight">
            {props.title}
          </h3>
          <p className="font-mukta font-thin text-18 tablet:text-20 max-w-lg text-center tablet:text-left">
            {props.description}
          </p>
        </div>
        <div className={cn(s.imgC, "col-span-7 h-60 tablet:h-96 rounded-lg overflow-hidden")}>
          <Img src={props.image.src} alt={props.image.alt} fill className="object-cover" height={1000} width={1000} />
        </div>
      </div>
    </div>
  )
}
