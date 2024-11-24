import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PricingToggle } from "./components/pricing-toggle"

const plans = [
  {
    name: "Temel Plan",
    monthlyPrice: 30,
    yearlyPrice: 30 * 12,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: {
      users: "1 Kullanıcı",
      images: "Ürün Başı 1 Görsel",
      categories: "5 Adet",
      products: "100 Adet",
      language: "-",
      reports: "Gelişmiş Raporlar",
      training: "Ücretsiz Panel Eğitimi",
      categoryStructure: "Hiyerarşik Kategori Yapısı",
      url: "Mağazanıza Özel URL Adresi",
      notifications: "Sipariş Durumu Mail Bildirimi",
    },
  },
  {
    name: "Gelişmiş Plan",
    monthlyPrice: 40,
    yearlyPrice: 40 * 12,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    popular: true,
    features: {
      users: "3 Kullanıcı",
      images: "Ürün Başı 3 Görsel",
      categories: "10 Adet",
      products: "250 Adet",
      language: "2 Adet",
      reports: "Gelişmiş Raporlar",
      training: "Ücretsiz Panel Eğitimi",
      categoryStructure: "Hiyerarşik Kategori Yapısı",
      url: "Mağazanıza Özel URL Adresi",
      notifications: "Sipariş Durumu Mail Bildirimi",
    },
  },
  {
    name: "Profesyonel Plan",
    monthlyPrice: 55,
    yearlyPrice: 55 * 12,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: {
      users: "5 Kullanıcı",
      images: "Ürün Başı 6 Görsel",
      categories: "Sınırsız",
      products: "Sınırsız",
      language: "4 Adet",
      reports: "Gelişmiş Raporlar",
      training: "Ücretsiz Panel Eğitimi",
      categoryStructure: "Hiyerarşik Kategori Yapısı",
      url: "Mağazanıza Özel URL Adresi",
      notifications: "Sipariş Durumu Mail Bildirimi",
    },
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center mx-auto px-4 tablet:px-10 py-8 pb-8 tablet:pb-32">
      <h1 className="text-30 font-normal font-albert-sans leading-tight text-center max-w-lg mb-8 tablet:mb-16 tracking-tighter">
        Üyelik oluşturmak için öncelikle size en uygun paketi seçin.
      </h1>
      <PricingToggle plans={plans} />
      {plans.length > 0 && (
        <section className="w-full px-0 tablet:px-32 mt-14">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-14 font-albert-sans font-semibold py-8">Özellikler</TableHead>
                {plans.map((plan, index) => (
                  <TableHead className="text-14 font-albert-sans font-semibold py-8" key={index}>
                    {plan.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.keys(plans[0].features).map((feature, index) => (
                <TableRow key={index}>
                  <TableCell className="text-14 font-albert-sans font-medium py-5">{feature}</TableCell>
                  {plans.map((plan, planIndex) => (
                    <TableCell className="text-14 font-albert-sans font-medium py-5" key={planIndex}>
                      {plan.features[feature as keyof typeof plan.features]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      )}
    </div>
  )
}
