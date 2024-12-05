import { fetchWithErrorHandling } from "@/lib/api"
import { FAQItem } from "@/types"
import { useMutation } from "@tanstack/react-query"

interface SupportSearchParams {
  keyword: string
  lang?: string
}

interface SupportSearchParams {
  keyword: string
  lang?: string
}

const getSupportArticles = async (params: SupportSearchParams): Promise<FAQItem[]> => {
  try {
    const response = fetchWithErrorHandling<FAQItem[]>(
      `support?keyword=${encodeURIComponent(params.keyword)}&lang=${params.lang}`,
      {
        method: "GET",
      }
    )
    return response
  } catch (error) {
    console.error("Error fetching support articles:", error)
    throw error
  }
}

export const useSupportSearch = () => {
  return useMutation<FAQItem[], Error, SupportSearchParams>({
    mutationFn: getSupportArticles,
    onError: (error) => {
      console.error("Support search error:", error)
    },
  })
}

export const useSearchSupport = () => {
  const { mutateAsync, isPending, error, data } = useSupportSearch()

  const searchArticles = async (keyword: string, lang?: string) => {
    // if (!keyword.trim()) {
    //   throw new Error("Keyword is required for searching.")
    // }

    return await mutateAsync({ keyword, lang })
  }

  return {
    searchArticles,
    isSearching: isPending,
    error,
    data,
  }
}
