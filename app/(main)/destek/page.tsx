import { Searchbar } from "@/components/searchbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Img } from "@/components/utility/img"
import { Link } from "@/components/utility/link"

type SupportCategory = {
  id: number
  title: string
  description: string
  imageSrc: string
  url: string
}

const supportCategories: SupportCategory[] = [
  {
    id: 1,
    title: "Üyelik ve Abonelik",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quaerat delectus error repellendus ipsam tempore fugit explicabo quibusdam expedita ut?",
    imageSrc: "/img/sample.jpg",
    url: "uyelik-ve-abonelik",
  },
  {
    id: 2,
    title: "Katalog Oluşturma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quaerat delectus error repellendus ipsam tempore fugit explicabo quibusdam expedita ut?",
    imageSrc: "/img/sample.jpg",
    url: "uyelik-ve-abonelik",
  },
  {
    id: 3,
    title: "Ödeme ve İptal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quaerat delectus error repellendus ipsam tempore fugit explicabo quibusdam expedita ut?",
    imageSrc: "/img/sample.jpg",
    url: "uyelik-ve-abonelik",
  },
]

export default function Page() {
  return (
    <div className="px-2 py-8 pb-32">
      <div className="flex items-end justify-between mb-16 space-y-2">
        <div>
          <h1 className="text-40 font-albert-sans font-normal">Destek</h1>
          <p className="text-20 font-mukta font-light">Size nasıl yardımcı olabiliriz?</p>
        </div>
        <div className="relative">
          <Searchbar />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {supportCategories.map((category) => (
          <Link href={`/destek/${category.url}`} key={category.id}>
            <Card>
              <CardHeader className="p-0">
                <Img src={category.imageSrc} height={500} width={500} alt={category.title} className="object-cover" />
              </CardHeader>
              <CardContent className="mt-4 mb-8 space-y-2 p-0">
                <h2 className="text-30 font-albert-sans font-normal">{category.title}</h2>
                <p className="text-16 font-mukta font-light">{category.description}</p>
              </CardContent>
              <CardFooter className="p-0 pt-4">
                <Button variant="outline">Tümünü Gör</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
