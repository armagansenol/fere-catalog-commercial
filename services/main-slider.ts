import { MainSliderProps } from "@/types"

export async function getMainSlider(lang?: string): Promise<MainSliderProps[]> {
  const url = "https://cms.ferecatalog.com/services/banner.php"

  try {
    const response = await fetch(url, {
      method: "POST",
      body: lang ? JSON.stringify({ lang }) : undefined,
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("data", data)

    return data as MainSliderProps[]
  } catch (error) {
    console.error("Error fetching banners:", error)
    throw new Error("Failed to fetch banners")
  }
}
