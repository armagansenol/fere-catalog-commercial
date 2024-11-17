import { useQuery } from "@tanstack/react-query"

interface SupportDetailResponse {
  page: string | null
  questions: Array<unknown> // You can define a specific type for questions if needed
  table_of_content: string | null
}

interface SupportDetailParams {
  url: string
  lang?: string
}

export const getSupportDetail = async (params: SupportDetailParams): Promise<SupportDetailResponse> => {
  const queryParams = new URLSearchParams({
    URL: params.url, // Note: URL parameter is case-sensitive
    ...(params.lang && { lang: params.lang }),
  }).toString()

  const response = await fetch(`https://cms.ferecatalog.com/services/supportDetail.php?${queryParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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

// Example usage:
/*
const YourComponent = () => {
  const { data, isLoading, error } = useSupportDetail("your-url-here", "en")

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  return (
    <div>
      {data?.page && <div dangerouslySetInnerHTML={{ __html: data.page }} />}
      {data?.table_of_content && (
        <div dangerouslySetInnerHTML={{ __html: data.table_of_content }} />
      )}
    </div>
  )
}
*/
