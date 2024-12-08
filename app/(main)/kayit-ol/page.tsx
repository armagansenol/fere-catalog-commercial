import s from "./register.module.scss"

import cx from "clsx"
import { redirect } from "next/navigation"

import { getPlanCartData } from "@/services/planCartData"
import { Cart } from "./components/cart"
import { Steps } from "./components/steps"

export default async function Page({ searchParams }: { searchParams: { selectedPlan: string } }) {
  const selectedPlan = searchParams.selectedPlan

  if (!selectedPlan) {
    redirect("/fiyatlandirma")
  }

  const planCartData = await getPlanCartData(selectedPlan, "tr")

  return (
    <div className={cx(s.register, "grid grid-cols-12 gap-8 px-[var(--spacing-lg)] pb-20")}>
      <div className="col-span-8 flex flex-col items-center">
        <Steps />
      </div>
      <div className="col-span-4">
        <Cart {...planCartData} />
      </div>
    </div>
  )
}
