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

interface MenuItem {
  id: string
  title: string
  href: string
}

export interface SideNavigationProps {
  title: string
  items: MenuItem[]
}

interface FAQItem {
  id: string
  question: string
  answer: string | string[]
}

export interface SupportFaqProps {
  id: string
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
