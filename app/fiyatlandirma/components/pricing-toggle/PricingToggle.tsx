"use client"

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
    <div className="flex flex-col items-center mb-8">
      <Toggle pressed={isYearly} onPressedChange={setIsYearly} className="flex bg-gray-200 rounded-full mb-8 p-1">
        <span className={`px-4 py-2 rounded-full ${isYearly ? "" : "bg-primary text-primary-foreground"}`}>Aylık</span>
        <span className={`px-4 py-2 rounded-full ${isYearly ? "bg-primary text-primary-foreground" : ""}`}>Yıllık</span>
      </Toggle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
        {plans.map((plan, index) => (
          <Card key={index} className={`${plan.popular ? "border-primary" : ""} relative`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-bl">
                En Çok Tercih Edilen
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</p>
              <p className="text-sm text-muted-foreground">{isYearly ? "yıllık ücret" : "aylık ücret"}</p>
            </CardContent>
            <CardFooter>
              <Link className="w-full" href="/kayit-ol">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
