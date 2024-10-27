import { Img } from "@/components/utility/img"
import s from "./login.module.scss"

import cx from "clsx"

export default function Page() {
  return (
    <div className={cx(s.login, "grid grid-cols-2 p-16")}>
      <div>
        <Img alt="sample" src="/img/sample.jpg" className="object-cover" height={1000} width={1000} />
      </div>
      <div></div>
    </div>
  )
}
