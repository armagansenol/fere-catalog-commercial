import { Plan } from "@/types"

export async function getPlans(lang?: string): Promise<Plan[]> {
  const url = `https://cms.ferecatalog.com/services/plans.php`

  const response = await fetch(url, {
    method: "POST",
    body: lang ? JSON.stringify({ lang }) : undefined,
    cache: "no-store",
  })

  const data = await response.json()
  return data
}
