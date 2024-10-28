import { Metadata } from "next"
import HomePage from "./home/page"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Welcome to Our Website",
  description: "This is the home page of our amazing application.",
}

export default function Page() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
}
