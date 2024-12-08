import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { ContactForm } from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Img } from "@/components/utility/img"
import { getSupportDetail } from "@/services/support-detail"
import Navigation from "./components/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const data = await getSupportDetail({ url: slug as string, lang: "tr" })

  return (
    <div className="pb-10 tablet:pb-40 pt-10 px-4 tablet:px-[var(--spacing-lg)] space-y-8">
      <div className="flex flex-col items-center gap-5 tablet:gap-0 tablet:grid grid-cols-12 text-center tablet:text-left">
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
      <div className="flex flex-col tablet:grid grid-cols-12">
        <nav className="hidden tablet:block col-span-4 space-x-1 text-14 font-albert-sans text-muted-foreground">
          <Navigation items={data.tableOfContent} />
        </nav>
        <div className="col-span-8 space-y-4">
          <div className="h-img-md overflow-hidden rounded-lg">
            <Img
              src={data.page.image.src}
              alt={data.page.image.alt}
              className="object-cover"
              height={1000}
              width={1000}
            />
          </div>
          <div className="py-0 tablet:py-10">
            <Card>
              {/* <CardHeader className="p-0 pb-5">
                <CardTitle className="text-30 font-albert-sans font-medium text-center tablet:text-left">
                  {data.page.title}
                </CardTitle>
              </CardHeader> */}
              <CardContent className="p-0">
                <Accordion type="multiple">
                  {data.questions.map((item) => (
                    <AccordionItem
                      className="[&[data-state=open]]:text-quarterdeck [&[data-state=open]>span]:bg-quarterdeck [&[data-state=open]>svg]:text-quarterdeck"
                      key={item.id}
                      value={item.id}
                      id={`scroll-${item.id}`}
                    >
                      <AccordionTrigger className="flex items-center gap-5 text-lg tablet:text-2xl font-albert-sans font-normal">
                        <span className="tablet:flex-shrink-0 tracking-tighter">{item.question}</span>
                        <span className="hidden tablet:block bg-black h-[1px] w-full mt-2"></span>
                      </AccordionTrigger>
                      <AccordionContent className="text-14 tablet:text-16 font-mukta font-normal leading-snug px-4 tablet:px-10 py-5">
                        <div dangerouslySetInnerHTML={{ __html: item.reply }}></div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-stretch tablet:grid grid-cols-12 gap-10 tablet:gap-20 pt-0 tablet:pt-16">
        <div className="col-span-6 flex flex-col space-y-8">
          <p className="tablet:indent-16 font-albert-sans text-20 font-normal leading-tight text-center tablet:text-left">
            Aradığınız soruyu bulamadınız mı? Sorunuzu bize iletmek için aşağıdaki formu doldurun, en kısa sürede size
            geri dönüş yapacağız.
          </p>
          <div className="max-w-lg">
            <ContactForm />
          </div>
        </div>
        <div className="col-span-6">
          <div className="overflow-hidden rounded-lg">
            <Img src="/img/support-form.jpg" alt="Sample" height={1000} width={1000} />
          </div>
        </div>
      </section>
    </div>
  )
}
