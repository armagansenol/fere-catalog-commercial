"use client"

import { useState } from "react"

import { Searchbar } from "@/components/searchbar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"
import { routes } from "@/lib/constants"
import { useSearchSupport } from "@/services/support"
import { getSupportCards } from "@/services/supportCards"
import { FAQItem, SupportArticle } from "@/types"
import { useQuery } from "@tanstack/react-query"

// type SupportCategory = {
//   id: number
//   title: string
//   description: string
//   imageSrc: string
//   url: string
// }

// const supportCategories: SupportCategory[] = [
//   {
//     id: 1,
//     title: "Üyelik ve Abonelik",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quaerat delectus error repellendus ipsam tempore fugit explicabo quibusdam expedita ut?",
//     imageSrc: "/img/sample.jpg",
//     url: "uyelik-ve-abonelik",
//   },
//   {
//     id: 2,
//     title: "Katalog Oluşturma",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quaerat delectus error repellendus ipsam tempore fugit explicabo quibusdam expedita ut?",
//     imageSrc: "/img/sample.jpg",
//     url: "uyelik-ve-abonelik",
//   },
//   {
//     id: 3,
//     title: "Ödeme ve İptal",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quaerat delectus error repellendus ipsam tempore fugit explicabo quibusdam expedita ut?",
//     imageSrc: "/img/sample.jpg",
//     url: "uyelik-ve-abonelik",
//   },
// ]

export default function SupportPage() {
  const { data: cards } = useQuery<SupportArticle[], Error>({
    queryKey: ["cards"],
    queryFn: () => getSupportCards(),
  })

  const [searchResults, setSearchResults] = useState<FAQItem[]>([])
  const { searchArticles, isSearching } = useSearchSupport()

  console.log("search results", searchResults)

  const handleSearch = async (query: string) => {
    const results = await searchArticles(query)
    setSearchResults(results)
  }

  return (
    <>
      <section className="flex flex-col tablet:flex-row items-stretch tablet:items-end justify-between mb-8 space-y-10 px-4 tablet:px-[var(--spacing-lg)] py-4 tablet:py-8">
        <div>
          <h1 className="text-40 font-albert-sans font-normal text-center tablet:text-left">Destek</h1>
          <p className="text-20 font-mukta font-light text-center tablet:text-left">Size nasıl yardımcı olabiliriz?</p>
        </div>
        <Searchbar initialQuery="" onSearch={handleSearch} />
      </section>
      <section className="px-4 tablet:px-[var(--spacing-lg)]">
        {searchResults && searchResults.length > 0 ? (
          <>
            <Accordion type="multiple">
              {searchResults.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-16 font-albert-sans font-medium">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-16 font-mukta font-normal leading-snug p-8">
                    <div dangerouslySetInnerHTML={{ __html: item.reply }}></div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </>
        ) : (
          <div className="flex flex-col tablet:grid lg:grid-cols-3 pb-16 tablet:pb-32 gap-6 tablet:gap-10">
            {isSearching && searchResults.length === 0 ? (
              <div className="w-full h-full flex items-center justify-center">LOADING</div>
            ) : (
              <>
                {cards &&
                  cards.length > 0 &&
                  cards.map((item) => (
                    <Link href={`/${routes.tr.support.path}/${item.url}`} key={item.id}>
                      <Card className="flex flex-col items-center tablet:items-start">
                        <CardHeader className="p-0 h-64">
                          <Img
                            src={item.image.src}
                            height={500}
                            width={500}
                            alt={item.image.alt}
                            className="object-cover"
                          />
                        </CardHeader>
                        <CardContent className="mt-4 mb-8 space-y-2 p-0">
                          <h2 className="text-30 font-albert-sans font-normal text-center tablet:text-left">
                            {item.title}
                          </h2>
                          <p className="text-16 font-mukta font-light text-center tablet:text-left">
                            {item.description}
                          </p>
                        </CardContent>
                        <CardFooter className="p-0">
                          <Button variant="outline" size="lg">
                            Tümünü Gör
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
              </>
            )}
          </div>
        )}
      </section>
    </>
  )
}
