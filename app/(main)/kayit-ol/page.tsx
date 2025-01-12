import s from "./register.module.scss"

import cx from "clsx"
import { ChevronLeft } from "lucide-react"
import { redirect } from "next/navigation"

import { RegisterForm } from "@/components/register-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/components/utility/link"
import { getPlanCartData } from "@/services/planCartData"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default async function Page({ searchParams }: { searchParams: { selectedPlan: string } }) {
  const selectedPlan = searchParams.selectedPlan

  if (!selectedPlan) {
    redirect("/fiyatlandirma")
  }

  const planCartData = await getPlanCartData(selectedPlan, "tr")

  return (
    <div
      className={cx(
        s.register,
        "flex flex-col-reverse items-center tablet:items-start tablet:grid grid-cols-12 gap-10 px-4 tablet:px-[var(--spacing-lg)] pb-20"
      )}
    >
      <div className="col-span-8 flex flex-col items-center xl:col-span-9">
        <div className="w-full">
          <Card className="relative">
            <CardHeader className="pt-2">
              <CardTitle className="text-30 font-normal font-albert-sans leading-normal text-center tracking-tighter">
                Kullanıcı Bilgileriniz
              </CardTitle>
              <CardDescription className="text-20 font-extralight font-mukta leading-normal text-center mb-8 tablet:mb-16">
                Lütfen bilgilerinizi eksiksiz giriniz.
              </CardDescription>
            </CardHeader>
            <Button className="absolute bottom-3 left-0" size="md" asChild>
              <Link className="flex gap-2" href="/fiyatlandirma">
                <ChevronLeft className="w-4 h-4" />
                Geri
              </Link>
            </Button>
          </Card>
          <div className="border-t border-black ">
            <div className="max-w-lg py-10 mx-auto">
              <RegisterForm planId={selectedPlan} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 xl:col-span-3">
        <div className="space-y-3">
          <Card className="w-full mx-auto bg-[var(--lynx-white)] rounded-2xl tablet:rounded-3xl sticky top-20">
            <CardHeader className="p-4 tablet:p-6">
              <CardTitle className="text-xl tablet:text-2xl font-bold mb-2">{planCartData.title}</CardTitle>
              <p className="text-xs tablet:text-sm text-muted-foreground mb-2 tablet:mb-5">
                {planCartData.description}
              </p>
              <div className="font-mukta text-left space-x-2">
                <span className="text-3xl tablet:text-5xl font-semibold">{planCartData.price}</span>
                <span className="text-xs tablet:text-sm">{planCartData.priceDetail}</span>
              </div>
            </CardHeader>
            <CardContent className="py-0 px-4 tablet:px-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-sm py-2 tablet:py-4">Detaylar</AccordionTrigger>
                  <AccordionContent className="p-0">
                    <div className="space-y-2 border-t">
                      <div className="flex justify-between items-center py-4 border-b">
                        <span className="font-semibold">Paket</span>
                        <span className="text-xs tablet:text-sm bg-primary text-primary-foreground px-2 py-1 rounded">
                          {planCartData.packageType}
                        </span>
                      </div>
                      <div className="space-y-2 pt-1 tablet:pt-4">
                        <div className="flex justify-between items-center">
                          <span>Ara Toplam</span>
                          <span>{planCartData.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Vergi</span>
                          <span>{planCartData.tax}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter className="pt-2 pb-4 px-4 tablet:p-6">
              <div className="flex justify-between items-center pt-2 tablet:pt-2 border-t w-full text-sm tablet:text-base">
                <span className="font-semibold">Toplam</span>
                <span className="font-semibold">{planCartData.total}</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
