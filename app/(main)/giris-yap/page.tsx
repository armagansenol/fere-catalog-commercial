import s from "./login.module.scss"

import cx from "clsx"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Img } from "@/components/utility/img"
import { X } from "lucide-react"
import Link from "next/link"

import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className={cx(s.login, "grid grid-cols-2 p-6 h-screen")}>
      <Link href="/" className="absolute right-4 top-4" aria-label="Close">
        <X className="h-12 w-12" />
      </Link>
      <div className="rounded-xl overflow-hidden">
        <Img alt="sample" src="/img/sample.jpg" className="object-cover" height={1000} width={1000} />
      </div>
      <div>
        <div className="flex items-center justify-center h-full bg-background">
          <Card className="w-full max-w-md space-y-4">
            <CardHeader className="space-y-2">
              <CardTitle className="text-30 font-albert-sans font-medium">Hoşgeldiniz</CardTitle>
              <CardDescription className="text-20 font-mukta font-light">
                Kullanıcı adınız ve şifrenizle giriş yapabilirsiniz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
              <div className="mt-4 text-center">
                <p className="text-sm">
                  Henüz bir hesabınız yok mu?{" "}
                  <Link href="/register" className="text-primary hover:underline">
                    ÜCRETSİZ DENEMEYE BAŞLA
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
