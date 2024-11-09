export type SidebarItem = {
  id: number
  title: string
}

export type FAQItem = {
  id: number
  question: string
  answer: string | string[]
}

export type SupportCategory = {
  id: number
  title: string
  description: string
  sidebarItems: SidebarItem[]
  faqs: FAQItem[]
}

export const supportData: SupportCategory = {
  id: 1,
  title: "Üyelik ve Abonelik",
  description:
    "Bu kategoriye ait tüm soruları aşağıda bulabilirsiniz. Ulaşamadığınız bir soru varsa sayfanın sonundaki iletişim formunu doldururp bizimle iletişime geçebilirsiniz.",
  sidebarItems: [
    { id: 1, title: "Üyelik Türleri ve Fiyatlandırma" },
    { id: 2, title: "Abonelik Planları Karşılaştırması" },
    { id: 3, title: "Sürdürülebilir Tekstil Eko-Dostu Malzemeler ve Üretim Teknikleri" },
    { id: 4, title: "3D Basılmış Tekstil ve Moda Üzerindeki Etkisi" },
    { id: 5, title: "Giyilebilir Teknoloji: Popüler Ürünler ve İnovasyonlar" },
    { id: 6, title: "Endüstri 4.0 ve Dijitalleşmenin Tekstildeki Rolü" },
    { id: 7, title: "Gelecek Öngörüleri ve Teknolojik Gelişmeler" },
    { id: 8, title: "İletişim Formu" },
  ],
  faqs: [
    {
      id: 1,
      question: "Nasıl üye olurum?",
      answer: [
        "İlk olarak, hemen üye ol butonuna tıklayın.",
        "Üyelik Formununda bulunan bilgileri doldurun.",
        "Verdiğiniz bilgileri doğrulayın ve gerekirse e-posta veya telefon numaranızı onaylayın.",
        "Üyelik işlemi tamamlandığında, platforma giriş yapabilir ve kullanmaya başlayabilirsiniz.",
      ],
    },
    {
      id: 2,
      question: "Üye olmak için işletme sahibi olmam gerekir mi?",
      answer: "Hayır, bireysel kullanıcılar da üye olabilir.",
    },
    {
      id: 3,
      question: "Ürün satışı için ödeme altyapısı sağlanıyor mu?",
      answer: "Evet, güvenli ödeme altyapımız mevcuttur.",
    },
  ],
}
