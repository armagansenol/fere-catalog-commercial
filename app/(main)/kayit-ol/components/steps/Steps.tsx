import { ChevronLeft } from "lucide-react"

import { RegisterForm } from "@/components/register-form"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/components/utility/link"

export default function Steps() {
  return (
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
        <Button className="absolute bottom-3 left-0" variant="naked" size="md" padding="never" asChild>
          <Link className="flex gap-2" href="/fiyatlandirma">
            <ChevronLeft className="w-4 h-4" />
            Geri
          </Link>
        </Button>
      </Card>
      <div className="border-t border-black ">
        <div className="max-w-lg py-10 mx-auto">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
