import { NextSeoProps } from "next-seo"
import { StaticImageData } from "next/image"

export interface Seo {
  title: NextSeoProps["title"]
  description: NextSeoProps["description"]
}

export interface Filter {
  ui: string
  type: string
}

export interface Social {
  icon: string
  ui: string
  url: string
}

export interface TeamMember {
  id?: string
  description: string
  name: string
  media: Media
  role: string
  social: Social[]
}

export interface Company {
  id?: string
  description: string
  logo: Media
  media: Media
  name: string
  social: Social[]
  isExit: boolean
}

export interface CardCompanyDetail {
  company: Company
  title?: string
}

export interface Media {
  type: MediaType
  src: string | StaticImageData
  height?: number
  width?: number
}

export interface News {
  id?: string
  ui: string
  url: string
  date: string
}

export enum MediaType {
  image = "image",
  video = "video",
}

export enum PageTransitionPhase {
  IDLE = "IDLE",
  APPEAR = "APPEAR",
  IN = "IN",
  OUT = "OUT",
}

export enum CursorType {
  default = "default",
  view = "view",
  email = "email",
}

export interface SideNavigationProps {
  items: {
    id: string
    title: string
  }[]
}

export interface FAQItem {
  id: string
  question: string
  reply: string
}

export interface SupportFaqProps {
  title: string
  items: FAQItem[]
}

export enum SocialMedia {
  tiktok = "tiktok",
  facebook = "facebook",
  instagram = "instagram",
  x = "x",
  youtube = "youtube",
}

export interface BannerImage {
  src: string
  alt: string
}

export interface MainSliderProps {
  id: number
  duration: number
  image: BannerImage
  title: string
  description: string
  button: { ui: string; url: string } | null
}

export interface Testimonial {
  id: number
  name: string
  company: string
  comment: string
}

export interface Sector {
  id: string
  name: string
}

export interface SupportArticle {
  id: number
  image: {
    src: string
    alt: string
  }
  title: string
  description: string
  url: string
}

export interface SupportSearchParams {
  keyword: string
  lang?: string
}

export interface SupportFAQProps {
  faqItems: FAQItem[]
}

type Image = {
  src: string
  alt: string
}

type Page = {
  id: number
  image: Image
  title: string
  description: string
  seoTitle: string
  seoDescription: string
}

// type Question = {
//   id: number
//   question: string
//   reply: string
// }

export type TableOfContentEntry = {
  id: number
  question: string
}

export interface SupportDetailResponse {
  page: Page
  questions: FAQItem[]
  tableOfContent: TableOfContentEntry[]
}

export interface HowToItem {
  id: number
  image: {
    src: string
    alt: string
  }
  title: string
  description: string
}

// Define the structure for the features array
type Feature = [string, ...string[]]

// Define the structure for the main object
type PricingData = {
  packages: null | string[] // If packages could be added later, use string[]; otherwise null
  features: Feature[]
}

// Define the array type
export type PricingArray = PricingData[]

export interface Plan {
  id: number
  planType: "monthly" | string
  title: string
  description: string
  price: string
  priceText: string
  recommended: boolean
  features: string[]
}
