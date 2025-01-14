import { SupportDetailResponse } from "@/types"
import { useQuery } from "@tanstack/react-query"

interface SupportDetailParams {
  url: string
  lang?: string
}

export const getSupportDetail = async (params: SupportDetailParams): Promise<SupportDetailResponse> => {
  const queryParams = new URLSearchParams({
    url: params.url,
    ...(params.lang && { lang: params.lang }),
  }).toString()

  console.log("qp", queryParams)

  const response = await fetch(`https://cms.ferecatalog.com/services/supportDetail.php?${queryParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Support detail fetch failed: ${response.statusText}`)
  }

  return response.json()
}

// React Query hook
export const useSupportDetail = (url: string, lang?: string) => {
  return useQuery({
    queryKey: ["supportDetail", url, lang],
    queryFn: () => getSupportDetail({ url, lang }),
  })
}
