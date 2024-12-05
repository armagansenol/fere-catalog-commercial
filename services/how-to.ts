import { HowToItem } from "@/types"

export async function getHowTo(lang?: string): Promise<HowToItem[]> {
  const url = "https://cms.ferecatalog.com/services/howto.php"

  const response = await fetch(url, {
    method: "POST",
    body: lang ? JSON.stringify({ lang }) : undefined,
    cache: "no-store",
  })
  const data = await response.json()
  return data as HowToItem[]
}
