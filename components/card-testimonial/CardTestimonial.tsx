import s from "./card-testimonial.module.scss"

import cx from "clsx"

export interface CardTestimonialProps {}

export default function CardTestimonial(props: CardTestimonialProps) {
  return (
    <div className={cx(s.cardTestimonial, "flex flex-col items-start justify-between")}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet sit reprehenderit ut fugiat temporibus
        architecto vitae soluta in totam! Quidem architecto voluptates quis, reprehenderit magni sunt nulla id, dolore
        cumque culpa error, neque omnis. Fugit pariatur voluptate veritatis doloremque.
      </p>
      <div className={s.author}>
        <p>Rene Schwab</p>
        <small>Company Name</small>
      </div>
    </div>
  )
}
