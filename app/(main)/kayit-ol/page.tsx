import s from "./register.module.scss"

import cx from "clsx"

import { Cart } from "./components/cart"
import { Steps } from "./components/steps"

export default function Page() {
  return (
    <div className={cx(s.register, "grid grid-cols-12 gap-8 px-[var(--spacing-lg)] pb-20")}>
      <div className="col-span-8 flex flex-col items-center">
        <Steps />
      </div>
      <div className="col-span-4">
        <Cart />
      </div>
    </div>
  )
}
