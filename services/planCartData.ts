import { PlanCartData } from "@/types"

export async function getPlanCartData(selectedPlan: string, lang?: string): Promise<PlanCartData> {
  const url = `https://cms.ferecatalog.com/services/planDetail.php?id=${selectedPlan}`

  const response = await fetch(url, {
    method: "POST",
    body: lang ? JSON.stringify({ lang }) : undefined,
    cache: "no-store",
  })

  const data = await response.json()
  return data
}
