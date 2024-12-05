import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { ContactForm } from "@/components/contact-form"
import { Img } from "@/components/utility/img"
import { getSupportDetail } from "@/services/support-detail"
import Navigation from "./components/navigation"
import SupportFaq from "./components/support-faq"

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const data = await getSupportDetail({ url: slug as string, lang: "tr" })
  console.log("data", data)

  return (
    <div className="pb-40 pt-10 px-[var(--spacing-lg)] space-y-12">
      <div className="grid grid-cols-12">
        <nav
          className="col-span-4 flex items-center mb-auto space-x-1 text-14 font-albert-sans tracking-tighter"
          aria-label="Breadcrumb"
        >
          <Link href="/destek" className="hover:text-foreground transition-colors">
            Destek
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-muted-foreground">{data.page.title}</span>
        </nav>
        <div className="col-span-8 space-y-4">
          <h1 className="text-30 font-albert-sans font-normal tracking-tighter">{data.page.title}</h1>
          <p className="text-20 font-mukta font-light max-w-4xl">{data.page.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <nav className="col-span-4 space-x-1 text-14 font-albert-sans text-muted-foreground">
          <Navigation items={data.tableOfContent} />
        </nav>
        <div className="col-span-8 space-y-4">
          <div className="h-98">
            <Img
              src={data.page.image.src}
              alt={data.page.image.alt}
              className="object-cover"
              height={1000}
              width={1000}
            />
          </div>
          <div className="py-10">
            <SupportFaq title={data.page.title} items={data.questions} />
          </div>
        </div>
      </div>
      <section className="grid grid-cols-12 gap-20 py-16">
        <div className="col-span-6 flex flex-col space-y-8">
          <p className="indent-16 font-albert-sans text-20 font-normal leading-tight">
            Aradığınız soruyu bulamadınız mı? Sorunuzu bize iletmek için aşağıdaki formu doldurun, en kısa sürede size
            geri dönüş yapacağız.
          </p>
          <div className="max-w-lg">
            <ContactForm />
          </div>
        </div>
        <div className="col-span-6">
          <div>
            <Img src="/img/support-form.jpg" alt="Sample" height={1000} width={1000} />
          </div>
        </div>
      </section>
    </div>
  )
}
