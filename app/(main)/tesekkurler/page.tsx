import { CheckCircle } from "lucide-react"

import { IconInstagram } from "@/components/icons/icon-instagram"
import { IconLinkedin } from "@/components/icons/icon-linkedin"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "@/components/utility/link"

export default function ThankYou() {
  return (
    <div className="lg:h-[70vh] flex items-center justify-center p-4 font-mukta">
      <Card className=" w-full px-8 lg:p-8 shadow-none border-none">
        <div className="flex flex-col items-center justify-center space-y-8 lg:space-y-12 text-center">
          <div className="max-w-md flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-[#2B84B3]/10 p-3">
              <CheckCircle className="w-14 h-14 text-[#2B84B3]" />
            </div>
            <h1 className="text-4xl font-normal tracking-tight text-gray-900">Teşekkür Ederiz</h1>
            <p className="text-gray-600 text-md tablet:text-lg max-w-sm font-albert-sans">
              Bilgileriniz kontrol ediliyor. Mağaza hesabınıza giriş için gerekli bilgileri e-posta adresinize
              ileteceğiz.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-10 lg:space-y-20 w-full">
            <div className="flex flex-col items-center space-y-5">
              <h2 className="text-xl font-medium text-gray-900 font-albert-sans">Bizi Takip Edin</h2>
              <div className="flex space-x-5 lg:space-x-10">
                <Link
                  className="w-5 h-5 lg:w-7 lg:h-7 cursor-pointer"
                  href="https://www.instagram.com/ferecatalog/?igsh=MXUwMGRhYWtueXM2cQ%3D%3D"
                >
                  <IconInstagram fill="currentColor" />
                </Link>
                <Link
                  className="w-5 h-5 lg:w-7 lg:h-7 cursor-pointer"
                  href="https://www.linkedin.com/company/fere-catalog/"
                >
                  <IconLinkedin fill="currentColor" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col tablet:flex-row gap-3 tablet:gap-3">
              <Button
                className={
                  "cursor-pointer py-3 px-12 border-[1px] border-quarterdeck text-quarterdeck rounded-full hover:bg-quarterdeck hover:text-white transition-all duration-300"
                }
                asChild
              >
                <Link href="/destek">Destek</Link>
              </Button>
              <Button
                className={
                  "cursor-pointer py-3 px-12 border-[1px] border-quarterdeck bg-quarterdeck text-white rounded-full hover:bg-white hover:text-quarterdeck transition-all duration-300"
                }
                asChild
              >
                <Link href="https://catalog.ferecatalog.com/logoipsum">Demo Mağaza</Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
