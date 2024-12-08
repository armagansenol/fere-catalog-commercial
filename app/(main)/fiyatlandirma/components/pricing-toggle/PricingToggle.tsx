"use client"

import s from "./pricing-toggle.module.scss"

import cn from "clsx"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Toggle } from "@/components/ui/toggle"
import { Plan } from "@/types"

interface Props {
  plans: Plan[]
}

export default function PricingToggle(props: Props) {
  const [isYearly, setIsYearly] = useState(false)
  const router = useRouter()

  const p = useMemo(() => {
    const targetPlanType = isYearly ? "annual" : "monthly"
    return props.plans.filter((item) => item.planType === targetPlanType)
  }, [props.plans, isYearly])

  function handleSelectedPlan(id: number) {
    router.push(`/kayit-ol?selectedPlan=${id.toString()}`)
  }

  return (
    <div className="flex flex-col items-center">
      <Toggle
        pressed={isYearly}
        onPressedChange={setIsYearly}
        className={cn(s.toggle, "flex items-stretch rounded-full mb-10 tablet:mb-20")}
      >
        <span
          className={cn(s.toggleItem, `rounded-full flex items-center justify-center cursor-pointer`, {
            [s.active]: !isYearly,
          })}
        >
          Aylık
        </span>
        <span
          className={cn(s.toggleItem, `rounded-full flex items-center justify-center cursor-pointer`, {
            [s.active]: isYearly,
          })}
        >
          Yıllık
        </span>
      </Toggle>
      <div className="flex flex-col items-stretch tablet:grid grid-cols-1 md:grid-cols-3 gap-8 px-0 tablet:px-32">
        {p.map((plan, index) => (
          <Card
            key={index}
            className={cn(
              s.planCard,
              `${plan.recommended ? "border-primary" : ""} relative rounded-3xl flex flex-col border`,
              {
                [s.active]: plan.recommended,
              }
            )}
          >
            {plan.recommended && (
              <div className="absolute -top-2 right-5 bg-[var(--white)] text-quarterdeck text-20 border-[1px] border-quarterdeck border-solid px-4 py-2 text-xs rounded-full rotate-3">
                En Çok Tercih Edilen
              </div>
            )}
            <CardHeader className="flex-1">
              <CardTitle className="text-30 font-albert-sans font-medium mb-3 text-center pt-5">{plan.title}</CardTitle>
              <CardDescription className="text-18 font-mukta font-thin leading-tight text-center">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-4 mt-auto">
              <p className="text-50 font-mukta font-normal tracking-tight leading-none text-center mb-auto">
                {plan.price}
                <span className="text-14 font-mukta font-thin ml-1 tracking-normal">{plan.priceText}</span>
              </p>
              <Button
                className="w-full"
                variant={plan.recommended ? "inverted" : "bw"}
                onClick={() => handleSelectedPlan(plan.id)}
              >
                Paketi Seç
              </Button>
              {plan.features.length > 0 && (
                <Table className="w-full px-0 tablet:px-32">
                  <TableBody>
                    {plan.features.map((feature, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-16 font-mukta font-thin pr-5 leading-tight py-4 text-center">
                          {feature}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.recommended ? "inverted" : "bw"}
                onClick={() => handleSelectedPlan(plan.id)}
              >
                Paketi Seç
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
