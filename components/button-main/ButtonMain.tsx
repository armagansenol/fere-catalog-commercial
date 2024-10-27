import * as React from "react"
import { Button } from "@/components/utility/button"
import s from "./button-main.module.scss"

export interface ButtonMainProps {}

export default function ButtonMain(props: ButtonMainProps) {
  return <Button className={s.buttonMain}></Button>
}
