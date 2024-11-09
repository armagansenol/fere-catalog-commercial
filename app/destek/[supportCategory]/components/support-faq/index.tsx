import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SupportFaqProps } from "@/types"

export default function SupportFaq(props: SupportFaqProps) {
  const { id, title, items } = props

  return (
    <Card>
      <CardHeader id={`scroll-${id}`}>
        <CardTitle className="text-30 font-albert-sans font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-16 font-albert-sans font-medium">{item.question}</AccordionTrigger>
              <AccordionContent className="text-16 font-mukta font-normal leading-snug">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
