import { Plan } from "@/types"

export async function getPlans(lang?: string): Promise<Plan[]> {
  const url = `https://cms.ferecatalog.com/services/plans.php`

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
    return data
  } catch (error) {
    console.error("Error fetching banners:", error)
    throw new Error("Failed to fetch banners")
  }
}
