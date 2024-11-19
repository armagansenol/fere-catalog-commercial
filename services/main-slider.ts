// import apiClient from "@/lib/api"
// import { MainSliderProps } from "@/types"
// import { AxiosRequestConfig } from "axios"

// export async function getMainSlider(lang?: string) {
//   try {
//     const config: AxiosRequestConfig = {
//       headers: {
//         "Cache-Control": "no-cache",
//         Pragma: "no-cache",
//         Expires: "0",
//       },
//     }

//     const response = await apiClient.post<MainSliderProps[]>("/banner.php", lang ? { lang } : undefined, config)
//     return response.data
//   } catch (error) {
//     console.error("Error fetching banners:", error)
//     throw new Error("Failed to fetch banners")
//   }
// }

"use server"

import { MainSliderProps } from "@/types"

export async function getMainSlider(lang?: string): Promise<MainSliderProps[]> {
  const url = "https://cms.ferecatalog.com/services/banner.php"

  try {
    const response = await fetch(url, {
      method: "POST",
      body: lang ? JSON.stringify({ lang }) : undefined,
      cache: "no-store",
      next: { revalidate: 0 },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data as MainSliderProps[]
  } catch (error) {
    console.error("Error fetching banners:", error)
    throw new Error("Failed to fetch banners")
  }
}
