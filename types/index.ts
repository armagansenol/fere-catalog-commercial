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
  icon: any
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
