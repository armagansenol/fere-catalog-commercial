"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Step = {
  id: number
  name: string
}

type ProgressProps = {
  steps: Step[]
}

export default function Progress({ steps }: ProgressProps) {
  const [currentStep, setCurrentStep] = useState(steps[1].id)

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Kullanıcı Bilgileriniz</CardTitle>
        <CardDescription className="text-center">Lütfen bilgilerinizi eksiksiz giriniz.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <div className="relative">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`, transition: "400ms all ease" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
              ></div>
            </div>
            <div className="flex justify-between">
              {steps.map((step) => (
                <div key={step.id} className="text-center">
                  <div
                    className={`w-6 h-6 mx-auto rounded-full text-sm flex items-center justify-center ${
                      step.id <= currentStep ? "bg-primary text-primary-foreground" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step.id}
                  </div>
                  <div className="text-xs mt-2">{step.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex">
          <Button
            onClick={() => setCurrentStep((prev) => Math.max(steps[0].id, prev - 1))}
            disabled={currentStep === steps[0].id}
          >
            Previous
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
