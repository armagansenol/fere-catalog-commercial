"use server"

import apiClient from "@/lib/api"
import { MainSliderProps } from "@/types"
import { AxiosRequestConfig } from "axios"

export async function getMainSlider(lang?: string) {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    }

    const response = await apiClient.post<MainSliderProps[]>("/banner.php", lang ? { lang } : undefined, config)
    return response.data
  } catch (error) {
    console.error("Error fetching banners:", error)
    throw new Error("Failed to fetch banners")
  }
}
