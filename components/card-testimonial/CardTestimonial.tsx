import s from "./card-testimonial.module.scss"

import cx from "clsx"

export interface CardTestimonialProps {
  text: string
  author: string
  company: string
}

export default function CardTestimonial(props: CardTestimonialProps) {
  return (
    <div className={cx(s.cardTestimonial, "flex flex-col items-start justify-between")}>
      <p>{props.text}</p>
      <div className={s.author}>
        <p>{props.author}</p>
        <small>{props.company}</small>
      </div>
    </div>
  )
}
