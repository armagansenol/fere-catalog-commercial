"use client"

import s from "./pricing-toggle.module.scss"

import cn from "clsx"
import { useState } from "react"

import { Toggle } from "@/components/ui/toggle"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/utility/link"

type Plan = {
  name: string
  monthlyPrice: number
  yearlyPrice: number
  description: string
  popular?: boolean
  features: Record<string, string>
}

type PricingToggleProps = {
  plans: Plan[]
}

export default function PricingToggle({ plans }: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false)

  if (!plans || plans.length === 0) {
    return null
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
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={cn(s.planCard, `${plan.popular ? "border-primary" : ""} relative rounded-3xl`, {
              [s.active]: plan.popular,
            })}
          >
            {plan.popular && (
              <div className="absolute -top-2 right-5 bg-[var(--white)] text-[var(--quarterdeck)] text-16 border-[1px] border-[var(--quarterdeck)] border-solid px-4 py-2 text-xs rounded-full rotate-3">
                En Çok Tercih Edilen
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-20 font-albert-sans font-medium mb-3">{plan.name}</CardTitle>
              <CardDescription className="text-16 font-mukta font-thin pr-5 leading-tight">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-50 font-mukta font-normal tracking-tight leading-none">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-14 font-mukta font-thin ml-1 tracking-normal">
                  {isYearly ? "yıllık ücret" : "aylık ücret"}
                </span>
              </p>
            </CardContent>
            <CardFooter>
              <Link className="w-full" href="/kayit-ol">
                <Button variant="ghost" className="w-full">
                  Get Started
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
