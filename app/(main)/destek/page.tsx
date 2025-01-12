"use client"

import { useQuery } from "@tanstack/react-query"
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
import { IconLoading } from "@/components/icons"

export default function Page() {
  const { data: cards } = useQuery<SupportArticle[], Error>({
    queryKey: ["cards"],
    queryFn: () => getSupportCards(),
  })

  const [searchResults, setSearchResults] = useState<FAQItem[] | null>(null)
  const { searchArticles, isSearching } = useSearchSupport()

  const handleSearch = async (query: string) => {
    if (!query) {
      setSearchResults([])
    }
    const results = await searchArticles(query, "tr")
    setSearchResults(results)
  }

  return (
    <>
      <section className="flex flex-col tablet:flex-row items-stretch tablet:items-end justify-between mb-0 tablet:mb-8 space-y-10 px-4 tablet:px-[var(--spacing-lg)] py-4 tablet:py-8">
        <div>
          <h1 className="text-40 font-albert-sans font-normal text-center tablet:text-left">Destek</h1>
          <p className="text-20 font-mukta font-light text-center tablet:text-left">Size nasıl yardımcı olabiliriz?</p>
        </div>
        <Searchbar onSearch={handleSearch} />
      </section>
      <section className="px-4 tablet:px-[var(--spacing-lg)] pb-10 tablet:pb-20">
        {(isSearching || !cards) && (
          <>
            {isSearching && (
              <div className="w-full min-h-[500px] flex items-center justify-center">
                <div>
                  <IconLoading />
                </div>
              </div>
            )}
          </>
        )}
        {Array.isArray(searchResults) ? (
          <>
            {searchResults.length === 0 ? (
              <div className="w-full min-h-[500px] flex items-center justify-center">
                <div className="font-mukta text-2xl">SONUÇ BULUNAMADI</div>
              </div>
            ) : (
              <Accordion type="multiple">
                {searchResults.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-16 font-albert-sans font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-14 tablet:text-16 font-mukta font-normal leading-snug p-4 tablet:p-8">
                      <div dangerouslySetInnerHTML={{ __html: item.reply }}></div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </>
        ) : (
          <>
            {Array.isArray(cards) && cards.length > 0 && (
              <div className="flex flex-col tablet:grid lg:grid-cols-3 pb-16 tablet:pb-16 gap-16 tablet:gap-x-5 tablet:gap-y-24 mt-5">
                {cards.map((item) => (
                  <Link href={`/${routes.tr.support.path}/${item.url}`} key={item.id}>
                    <Card className="w-full h-full flex flex-col items-center tablet:items-start justify-start">
                      <CardHeader className="p-0 h-img-sm w-full rounded-lg overflow-hidden">
                        <Img
                          src={item.image.src}
                          height={500}
                          width={500}
                          alt={item.image.alt}
                          className="object-cover"
                        />
                      </CardHeader>
                      <CardContent className="mt-4 mb-8 space-y-2 p-0">
                        <h2 className="text-30 font-albert-sans font-normal text-center tablet:text-left tracking-tighter">
                          {item.title}
                        </h2>
                        <p className="text-16 font-mukta font-light text-center tablet:text-left">{item.description}</p>
                      </CardContent>
                      <CardFooter className="p-0 w-2/4 tablet:w-2/4 mt-auto">
                        <Button className="w-full cursor-pointer py-3 px-8 border-[1px] border-black bg-white text-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
                          Tümünü Gör
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  )
}
