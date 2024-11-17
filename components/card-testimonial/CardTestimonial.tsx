import s from "./card-testimonial.module.scss"

import cx from "clsx"

export interface CardTestimonialProps {
  name: string
  comment: string
  company: string
}

export default function CardTestimonial(props: CardTestimonialProps) {
  return (
    <div className={cx(s.cardTestimonial, "flex flex-col items-start justify-between")}>
      <p>{props.comment}</p>
      <div className={s.author}>
        <p>{props.name}</p>
        <small>{props.company}</small>
      </div>
    </div>
  )
}
