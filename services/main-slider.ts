"use server"

import apiClient from "@/lib/api"
import { MainSliderProps } from "@/types"

export async function getMainSlider(lang?: string) {
  try {
    const response = await apiClient.post<MainSliderProps[]>("/banner.php", lang ? { lang } : undefined)
    return response.data
  } catch (error) {
    console.error("Error fetching banners:", error)
    throw new Error("Failed to fetch banners")
  }
}
