import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlanCartData } from "@/types"

export default function Cart(props: PlanCartData) {
  return (
    <div className="space-y-3">
      <Card className="w-full max-w-sm mx-auto bg-[var(--lynx-white)] rounded-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{props.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="font-mukta text-left">
            <span className="text-4xl font-semibold">{props.price}</span>
            <span className="text-sm text-muted-foreground">{props.priceDetail}</span>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm mx-auto bg-[var(--lynx-white)] rounded-3xl">
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Paket</span>
              <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">YILLIK</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Ara Toplam</span>
              <span>$310</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Vergi</span>
              <span>{props.tax}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="font-medium">Toplam</span>
              <span className="font-medium">{props.total}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Hemen Denemeye Başla</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
