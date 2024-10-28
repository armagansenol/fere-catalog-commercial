import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPlanCard() {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Temel Plan</CardTitle>
        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <span className="text-4xl font-bold">$30</span>
          <span className="text-sm text-muted-foreground">/aylık ücret</span>
        </div>
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
            <span>$0.00</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t">
            <span className="font-medium">Toplam</span>
            <span className="font-medium">$310</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Checkout</Button>
      </CardFooter>
    </Card>
  )
}
