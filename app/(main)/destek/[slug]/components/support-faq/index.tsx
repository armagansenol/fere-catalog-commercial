import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SupportFaqProps } from "@/types"

export default function SupportFaq(props: SupportFaqProps) {
  const { title, items } = props

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-30 font-albert-sans font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          {items.map((item) => (
            <AccordionItem
              className="[&[data-state=open]]:text-quarterdeck [&[data-state=open]>span]:bg-quarterdeck [&[data-state=open]>svg]:text-quarterdeck"
              key={item.id}
              value={item.id}
              id={`scroll-${item.id}`}
            >
              <AccordionTrigger className="flex items-center gap-5 text-2xl font-albert-sans font-normal">
                <span className="flex-shrink-0 tracking-tighter">{item.question}</span>
                <span className="block bg-black h-[1px] w-full mt-2"></span>
              </AccordionTrigger>
              <AccordionContent className="text-16 font-mukta font-normal leading-snug px-10 py-5">
                <div dangerouslySetInnerHTML={{ __html: item.reply }}></div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
